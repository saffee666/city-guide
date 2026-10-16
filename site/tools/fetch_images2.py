#!/usr/bin/env python
"""第二批批量配图：首页 hero / 城市卡 / 城市页景点卡 / inspiration 双卡（curl 版，幂等）"""
import json, subprocess, time, os, io, glob, sys
from urllib.parse import quote

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))  # site/
PUB = os.path.join(BASE, 'public', 'images')
UA = 'city-guide-personal/1.0 (personal non-commercial site)'

def curl(url, out, timeout=60):
    cmd = ['curl', '-s', '--ssl-no-revoke', '--max-time', str(timeout), '-A', UA, '-o', out, url]
    return subprocess.run(cmd, capture_output=True, timeout=timeout + 10).returncode == 0

def search(q, limit=6):
    url = ('https://commons.wikimedia.org/w/api.php?action=query&generator=search'
           f'&gsrsearch=filetype:bitmap%20{quote(q)}&gsrlimit={limit}&gsrnamespace=6'
           '&prop=imageinfo&iiprop=url&iiurlwidth=960&format=json')
    p = subprocess.run(['curl', '-s', '--ssl-no-revoke', '--max-time', '30', '-A', UA, url],
                       capture_output=True, timeout=45)
    try:
        j = json.loads(p.stdout.decode('utf-8', 'replace'))
    except Exception:
        return []
    pages = (j.get('query') or {}).get('pages') or {}
    out = []
    for pg in sorted(pages.values(), key=lambda x: x.get('index', 99)):
        for info in pg.get('imageinfo', []):
            tu = info.get('thumburl', '')
            if tu.lower().split('?')[0].endswith(('.jpg', '.jpeg', '.png')):
                out.append(tu)
    return out

def grab(outpath, queries, min_kb=8):
    """按候选搜索词列表逐个尝试，成功即下"""
    if os.path.exists(outpath):
        return 'skip'
    for q in queries:
        urls = search(q)
        for u in urls:
            if curl(u, outpath):
                if os.path.getsize(outpath) >= min_kb * 1024:
                    return 'ok'
                os.remove(outpath)
        time.sleep(0.2)
    return 'fail'

# ---------- 组1: 首页 hero 4 张 ----------
HERO = [
    (['Great Wall of China Mutianyu sunrise', 'Great Wall Jinshanling'], 'hero/1.jpg'),
    (['Li River Guilin fisherman cormorant', 'Li River karst Guilin'], 'hero/2.jpg'),
    (['Potala Palace Lhasa panorama', 'Potala Palace'], 'hero/3.jpg'),
    (['Shanghai Pudong skyline night', 'Shanghai Lujiazui'], 'hero/4.jpg'),
]

# ---------- 组2: 22 城卡图 ----------
CITY_KW = {
    'fuzhou': ['Fuzhou Sanfang Qixiang', 'Fuzhou city'],
    'beijing': ['Forbidden City panorama Beijing'],
    'xian': ["Xi'an Bell Tower night", "Xi'an Bell Tower"],
    'chengdu': ['Chengdu Anshun bridge', 'Chengdu skyline'],
    'chongqing': ['Hongya Cave Chongqing night', 'Chongqing skyline night'],
    'shanghai': ['Shanghai Pudong skyline'],
    'hangzhou': ['West Lake Hangzhou pagoda', 'Leifeng Pagoda'],
    'nanjing': ['Nanjing city wall Xuanwu', 'Nanjing Jiming Temple'],
    'suzhou': ['Suzhou garden master', 'Pingjiang Road Suzhou'],
    'guilin': ['Guilin karst Li River'],
    'zhangjiajie': ['Zhangjiajie pillars', 'Zhangjiajie national park'],
    'wuhan': ['Yellow Crane Tower Wuhan'],
    'changsha': ['Changsha skyline Xiangjiang', 'Changsha city'],
    'guangzhou': ['Canton Tower night', 'Guangzhou skyline'],
    'shenzhen': ['Shenzhen skyline Ping An', 'Shenzhen skyline'],
    'xiamen': ['Gulangyu Xiamen', 'Xiamen island'],
    'harbin': ['Harbin Saint Sophia winter', 'Harbin ice festival'],
    'lhasa': ['Potala Palace Lhasa'],
    'shangrila': ['Songzanlin Monastery', 'Shangri-La Ganden Sumtseling'],
    'lijiang': ['Lijiang old town roofs', 'Lijiang Black Dragon Pool'],
    'kunming': ['Kunming Dianchi Lake', 'Kunming city'],
    'kashgar': ['Kashgar old town', 'Kashgar Id Kah'],
    'datong': ['Yungang Grottoes Buddha', 'Datong city wall'],
}

