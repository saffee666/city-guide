#!/usr/bin/env python
"""Wikimedia Commons 批量配图 —— collections 排名卡（curl 子进程版）
用法: python fetch_images.py  （幂等：已有 img 的项跳过）
"""
import json, subprocess, time, os, io

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))  # site/
DATA = os.path.join(BASE, 'src', 'data', 'collections.json')
OUT = os.path.join(BASE, 'public', 'images', 'collections')
os.makedirs(OUT, exist_ok=True)
UA = 'city-guide-personal/1.0 (personal non-commercial site)'

KW = {
  '九寨沟': 'Jiuzhaigou valley lake', '黄山': 'Huangshan mountains', '漓江（桂林—阳朔）': 'Li River Guilin karst',
  '张家界武陵源': 'Zhangjiajie Wulingyuan', '颐和园': 'Summer Palace Beijing', '长白山': 'Changbai mountain lake',
  '普达措': 'Pudacuo national park', '喀纳斯': 'Kanas Lake Xinjiang', '武夷山九曲溪': 'Wuyi Mountains river',
  '稻城亚丁': 'Daocheng Yading',
  '成都': 'Chengdu city skyline', '广州': 'Guangzhou Canton Tower', '西安': "Xi'an city wall", '重庆': 'Chongqing skyline',
  '长沙': 'Changsha city', '顺德': 'Shunde', '扬州': 'Yangzhou Slender', '北京': 'Forbidden City Beijing',
  '昆明': 'Kunming city', '哈尔滨': 'Harbin Saint Sophia',
  '故宫': 'Forbidden City hall', '故宫博物院': 'Palace Museum Beijing corner', '兵马俑': 'Terracotta Army', '莫高窟': 'Mogao Caves Dunhuang',
  '长城（慕田峪/金山岭）': 'Great Wall Mutianyu', '布达拉宫': 'Potala Palace Lhasa', '苏州园林（拙政园等）': 'Humble Administrator Garden Suzhou',
  '丽江古城': 'Lijiang old town', '云冈石窟': 'Yungang Grottoes', '鼓浪屿': 'Gulangyu island', '开平碉楼': 'Kaiping Diaolou',
  '泰山': 'Mount Tai summit', '华山': 'Mount Hua cliff', '峨眉山': 'Mount Emei golden summit', '玉龙雪山': 'Jade Dragon Snow Mountain',
  '武当山': 'Wudang Mountains temple', '庐山': 'Lushan mountain', '衡山': 'Mount Heng Hunan temple', '恒山': 'Hengshan Hanging Temple Datong',
  '国家博物馆': 'National Museum of China building', '陕西历史博物馆': 'Shaanxi History Museum Xian', '上海博物馆': 'Shanghai Museum building',
  '秦始皇帝陵博物院': 'Terracotta Army pit', '湖南省博物院': 'Hunan Museum', '敦煌研究院（莫高窟数字中心）': 'Mogao Caves',
  '苏州博物馆': 'Suzhou Museum', '四川广汉三星堆': 'Sanxingdui bronze mask', '湖北省博物馆': 'Hubei Provincial Museum',
  '张掖七彩丹霞': 'Zhangye Danxia landform', '茶卡盐湖': 'Chaka salt lake Qinghai', '艾肯泉（恶魔之眼）': 'Aiken spring/Qiuku',
  '元阳梯田': 'Yuanyang rice terraces', '喀纳斯三湾': 'Kanas river bay', '梵净山': 'Fanjingshan red cloud',
  '恩施大峡谷': 'Enshi Grand Canyon', '盘锦红海滩': 'Panjin red beach', '禾木村': 'Hemu village Xinjiang', '雾凇岛': 'Rime island Jilin tree',
}

def curl(url, out=None, timeout=30):
    cmd = ['curl', '-s', '--ssl-no-revoke', '--max-time', str(timeout), '-A', UA]
    if out:
        cmd += ['-o', out]
    cmd.append(url)
    return subprocess.run(cmd, capture_output=True, timeout=timeout + 10).returncode == 0

def search(q):
    url = ('https://commons.wikimedia.org/w/api.php?action=query&generator=search'
           f'&gsrsearch=filetype:bitmap%20{q}&gsrlimit=5&gsrnamespace=6'
           '&prop=imageinfo&iiprop=url&iiurlwidth=640&format=json')
    p = subprocess.run(['curl', '-s', '--ssl-no-revoke', '--max-time', '30', '-A', UA, url],
                       capture_output=True, timeout=45)
    try:
        j = json.loads(p.stdout.decode('utf-8', 'replace'))
    except Exception:
        return None
    pages = (j.get('query') or {}).get('pages') or {}
    for pg in sorted(pages.values(), key=lambda x: x.get('index', 99)):
        for info in pg.get('imageinfo', []):
            tu = info.get('thumburl', '')
            if tu.lower().split('?')[0].endswith(('.jpg', '.jpeg', '.png')):
                return tu
    return None

with io.open(DATA, encoding='utf-8') as f:
    data = json.load(f)

jobs = []
for slug, c in data['collections'].items():
    for i, it in enumerate(c['items']):
        if not it.get('img') and it['name'] in KW:
            jobs.append((slug, i + 1, it['name'], KW[it['name']]))

print(f'jobs: {len(jobs)}', flush=True)
ok = 0
fails = []
for slug, n, name, q in jobs:
    dest = os.path.join(OUT, f'{slug}-{n}.jpg')
    from urllib.parse import quote
    try:
        url = search(quote(q))
        if not url:
            raise RuntimeError('no result')
        if not curl(url, out=dest, timeout=60):
            raise RuntimeError('download failed')
        if os.path.getsize(dest) < 8000:
            os.remove(dest)
            raise RuntimeError('too small')
        data['collections'][slug]['items'][n - 1]['img'] = f'/images/collections/{slug}-{n}.jpg'
        ok += 1
        print(f'ok {slug}-{n} {name}', flush=True)
    except Exception as e:
        fails.append(f'{slug}-{n} {name}: {e}')
        print(f'FAIL {slug}-{n} {name}: {e}', flush=True)
    time.sleep(0.3)

with io.open(DATA, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print(f'\ndone: {ok} ok, {len(fails)} fail')
for f_ in fails:
    print(f_)
