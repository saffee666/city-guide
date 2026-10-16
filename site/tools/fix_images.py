#!/usr/bin/env python
"""精确文件名直抓 —— 修复搜索误配的脸面图（hero/城市卡/排名卡）
每个目标: (输出路径, [精确 Commons 文件名候选...])
"""
import json, subprocess, os, sys, io, time

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUB = os.path.join(BASE, 'public', 'images')
UA = 'city-guide-personal/1.0'

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

TARGETS = [
    ('hero/3.jpg', ['File:Potala Palace.jpg', 'File:Potala Palace, Lhasa, Tibet.jpg', 'File:矢量 CNNC Potala.jpg']),
    ('cities/lhasa.jpg', ['File:Potala Palace.jpg', 'File:Potala Palace, Lhasa, Tibet.jpg']),
    ('collections/heritage-sites-5.jpg', ['File:Potala Palace.jpg']),
    ('collections/heritage-sites-1.jpg', ['File:Transverse View of Forbidden City.tif', 'File:The Forbidden City - View from Coal Hill.jpg', 'File:Forbidden City Beijing Shenwumen Gate.JPG']),
    ('cities/beijing.jpg', ['File:1 the forbidden city view from jingshan.jpg', 'File:The Forbidden City - View from Coal Hill.jpg']),
    ('cities/xian.jpg', ["File:Xi'an - Bell Tower.jpg", "File:Belltower of Xi'an.jpg", "File:Xi'an Bell Tower.JPG"]),
    ('cities/hangzhou.jpg', ['File:West Lake Hangzhou.jpg', 'File:Boat on the West Lake Hanzhou.jpg', 'File:Leifeng Pagoda.jpg']),
    ('cities/chengdu.jpg', ['File:Anshun Bridge Chengdu.jpg', 'File:Chengdu - Anshun Bridge at night.jpg']),
    ('cities/chongqing.jpg', ['File:Hongya Cave.jpg', 'File:Chongqing Hongyadong.jpg', 'File:Chongqing at night 1.jpg']),
    ('cities/shanghai.jpg', ['File:Shanghai - Pudong skyline from the Bund.jpg', 'File:Pudong skyline from the Bund.jpg', 'File:Shanghai Pudong at dusk.jpg']),
    ('cities/guilin.jpg', ['File:Li River with karst hills.jpg', 'File:Guilin Li River.jpg']),
    ('cities/harbin.jpg', ['File:Saint Sophia Cathedral Harbin.jpg', 'File:Харбин, Софийский собор.jpg', 'File:Harbin St Sophia.jpg']),
]

def api_info(title):
    url = ('https://commons.wikimedia.org/w/api.php?action=query&titles=' + title.replace(' ', '_')
           + '&prop=imageinfo&iiprop=url&iiurlwidth=960&format=json')
    p = subprocess.run(['curl', '-s', '--ssl-no-revoke', '--max-time', '30', '-A', UA, url],
                       capture_output=True, timeout=45)
    try:
        j = json.loads(p.stdout.decode('utf-8', 'replace'))
    except Exception:
        return []
    pages = (j.get('query') or {}).get('pages') or {}
    out = []
    for pg in pages.values():
        for info in pg.get('imageinfo', []):
            tu = info.get('thumburl')
            if tu:
                out.append(tu)
    return out

ok = 0
fails = []
for rel, names in TARGETS:
    dest = os.path.join(PUB, rel)
    got = False
    for name in names:
        urls = api_info(name)
        for u in urls:
            r = subprocess.run(['curl', '-s', '--ssl-no-revoke', '--max-time', '60', '-A', UA, '-o', dest, u],
                               capture_output=True, timeout=75)
            if r.returncode == 0 and os.path.exists(dest) and os.path.getsize(dest) > 15000:
                print(f'ok  {rel} <- {name}')
                ok += 1
                got = True
                break
        if got:
            break
        time.sleep(0.2)
    if not got:
        fails.append(rel)
        print(f'FAIL {rel}')

print(f'\ndone: {ok} ok, {len(fails)} fail')
