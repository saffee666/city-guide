#!/usr/bin/env python
"""第三批批量配图：城市页美食卡 fimg / 特产卡 / inspiration 双卡（curl 版，幂等）"""
import json, subprocess, time, os, io, glob, sys
from urllib.parse import quote

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUB = os.path.join(BASE, 'public', 'images')
UA = 'city-guide-personal/1.0'

EN = {
    '成都火锅': 'hotpot chongqing style', '重庆小面': 'chongqing noodles', '九宫格老火锅': 'hotpot chongqing style',
    '北京烤鸭': 'peking duck', '炸酱面': 'zhajiang noodles', '豆汁儿焦圈': 'douzhir beijing',
    '铜锅涮肉': 'instant boiled mutton', '卤煮火烧': 'luzhu beijing', '羊肉泡馍': 'paomo',
    '肉夹馍': 'roujiamo', 'biangbiang面': 'biangbiang noodles', '水盆羊肉': 'shuipo lamb',
    '生煎馒头': 'shengjian bao', '小笼包': 'xiaolongbao', '本帮菜': 'shanghai cuisine',
    '蟹粉面': 'crab roe noodles', '片儿川': 'pian er chuan', '西湖醋鱼': 'west lake fish',
    '苏式汤面': 'suzhou noodles', '哑巴生煎': 'shengjian bao', '松鼠桂鱼': 'squirrel fish',
    '盐水鸭': 'nanjing salted duck', '鸭血粉丝汤': 'duck blood vermicelli', '汤包 & 锅贴': 'soup dumplings',
    '热干面': 'hot dry noodles', '排骨藕汤': 'lotus root soup', '三鲜豆皮': 'doupi wuhan',
    '清蒸武昌鱼': 'wuchang fish', '口味虾': 'spicy crayfish', '长沙臭豆腐': 'stinky tofu',
    '辣椒炒肉': 'hunan pork pepper', '猪油拌粉': 'rice noodles hunan',
    '广式早茶': 'yum cha dim sum', '肠粉': 'rice noodle roll', '烧腊': 'siu mei',
    '云吞面': 'wonton noodles', '糖水': 'tong sui dessert', '光明乳鸽': 'roast pigeon',
    '手抓饭': 'polo rice xinjiang', '烤全羊 & 红柳烤肉': 'lamb skewers', '缸子肉': 'lamb stew xinjiang',
    '过桥米线': 'crossing bridge noodles', '汽锅鸡 & 豆花米线': 'steam pot chicken',
    '野生菌火锅': 'wild mushroom hotpot', '烧饵块': 'er kuai', '鲜花饼 & 玫瑰宴': 'flower cake yunnan',
    '丽江粑粑 & 鸡豆凉粉': 'lijiang baba', '腊排骨火锅': 'pork ribs hotpot', '牦牛肉火锅': 'yak meat hotpot',
    '酥油茶 & 玫瑰饼': 'butter tea', '青稞饼 & 酥油茶': 'butter tea tsampa', '糌粑': 'tsampa',
    '藏面': 'tsampa noodle soup', '甜茶': 'sweet tea lhasa', '牦牛肉': 'yak meat',
    '桂林米粉': 'guilin rice noodles', '阳朔啤酒鱼': 'beer fish yangshuo', '桂林田螺酿': 'stuffed snails',
    '弗兰?': '', '武陵源': '',
    '福州鱼丸': 'fuzhou fish ball', '肉燕（太平燕）': 'rou yan swallow skin', '锅边糊 + 虾酥': 'guobian hu',
    '沙茶面': 'shacha noodles', '姜母鸭': 'ginger duck', '海蛎煎': 'oyster omelette',
    '刀削面': 'knife cut noodles', '莜面窝窝': 'youmian kaolaolao', '浑源凉粉': 'liangfen',
    '黄糕 & 兔头': 'datong rabbit head', '重庆小面 ': 'chongqing noodles',
    '红肠 & 格瓦斯': 'harbin red sausage', '马迭尔冰棍': 'madieer popsicle', '杀猪菜': 'dongbei stew',
    '铁锅炖': 'iron pot stew', '锅包肉': 'guobaorou',
    '成都火锅 ': 'hotpot chongqing style',
    '成都火锅': 'hotpot chongqing style', '串串 & 冒菜': 'chuanchuan skewers', '兔头 & 冷吃兔': 'rabbit head sichuan',
    '糖油果子': 'tang you guo zi', '肥肠粉 + 军屯锅盔': 'feichang fen',
    '龙井虾仁': 'longjing shrimp', '叫花鸡 & 东坡肉': 'dongpo pork',
    '阳澄湖大闸蟹': 'hairy crab', '苏式糕团': 'suzhou pastry',
    '万州烤鱼': 'wanzhou grilled fish', '歌乐山辣子鸡': 'laziji chicken',
    '凉糕 & 冰粉': 'bingfen', '茶颜悦色': 'milk tea',
    '桂花糖芋苗': 'taro nanjing dessert', '活珠子': 'balut like egg',
    '甑糕 & 柿子饼': 'persimmon cake', '羊杂粉汤': 'lamb offal soup',
    '土笋冻': 'tusun dong', '花生汤': 'peanut soup', '福州鱼丸 ': 'fuzhou fish ball',
    '普洱茶': 'puer tea', '西湖龙井': 'longjing tea', '碧螺春': 'biluochun tea',
    '蜀绣': 'shu embroidery', '苏绣': 'su embroidery', '湘绣': 'xiang embroidery', '广彩 & 广绣': 'canton embroidery',
    '杭州丝绸': 'silk hangzhou', '扎染': 'tie dye dali', '福州油纸伞': 'oil paper umbrella',
    '福州茉莉花茶': 'jasmine tea', '茉莉花茶': 'jasmine tea', '安溪铁观音': 'tieguanyin tea',
    '火锅底料': 'hotpot base', '陈麻花': 'cishiqiao mahua', '合川桃片': 'hechuan peach slice',
    '北京果脯': 'preserved fruit', '兔爷文创': 'tuye figurine', '景泰蓝': 'cloisonne',
    '兵马俑文创': 'terracotta souvenir', '皮影 & 秦腔脸谱': 'shadow puppet',
    '大同铜器': 'datong copper', '云锦文创': 'yunjin brocade', '雨花石': 'rain flower stone',
    '唐卡文创': 'thangka', '藏香': 'tibetan incense', '牦牛肉干': 'yak jerky',
    '桂花糕 & 罗汉果': 'osmanthus cake', '泾阳茯茶': 'fu tea', '王星记扇子': 'chinese fan',
    'disconnect': '',
}