# ---------- 组3: 城市页景点卡（从 cities/*.json 的 attractions 取名） ----------
SPOT_EXTRA = {
    # 城市 slug: {attraction 名或 en: 搜索词}
}
GENERIC = {
    '天坛': 'Temple of Heaven Beijing', '天安门': 'Tiananmen', '颐和园': 'Summer Palace',
    '慕田峪长城': 'Mutianyu Great Wall', '长城': 'Great Wall China', '胡同': 'Beijing hutong',
    '回民街': "Xi'an Muslim Quarter", '大唐不夜城': "Xi'an Datang Everbright", '碑林': 'Beilin Museum',
    '大雁塔': 'Giant Wild Goose Pagoda', '城墙': 'Xi city wall',
    '宽窄巷子': 'Kuanzhai Alley Chengdu', '武侯祠': 'Wuhou Shrine', '都江堰': 'Dujiangyan',
    '洪崖洞': 'Hongya Cave', '磁器口': 'Ciqikou Chongqing', '长江索道': 'Yangtze cable Chongqing',
    '外滩': 'The Bund Shanghai', '豫园': 'Yu Garden', '陆家嘴': 'Lujiazui',
    '西湖': 'West Lake Hangzhou', '灵隐寺': 'Lingyin Temple', '河坊街': 'Hefang Street',
    '中山陵': 'Sun Yat-sen Mausoleum', '夫子庙': 'Confucius Temple Nanjing', '总统府': 'Presidential Palace Nanjing',
    '拙政园': 'Humble Administrator Garden', '平江路': 'Pingjiang Road', '虎丘': 'Tiger Hill Suzhou',
    '漓江': 'Li River', '阳朔': 'Yangshuo', '象鼻山': 'Elephant Trunk Hill',
    '武陵源': 'Wulingyuan', '天门山': 'Tianmen Mountain', '黄龙洞': 'Yellow Dragon Cave',
    '黄鹤楼': 'Yellow Crane Tower', '东湖': 'East Lake Wuhan', '户部巷': 'Hubu Alley',
    '橘子洲': 'Orange Isle', '太平街': 'Taiping Street Changsha',
    '沙面': 'Shamian Island', '陈家祠': 'Chen Clan Ancestral Hall', '白云山': 'Baiyun Mountain Guangzhou',
    '世界之窗': 'Window of the World Shenzhen', '大梅沙': 'Dameisha beach',
    '鼓浪屿': 'Gulangyu', '南普陀寺': 'South Putuo Temple', '环岛路': 'Xiamen island road',
    '冰雪大世界': 'Harbin Ice and Snow World', '圣索菲亚': 'Saint Sophia Cathedral Harbin', '中央大街': 'Central Street Harbin',
    '布达拉宫': 'Potala Palace', '大昭寺': 'Jokhang Temple', '八廓街': 'Barkhor Street',
    '松赞林寺': 'Songzanlin Monastery', '普达措': 'Pudacuo', '独克宗': 'Dukezong',
    '丽江古城': 'Lijiang Old Town', '玉龙雪山': 'Jade Dragon Snow Mountain', '束河': 'Shuhe ancient town',
    '滇池': 'Dianchi Lake', '石林': 'Stone Forest Kunming', '翠湖': 'Green Lake Kunming',
    '喀什古城': 'Kashgar old city', '艾提尕尔': 'Id Kah Mosque', '香妃园': 'Apakh Hoja Tomb',
    '云冈石窟': 'Yungang Grottoes', '华严寺': 'Huayan Temple Datong', '悬空寺': 'Hanging Temple',
    '三坊七巷': 'Sanfang Qixiang', '鼓山': 'Gu Mountain Fuzhou', '烟台山': 'Yantai Hill Fuzhou',
}

def spot_queries(a, city_zh):
    """ attraction 的搜索词候选列表"""
    qs = []
    if a.get('en'):
        qs.append(f"{a['en']} {city_zh}")
    name = a['name']
    for gk, gv in GENERIC.items():
        if gk in name:
            qs.append(gv)
            break
    qs.append(f"{name} {city_zh}")
    return qs

def main():
    jobs = []
    # hero
    for qs, rel in HERO:
        jobs.append((os.path.join(PUB, rel), qs, 'hero'))
    # city cards
    for slug, qs in CITY_KW.items():
        jobs.append((os.path.join(PUB, 'cities', f'{slug}.jpg'), qs, 'city'))
    os.makedirs(os.path.join(PUB, 'cities'), exist_ok=True)
    os.makedirs(os.path.join(PUB, 'hero'), exist_ok=True)
    os.makedirs(os.path.join(PUB, 'spots'), exist_ok=True)

    # spots from city JSONs
    city_zh = {}
    for fp in glob.glob(os.path.join(BASE, 'src', 'content', 'cities', '*.json')):
        with io.open(fp, encoding='utf-8') as f:
            c = json.load(f)
        slug = os.path.splitext(os.path.basename(fp))[0]
        city_zh[slug] = c['name']
        for i, a in enumerate(c.get('attractions', [])):
            rel = f'spots/{slug}-{i+1}.jpg'
            jobs.append((os.path.join(PUB, rel), spot_queries(a, c['name']), 'spot'))

    print(f'total jobs: {len(jobs)}', flush=True)
    ok = skip = 0
    fails = []
    for out, qs, kind in jobs:
        r = grab(out, qs)
        if r == 'skip':
            skip += 1
            continue
        if r == 'ok':
            ok += 1
            print(f"ok [{kind}] {os.path.relpath(out, PUB)}", flush=True)
        else:
            fails.append(f'{os.path.relpath(out, PUB)}')
            print(f"FAIL [{kind}] {os.path.relpath(out, PUB)}", flush=True)
        time.sleep(0.25)
    print(f'\ndone: {ok} new, {skip} skipped, {len(fails)} fail', flush=True)
    for f_ in fails:
        print('  ', f_)

if __name__ == '__main__':
    main()
