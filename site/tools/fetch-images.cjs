#!/usr/bin/env node
/**
 * Wikimedia Commons 批量配图 —— collections 排名卡
 * 用法: node fetch-images.js
 * 对 collections.json 每项按 keywords 搜 Commons，下载 640px 缩略图到 public/images/collections/<slug>-<n>.jpg
 * 已有 img 的项跳过（幂等）
 */
const fs = require('fs');
const path = require('path');

const DATA = path.join(__dirname, '..', 'src/data/collections.json');
const OUT = path.join(__dirname, '..', 'public/images/collections');
fs.mkdirSync(OUT, { recursive: true });

const data = JSON.parse(fs.readFileSync(DATA, 'utf8'));

// 每项的 Commons 搜索词（名 + 地标限定）
const KW = {
  '九寨沟': 'Jiuzhaigou valley lake', '黄山': 'Huangshan mountains', '漓江（桂林—阳朔）': 'Li River Guilin karst',
  '张家界武陵源': 'Zhangjiajie Wulingyuan', '颐和园': 'Summer Palace Beijing', '长白山天池': 'Heaven Lake Changbai',
  '普达措': 'Pudacuo national park', '喀纳斯': 'Kanas Lake Xinjiang', '武夷山九曲溪': 'Wuyi Mountains river',
  '稻城亚丁': 'Daocheng Yading',
  '成都': 'Chengdu city', '广州': 'Guangzhou Canton Tower', '西安': "Xi'an city wall", '重庆': 'Chongqing skyline',
  '长沙': 'Changsha city', '顺德': 'Shunde', '扬州': 'Yangzhou', '北京': 'Forbidden City Beijing',
  '昆明': 'Kunming city', '哈尔滨': 'Harbin Saint Sophia',
  '故宫': 'Forbidden City hall', '兵马俑': 'Terracotta Army', '莫高窟': 'Mogao Caves Dunhuang',
  '长城（慕田峪/金山岭）': 'Great Wall Mutianyu', '布达拉宫': 'Potala Palace Lhasa', '苏州园林（拙政园等）': 'Humble Administrator Garden Suzhou',
  '丽江古城': 'Lijiang old town', '云冈石窟': 'Yungang Grottoes', '鼓浪屿': 'Gulangyu island', '开平碉楼': 'Kaiping Diaolou',
  '泰山': 'Mount Tai', '华山': 'Mount Hua cliff', '峨眉山': 'Mount Emei golden', '玉龙雪山': 'Jade Dragon Snow Mountain',
  '武当山': 'Wudang Mountains', '庐山': 'Mount Lu Lushan', '衡山': 'Mount Heng Hunan', '恒山': 'Hengshan Hanging Temple',
  '国家博物馆': 'National Museum of China', '陕西历史博物馆': "Shaanxi History Museum", '上海博物馆': 'Shanghai Museum',
  '秦始皇帝陵博物院': 'Terracotta Army pit', '湖南省博物院': 'Hunan Museum', '敦煌研究院（莫高窟数字中心）': 'Mogao Caves',
  '苏州博物馆': 'Suzhou Museum', '四川广汉三星堆': 'Sanxingdui bronze', '湖北省博物馆': 'Hubei Provincial Museum',
  '张掖七彩丹霞': 'Zhangye Danxia', '茶卡盐湖': 'Chaka Salt Lake', '艾肯泉（恶魔之眼）': 'Aiken Spring',
  '元阳梯田': 'Yuanyang rice terraces', '喀纳斯三湾': 'Kanas river bay', '梵净山': 'Fanjingshan',
  '恩施大峡谷': 'Enshi Grand Canyon', '盘锦红海滩': 'Panjin red beach', '禾木村': 'Hemu village Xinjiang', '雾凇岛': 'Rime island Jilin',
};

const jobs = [];
for (const [slug, c] of Object.entries(data.collections)) {
  c.items.forEach((it, i) => {
    if (!it.img && KW[it.name]) jobs.push({ slug, n: i + 1, name: it.name, q: KW[it.name] });
  });
  if (!c.hero && KW[c.title] === undefined) c.hero = c.hero || null;
}
console.log(`jobs: ${jobs.length}`);

async function search(q) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=filetype:bitmap ${encodeURIComponent(q)}&gsrlimit=5&gsrnamespace=6&prop=imageinfo&iiprop=url&iiurlwidth=640&format=json&origin=*`;
  const r = await fetch(url, { headers: { 'User-Agent': 'city-guide-personal/1.0 (personal non-commercial site)' }, signal: AbortSignal.timeout(12000) });
  const j = await r.json();
  const pages = j?.query?.pages ? Object.values(j.query.pages) : [];
  for (const p of pages) {
    const t = p.imageinfo?.[0];
    if (t?.thumburl && /\.(jpe?g|png)$/i.test(t.thumburl)) return t.thumburl;
  }
  return null;
}

async function dl(url, dest) {
  const r = await fetch(url, { headers: { 'User-Agent': 'city-guide-personal/1.0' }, signal: AbortSignal.timeout(20000) });
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
  const buf = Buffer.from(await r.arrayBuffer());
  if (buf.length < 8000) throw new Error('too small');
  fs.writeFileSync(dest, buf);
}

(async () => {
  let ok = 0, fail = [];
  for (const job of jobs) {
    const dest = path.join(OUT, `${job.slug}-${job.n}.jpg`);
    try {
      const url = await search(job.q);
      if (!url) throw new Error('no result');
      await dl(url, dest);
      // 写回 JSON
      data.collections[job.slug].items[job.n - 1].img = `/images/collections/${job.slug}-${job.n}.jpg`;
      ok++;
      process.stdout.write(`✓ ${job.slug}-${job.n} ${job.name}\n`);
    } catch (e) {
      fail.push(`${job.slug}-${job.n} ${job.name}: ${e.message}`);
      process.stdout.write(`✗ ${job.slug}-${job.n} ${job.name}: ${e.message}\n`);
    }
    await new Promise((r) => setTimeout(r, 250));
  }
  fs.writeFileSync(DATA, JSON.stringify(data, null, 2));
  console.log(`\ndone: ${ok} ok, ${fail.length} fail`);
  if (fail.length) console.log(fail.join('\n'));
})();