BAD = ('logo', 'map', 'menu', 'diagram', 'chart', 'restaurant sign', 'shopfront', 'storefront', 'interior')

def curl(url, out, timeout=60):
    cmd = ['curl', '-s', '--ssl-no-revoke', '--max-time', str(timeout), '-A', UA, '-o', out, url]
    return subprocess.run(cmd, capture_output=True, timeout=timeout + 10).returncode == 0

def search(qs, limit=6):
    url = ('https://commons.wikimedia.org/w/api.php?action=query&generator=search'
           f'&gsrsearch=filetype:bitmap%20{quote(qs)}&gsrlimit={limit}&gsrnamespace=6'
           '&prop=imageinfo&iiprop=url&iiurlwidth=640&format=json')
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
                out.append((tu, pg.get('title', '')))
    return out

FALLBACK = {
    '茶': 'chinese tea cups', '咖啡': 'coffee beans roast', '干果': 'dried fruits nuts',
    '刺绣': 'chinese silk embroidery', '腊味': 'chinese sausage', '丝': 'silk fabric',
    '茶具': 'chinese tea set', '文创': 'chinese souvenir', ' mushrooms': 'mushrooms dried',
    '火锅': 'hotpot', '白酒': 'chinese baijiu', '啤酒': 'chinese beer', '糕点': 'chinese pastry',
    '臭豆腐': 'stinky tofu', '茶饮': 'bubble tea', '手表': 'wristwatch', '数码': 'electronics market',
    '花椒': 'sichuan peppercorn', '辣椒': 'chili sauce', '藏': 'tibetan craft', '鲜花': 'flower market',
    '扇': 'chinese hand fan', '伞': 'oil paper umbrella', '玉露': 'chinese green tea',
}

