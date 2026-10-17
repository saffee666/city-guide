#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""美食/特产配图 v4 —— zh.wikipedia 词条主图（精准），失败保持色块。幂等。"""
import json, subprocess, os, io, glob, time, sys
from urllib.parse import quote

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUB = os.path.join(BASE, 'public', 'images')
UA = 'city-guide-personal/1.0'

def dl(url, out, timeout=45):
    r = subprocess.run(['curl', '-sL', '--ssl-no-revoke', '--max-time', str(timeout), '-A', UA, '-o', out, url],
                       capture_output=True, timeout=timeout + 10)
    return r.returncode == 0 and os.path.exists(out) and os.path.getsize(out) > 5000

def summary_thumb(title, width=640):
    url = f'https://zh.wikipedia.org/api/rest_v1/page/summary/{quote(title)}'
    p = subprocess.run(['curl', '-s', '--ssl-no-revoke', '--max-time', '20', '-A', UA, url],
                       capture_output=True, timeout=30)
    try:
        j = json.loads(p.stdout.decode('utf-8', 'replace'))
    except Exception:
        return None
    if j.get('type') not in ('standard', 'disambiguation'):
        return None
    th = (j.get('originalimage') or {}).get('source') or (j.get('thumbnail') or {}).get('source')
    if th and '/330px-' in th:
        th = th.replace('/330px-', f'/{width}px-')
    return th

def name_variants(name):
    v = [name]
    if '&' in name:
        v += [p.strip() for p in name.split('&')]
    if ' + ' in name:
        v += [p.strip() for p in name.split('+')]
    if '（' in name:
        v += [name.split('（')[0]]
    if ' & ' in name:
        v += [name.replace(' & ', '')]
    return v

def main():
    jobs = []
    for fp in sorted(glob.glob(os.path.join(BASE, 'src', 'content', 'cities', '*.json'))):
        c = json.load(io.open(fp, encoding='utf-8'))
        slug = os.path.splitext(os.path.basename(fp))[0]
        for i, f in enumerate(c.get('food', [])):
            jobs.append((os.path.join(PUB, 'food', f'{slug}-{i+1}.jpg'), f['name'], f'food {slug}-{i+1}'))
        for i, s in enumerate(c.get('specialties', [])):
            jobs.append((os.path.join(PUB, 'spec', f'{slug}-{i+1}.jpg'), s['name'], f'spec {slug}-{i+1}'))

    ok = miss = 0
    for out, name, label in jobs:
        if os.path.exists(out):
            ok += 1
            continue
        got = False
        for v in name_variants(name):
            th = summary_thumb(v)
            if th and dl(th, out):
                ok += 1
                print(f'ok {label} {v}', flush=True)
                got = True
                break
            time.sleep(0.1)
        if not got:
            miss += 1
            print(f'miss {label} {name}', flush=True)
        time.sleep(0.15)
    print(f'\ndone: {ok} have-img, {miss} no-wiki-img', flush=True)

if __name__ == '__main__':
    main()