def grab(outpath, queries, min_kb=6):
    if os.path.exists(outpath):
        return 'skip'
    for q in queries:
        if not q:
            continue
        pairs = search(q)
        if not pairs:
            continue
        head = q.split()[0].lower()
        pairs.sort(key=lambda p: (any(b in p[1].lower() for b in BAD), head not in p[1].lower()))
        for u, title in pairs:
            if any(b in title.lower() for b in BAD):
                continue
            if curl(u, outpath):
                if os.path.getsize(outpath) >= min_kb * 1024:
                    return 'ok'
                os.remove(outpath)
        time.sleep(0.2)
    # 兜底：按名字里的类别关键词用通配词再试
    fb = []
    label = outpath  # unused
    for k, v in FALLBACK.items():
        if k in ''.join(queries):
            fb.append(v)
    for q in fb[:2]:
        pairs = search(q)
        for u, title in pairs:
            if any(b in title.lower() for b in BAD):
                continue
            if curl(u, outpath):
                if os.path.getsize(outpath) >= min_kb * 1024:
                    return 'ok'
                os.remove(outpath)
        time.sleep(0.2)
    return 'fail'

def main():
    jobs = []
    for sub in ('food', 'spec', 'extra'):
        os.makedirs(os.path.join(PUB, sub), exist_ok=True)
    for fp in sorted(glob.glob(os.path.join(BASE, 'src', 'content', 'cities', '*.json'))):
        c = json.load(io.open(fp, encoding='utf-8'))
        slug = os.path.splitext(os.path.basename(fp))[0]
        city_zh = c['name']
        for i, f in enumerate(c.get('food', [])):
            name = f['name']
            qs = []
            if name in EN:
                qs.append(EN[name])
                qs.append(EN[name].split()[0])
            qs.append(name)
            qs.append(f"{name} {city_zh}")
            jobs.append((os.path.join(PUB, 'food', f'{slug}-{i+1}.jpg'), qs, f'food {slug}-{i+1} {name}'))
        for i, s in enumerate(c.get('specialties', [])):
            name = s['name']
            qs = []
            if name in EN:
                qs.append(EN[name])
                qs.append(EN[name].split()[0])
            qs.append(name)
            qs.append(f"{name} {city_zh}")
            jobs.append((os.path.join(PUB, 'spec', f'{slug}-{i+1}.jpg'), qs, f'spec {slug}-{i+1} {name}'))
    # inspiration 双卡
    jobs.append((os.path.join(PUB, 'extra', 'quiz.jpg'), ['chinese temple lantern red', 'nanjing confucius temple lantern'], 'extra quiz'))
    jobs.append((os.path.join(PUB, 'extra', 'lotus.jpg'), ['lotus flower chinese pond', 'lotus temple pond'], 'extra lotus'))

    print(f'total jobs: {len(jobs)}', flush=True)
    ok = skip = 0
    fails = []
    for out, qs, label in jobs:
        r = grab(out, qs)
        if r == 'skip':
            skip += 1
        elif r == 'ok':
            ok += 1
            print(f'ok {label}', flush=True)
        else:
            fails.append(label)
            print(f'FAIL {label}', flush=True)
        time.sleep(0.2)
    print(f'\ndone: {ok} new, {skip} skipped, {len(fails)} fail', flush=True)
    for f in fails:
        print('  ', f, flush=True)

if __name__ == '__main__':
    main()
