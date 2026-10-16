/* =============================================================
   city-content.js  — rich, per-city content for the data-driven
   city page (city.html). Merged at runtime with the base data in
   destinations.js (cityGuides[key] + dontMiss[key]).

   Each city may define:
     lead        : intro headline (string)
     getThere    : { short, more }
     tips        : array parallel to cityGuides[key].attractions[]
                   (tip string per attraction; "" to skip)
     itinerary   : [ { day, theme, path, slots:[{when,what}] } ]
     food        : [ { zh, name, tag, blurb } ]
     stay        : [ { level, name, blurb } ]
     pitfalls    : [ { emoji, title, text } ]
     seasonal    : true  -> full 4-season image grid
                   false -> compact "Best Time to Visit" strip
     seasons     : [ { name, note } ]            (when seasonal:true)
     bestTime    : { lead, seasons:[{name,note,best}] }  (when false)
     specialties : [ { zh, name, blurb } ]
     exploreMore : [ cityKey, ... ]   (first two also feed the sidebar)

   Images the page expects (see image-requirements spreadsheet):
     hero / attractions : already in images/draw and images/attractions
     seasonal grid      : images/seasons/<key>-spring|summer|autumn|winter.jpg
                          (missing files fall back to a labelled tile)
   ============================================================= */
window.cityContent = {

  /* ===================== BEIJING (culture / year-round) ===================== */
  beijing: {
    lead: "Imperial palaces, the Great Wall, hutong lanes, Peking duck and a world-class modern capital",
    getThere: {
      short: "Beijing is the country's main gateway, served by two large international airports — Beijing Capital (PEK) and Beijing Daxing (PKX). It is also the hub of China's high-speed rail network, with bullet trains to Shanghai, Xi'an, Chengdu and beyond.",
      more: "From the airports, the Capital and Daxing Airport Express lines link to the subway, alongside airport buses and taxis/ride-hailing. High-speed trains arrive at Beijing South, Beijing West, Beijing and Beijing North stations. Within the city, a vast, inexpensive subway network is the easiest way around — pay by QR code or contactless. Taxis and Didi are plentiful, and many central sights are walkable or a short bike-share apart."
    },
    tips: [
      "Book online up to 7 days ahead (it sells out) and bring your passport. Closed Mondays. It's one-way — enter at Meridian Gate, exit at the Gate of Divine Prowess.",
      "For Badaling, take the high-speed train from Qinghe Station (about 30 min). At Mutianyu, take the cable car up and the toboggan down. Go early.",
      "Buy the combo 'through-ticket' to enter the Hall of Prayer, not just the park. Come early to see locals doing tai chi, dancing and music.",
      "It's huge — allow most of a day and enter via the East Palace Gate. A boat across Kunming Lake saves walking, and sunset over the water is the best light.",
      "Nanluoguxiang gets packed; the quieter lanes around Wudaoying and Guozijian are more atmospheric. Rent a bike or take a rickshaw, and come for breakfast.",
      "Entry to the district is free, but many galleries close on Mondays. Best in the afternoon, with a coffee — a relaxed counterpoint to the imperial sights."
    ],
    itinerary: [
      { day: "Day 1", theme: "The Imperial Core", path: "Tiananmen Square → Forbidden City → Jingshan Park → Wangfujing", slots: [
        { when: "Morning", what: "Start at <b>Tiananmen Square</b>, then move through the <b>Forbidden City</b> along the central axis (about 4 hours). Book ahead and pace yourself." },
        { when: "Afternoon", what: "Cross to <b>Jingshan Park</b> and climb Wanchun Pavilion for the classic rooftop panorama over the golden palace roofs." },
        { when: "Evening", what: "Walk to <b>Wangfujing</b> for dinner and street snacks, or head to a roast house for your first <b>Peking duck</b>." }
      ]},
      { day: "Day 2", theme: "Hutong Wander", path: "Lama Temple → Imperial College → Wudaoying & Nanluoguxiang → Houhai", slots: [
        { when: "Morning", what: "Light incense at the <b>Lama Temple (Yonghegong)</b>, then visit the calm <b>Imperial College &amp; Confucius Temple</b> on Guozijian Street." },
        { when: "Afternoon", what: "Drift through the artsy <b>Wudaoying</b> and <b>Nanluoguxiang</b> hutongs — cafes, boutiques and old courtyard lanes." },
        { when: "Evening", what: "Finish at <b>Houhai Lake</b> for waterside bars and a lantern-lit stroll by the Drum and Bell Towers." }
      ]},
      { day: "Day 3", theme: "Great Wall & Olympic Park", path: "Badaling Great Wall → Olympic Park", slots: [
        { when: "Morning", what: "Ride the high-speed train from <b>Qinghe to Badaling</b> (about 30 min) and walk a stretch of the <b>Great Wall</b> — go early." },
        { when: "Afternoon", what: "Back in the city, take a relaxed visit to <b>Olympic Park</b> and the 2008 landmarks." },
        { when: "Evening", what: "Stay for the <b>Bird's Nest and Water Cube</b> lit up after dark — a great photo stop." }
      ]},
      { day: "Day 4", theme: "Garden Dream", path: "Summer Palace → Old Summer Palace → final Peking duck", slots: [
        { when: "Morning", what: "Spend the morning at the <b>Summer Palace</b> — the Long Corridor and a boat across Kunming Lake." },
        { when: "Afternoon", what: "Reflect among the ruins of the <b>Old Summer Palace (Yuanmingyuan)</b> next door." },
        { when: "Evening", what: "Round off the trip with a proper <b>Peking duck</b> dinner and a last walk through the lit-up center." }
      ]}
    ],
    food: [
      { zh: "鸭", name: "Siji Minfu", tag: "Peking duck", blurb: "A reliable favourite for crisp, fairly priced roast duck; the Nanchizi branch looks onto a Forbidden City corner tower. Dadong and Quanjude are the other big names." },
      { zh: "涮", name: "Nanmen Shuanrou", tag: "Hotpot", blurb: "Old-Beijing copper-pot lamb hotpot — clear broth, hand-cut mutton and sesame sauce. Comforting, especially in winter." },
      { zh: "面", name: "Haiwanju", tag: "Noodles", blurb: "Theatrical zhajiangmian — thick noodles tossed with fermented soybean-pork sauce, served with a shouted welcome." },
      { zh: "肝", name: "Yao Ji Chao Gan", tag: "Snacks", blurb: "A century-old spot near the Drum Tower for chaogan and steamed baozi — proper old-city breakfast for the adventurous." },
      { zh: "糕", name: "Daoxiangcun", tag: "Pastries", blurb: "A beloved traditional bakery for boxed Beijing pastries and sweets — easy, tasty gifts to take home." },
      { zh: "清", name: "Ziguangyuan", tag: "Halal", blurb: "A long-running halal restaurant for Beijing-Muslim classics — generous portions and friendly prices, good for families." }
    ],
    stay: [
      { level: "Closest to the sights", name: "Wangfujing & Qianmen", blurb: "Walking distance to Tiananmen, the Forbidden City and Wangfujing's shops and food. The most convenient base, though rates run higher." },
      { level: "Best value", name: "Along Line 1 & Line 2", blurb: "Anywhere on the two core subway lines gives fast, cheap access to almost every major sight while keeping costs down." },
      { level: "For atmosphere", name: "Houhai & Hutong Stays", blurb: "Courtyard guesthouses around Houhai and Nanluoguxiang put you in old-Beijing lanes, steps from lakeside bars and the Drum Tower." }
    ],
    pitfalls: [
      { emoji: "📅", title: "Book ahead", text: "The Forbidden City and National Museum release tickets about 7 days out and sell out fast. Tiananmen Square also needs a free reservation, and you'll need your passport to enter and verify." },
      { emoji: "🚇", title: "Getting around", text: "The subway is cheapest and fastest — pay by QR code, and avoid the 8–9am and 6–7pm crush. Taxis and Didi are easy; many central sights are walkable." },
      { emoji: "⚠️", title: "Avoid the traps", text: "Skip touts and unlicensed 'black taxis' outside stations, and never buy from ticket scalpers. Be wary of overly friendly 'art student' or teahouse invitations near tourist areas." },
      { emoji: "🎒", title: "What to pack", text: "Comfortable walking shoes above all. Beijing is dry and windy with big day-to-night temperature swings, so bring layers, sun protection and a power bank." }
    ],
    seasonal: false,
    bestTime: {
      lead: "Beijing is a year-round capital, so you can come any time — but <b>autumn (September–October)</b> is the sweet spot, with crisp blue skies, golden ginkgo and comfortable temperatures. <b>Spring</b> is a close second; summer is hot and crowded; winter is cold but quiet and lovely under snow.",
      seasons: [
        { name: "Spring", note: "Mar–May · blossoms & mild — great", best: false },
        { name: "Summer", note: "Jun–Aug · hot, busy, some rain", best: false },
        { name: "Autumn ★", note: "Sep–Oct · clear skies, ginkgo — best", best: true },
        { name: "Winter", note: "Nov–Feb · cold, quiet, snow magic", best: false }
      ]
    },
    specialties: [
      { zh: "景泰蓝", name: "Cloisonné (Jingtailan)", blurb: "An imperial metalwork craft perfected in the Ming dynasty — copper bodies outlined with fine wire, filled with vivid enamel. Some of Beijing's most prized souvenirs." },
      { zh: "京剧", name: "Beijing Opera", blurb: "The capital's classic stage art — song, mime, acrobatics and dazzling painted-face makeup. Catch an evening scene at a historic theatre." },
      { zh: "兔儿爷", name: "Tu'er Ye Folk Figures", blurb: "Beijing's beloved 'Rabbit God' clay figurines, rooted in Mid-Autumn folklore — a charming, distinctly local handicraft." },
      { zh: "小吃", name: "Old Beijing Snacks", blurb: "Take-home classics like haw rolls, sesame pastries and candied hawthorn, plus teas — easy edible souvenirs from shops like Daoxiangcun." }
    ],
    exploreMore: ["datong", "xian", "shanghai", "chengdu"]
  },

  /* ===================== GUILIN (seasonal) ===================== */
  guilin: {
    lead: "Karst peaks, the Li River, rice terraces, bamboo rafts and lazy countryside cycling",
    getThere: {
      short: "Guilin has its own airport (KWL) and sits on the high-speed rail network, with bullet trains from Guangzhou, Nanning, Changsha and beyond reaching Guilin and Yangshuo.",
      more: "Most visitors fly into Guilin Liangjiang Airport or arrive by high-speed train at Guilin North/West or Yangshuo stations. The classic Li River cruise links Guilin to Yangshuo; in the countryside, e-bikes and local buses reach the villages. The Longji rice terraces are about 2 hours from the city by bus or car."
    },
    tips: [
      "The classic cruise runs Guilin→Yangshuo (4–5h); for a cheaper, closer look, take a bamboo raft on the Xingping stretch. Book cruise tickets a day or two ahead in peak season.",
      "Base in Yangshuo for a night or two. Rent an e-bike (about ¥30/day) for the Ten-Mile Gallery, and raft the quieter Yulong River rather than the crowded main run.",
      "About 2h from the city — go for the sunrise/sunset cloud seas. Best green in early summer; gold around the late-September to October harvest.",
      "Guilin's emblem and a quick stop — you can see the water-moon arch for free from the riverside park, or pay to enter for the close-up.",
      "Bring a light layer — the caves are cool and damp. A good rainy-day option; go with the timed guided flow.",
      "This is the ¥20-note view — hike up to the Xianggong Hill viewpoint for the river bend, and catch the old town at golden hour."
    ],
    itinerary: [
      { day: "Day 1", theme: "Guilin City", path: "Elephant Trunk Hill → East-West Lanes → Sun & Moon Pagodas", slots: [
        { when: "Morning", what: "See <b>Elephant Trunk Hill</b> by the river, then wander the restored <b>East-West Lanes</b> for snacks and Guilin rice noodles." },
        { when: "Afternoon", what: "Stroll the Two Rivers &amp; Four Lakes scenic ring, or climb <b>Solitary Beauty Peak</b> for a city overview." },
        { when: "Evening", what: "Catch the <b>Sun &amp; Moon Pagodas</b> lit up over Shan Lake — Guilin's signature night view." }
      ]},
      { day: "Day 2", theme: "Li River → Yangshuo", path: "Li River cruise → Yulong River → West Street", slots: [
        { when: "Morning", what: "Take the <b>Li River cruise</b> down to Yangshuo through the most famous karst scenery (the ¥20-note stretch)." },
        { when: "Afternoon", what: "Raft the gentle <b>Yulong River</b> and e-bike the <b>Ten-Mile Gallery</b> countryside." },
        { when: "Evening", what: "Dinner and lights on <b>West Street</b>, or the Impression Liu Sanjie outdoor show." }
      ]},
      { day: "Day 3", theme: "Xingping & Terraces", path: "Xingping Old Town → Xianggong Hill → Longji (option)", slots: [
        { when: "Morning", what: "Visit <b>Xingping Old Town</b> and hike <b>Xianggong Hill</b> for the river-bend panorama." },
        { when: "Afternoon", what: "Swap in the <b>Longji Rice Terraces</b> (about 2h away) for cloud-sea views, or relax back in Yangshuo." },
        { when: "Evening", what: "Return to Guilin or Yangshuo for a final bowl of beer fish and rice noodles." }
      ]}
    ],
    food: [
      { zh: "粉", name: "Guilin Rice Noodles", tag: "Must-try", blurb: "The local staple — springy rice noodles with savoury 'brine' gravy and crisp toppings. Eat the dry version first, then add broth." },
      { zh: "鱼", name: "Yangshuo Beer Fish", tag: "Yangshuo", blurb: "Fresh river fish braised with local beer, peppers and tomato — Yangshuo's signature dish, best by the Lijiang." },
      { zh: "煲", name: "Duck-Feet Hotpot", tag: "Local", blurb: "Rich claypot of duck and taro — a warming Guilin favourite on a cool evening." },
      { zh: "糕", name: "Guilin Songgao", tag: "Snack", blurb: "Soft steamed sponge cake, lightly sweet — a classic local teatime bite." }
    ],
    stay: [
      { level: "Convenient", name: "Guilin City Center", blurb: "Around the Two Rivers & Four Lakes and the train stations — handy for transport, night views and the Li River cruise pier." },
      { level: "Nightlife & base", name: "Yangshuo West Street", blurb: "In the thick of the bars, cafes and tour operators, and the best base for countryside cycling and rafting." },
      { level: "Scenery & quiet", name: "Yulong River Countryside", blurb: "Riverside guesthouses among the karst paddies — peaceful mornings, mist on the peaks, e-bike to everything." }
    ],
    pitfalls: [
      { emoji: "🚲", title: "Getting around", text: "High-speed trains reach Guilin and Yangshuo; in Yangshuo, e-bikes (about ¥30/day) are the easiest way to the countryside. The Li River cruise is one-way to Yangshuo." },
      { emoji: "🛶", title: "Rafts & cruises", text: "Use licensed operators and wear the life jacket. Bamboo-raft prices vary by section — agree the route and price first, and beware unlicensed touts at the piers." },
      { emoji: "⚠️", title: "Avoid the traps", text: "Skip ultra-cheap 'all-in' bus tours — they often force shopping stops. Book the cruise and shows through reputable channels." },
      { emoji: "☀️", title: "What to pack", text: "Sun protection and rain gear (afternoon showers are common in summer), plus mosquito repellent and shoes you don't mind getting wet on the rafts." }
    ],
    seasonal: true,
    seasons: [
      { name: "Spring", note: "Apr–May · flooded terraces mirror the sky, fresh-green hills and fewer crowds." },
      { name: "Summer", note: "Jun–Aug · lush and high-water for rafting; hot, humid, with afternoon showers." },
      { name: "Autumn", note: "Sep–Oct · the Longji terraces turn gold at harvest — the peak photo season, clear and comfortable." },
      { name: "Winter", note: "Nov–Feb · misty karst peaks at their most ink-painting; cool, quiet and low-season." }
    ],
    specialties: [
      { zh: "米粉", name: "Guilin Rice Noodles", blurb: "More than a dish — a whole local food culture; dried-noodle gift packs make a popular souvenir." },
      { zh: "三花酒", name: "Sanhua Rice Wine", blurb: "Guilin's fragrant traditional rice liquor, distilled with Lijiang water — a classic regional gift." },
      { zh: "瑶绣", name: "Yao & Zhuang Textiles", blurb: "Hand-woven and embroidered cloth from the Longji minority villages — scarves, bags and brocade." },
      { zh: "罗汉果", name: "Luo Han Guo", blurb: "The local monk-fruit, dried for a naturally sweet herbal tea — light and easy to carry home." }
    ],
    exploreMore: ["zhangjiajie", "kunming", "guangzhou", "lijiang"]
  },

  /* ===================== ZHANGJIAJIE (seasonal) ===================== */
  zhangjiajie: {
    lead: "Avatar's floating peaks, glass skywalks, misty canyons and primeval forest",
    getThere: {
      short: "Zhangjiajie has its own airport (DYG) and a high-speed rail station; many travellers connect via Changsha, about 1.5h away by bullet train.",
      more: "Fly into Zhangjiajie Hehua Airport or take the high-speed train to Zhangjiajie West. Shuttle buses run from the city to the Forest Park (Wulingyuan) and to Tianmen Mountain (in town). Distances inside the parks are large — use the cable cars, the Bailong Elevator and park shuttle buses to get around."
    },
    tips: [
      "Buy the multi-day park pass — the area is huge. Ride the Bailong Elevator or cable cars to save your legs, and start early to beat the tour groups.",
      "Book ahead — daily tickets are limited. The cableway, the 999 steps to Tianmen Cave and the cliff glass walkways are the highlights; check which sections are open before you go.",
      "The 'Avatar' floating peak and the No. 1 Bridge Under Heaven are here; the magic is clearest right after rain when clouds rise. Go early.",
      "An easy, flat streamside walk — perfect for pacing yourself between the high peaks. Keep snacks hidden from the wild monkeys.",
      "The best panoramic viewpoint over the whole peak forest — take the cable car up for a sunrise cloud sea.",
      "Separate from the parks and needs its own timed ticket — book ahead. No loose phone cases or lens caps out on the bridge."
    ],
    itinerary: [
      { day: "Day 1", theme: "Wonder Peaks", path: "Bailong Elevator → Yuanjiajie → Tianzi Mountain", slots: [
        { when: "Morning", what: "Ride the <b>Bailong Elevator</b> up to <b>Yuanjiajie</b> for the Avatar floating peak and No. 1 Bridge Under Heaven." },
        { when: "Afternoon", what: "Continue to <b>Tianzi Mountain</b> for the grand peak-forest panorama." },
        { when: "Evening", what: "Stay inside the park area (Yangjiajie/Wulingyuan) to catch an early start the next day." }
      ]},
      { day: "Day 2", theme: "Canyon Air", path: "Huangshizhai → Golden Whip Stream → 72 Qilou", slots: [
        { when: "Morning", what: "Survey the peaks from <b>Huangshizhai</b>, the park's classic lookout." },
        { when: "Afternoon", what: "Walk the gentle <b>Golden Whip Stream</b> — forest, clear water and monkey troops." },
        { when: "Evening", what: "Back in town, see the <b>72 Qilou</b> 'mini Potala' light show." }
      ]},
      { day: "Day 3", theme: "Above the Clouds", path: "Tianmen Mountain → Tianmen Cave", slots: [
        { when: "Morning", what: "Ride the long cableway up <b>Tianmen Mountain</b> and walk the cliffside glass skywalks." },
        { when: "Afternoon", what: "Descend the 999 steps (or escalators) to <b>Tianmen Cave</b>, the great natural arch." },
        { when: "Evening", what: "Warm up with a Zhangjiajie sanxiaguo hotpot before heading home." }
      ]}
    ],
    food: [
      { zh: "锅", name: "Sanxiaguo", tag: "Hometown pot", blurb: "Zhangjiajie's signature 'three-in-one' braised pot of meats and offal — hearty mountain comfort food." },
      { zh: "粉", name: "Cili Rice Noodles", tag: "Breakfast", blurb: "A spicy, savoury local rice-noodle breakfast — the way west-Hunan mornings start." },
      { zh: "腊", name: "Smoked Cured Pork", tag: "Tujia", blurb: "Tujia-style smoked bacon, salty and fragrant, stir-fried with chillies — a regional staple." },
      { zh: "茶", name: "Vine Tea (Mocha)", tag: "Local drink", blurb: "A wild mountain herbal tea, faintly sweet after the first sip — a local specialty to try and take home." }
    ],
    stay: [
      { level: "Sunrise convenience", name: "Inside the Park (Yangjiajie)", blurb: "Staying within the Forest Park area saves the morning commute and puts you first in line for cloud-sea sunrises." },
      { level: "Food & transport", name: "Zhangjiajie City", blurb: "The widest choice of restaurants and hotels, and the base for Tianmen Mountain (right in town)." },
      { level: "Park gateway", name: "Wulingyuan Town", blurb: "Right at the Forest Park's main gate — restaurants, shops and easy shuttle access to the peaks." }
    ],
    pitfalls: [
      { emoji: "📅", title: "Book ahead", text: "Tianmen Mountain has limited daily tickets — reserve a few days out, and confirm which cableways and glass walks are open before you travel." },
      { emoji: "🐒", title: "Mind the monkeys", text: "Wild macaques along Golden Whip Stream will grab food and bags — keep snacks zipped away and don't tease them." },
      { emoji: "🚌", title: "Park logistics", text: "The parks are vast with their own shuttle, lift and cable-car system — follow the maps and signs, and budget time for queues at peak season." },
      { emoji: "🌧️", title: "Mountain weather", text: "Conditions change fast and steps get slippery — bring non-slip shoes, a rain layer and something warm; the best cloud seas come right after rain." }
    ],
    seasonal: true,
    seasons: [
      { name: "Spring", note: "Mar–May · peaks wreathed in mist and cloud seas after rain — the most magical light." },
      { name: "Summer", note: "Jun–Aug · deep-green canyons and a cool forest 'oxygen bar'; peak crowds and afternoon rain." },
      { name: "Autumn", note: "Sep–Nov · crisp, clear skies and red-gold foliage framing the stone pillars — prime hiking." },
      { name: "Winter", note: "Dec–Feb · rare snow turns the peak forest into an ink painting; quiet and cold, some lifts may pause." }
    ],
    specialties: [
      { zh: "织锦", name: "Tujia Brocade (Xilankapu)", blurb: "Bright, geometric hand-woven brocade from the Tujia people — scarves, bags and wall hangings." },
      { zh: "莓茶", name: "Vine Tea", blurb: "Wild mountain vine tea, prized locally as a healthful herbal drink — light and easy to carry." },
      { zh: "葛根", name: "Kudzu Root Products", blurb: "Kudzu-root powder and snacks from the mountains — a traditional regional health food." },
      { zh: "银饰", name: "Tujia / Miao Silver", blurb: "Hand-worked minority silver jewellery with folk motifs — a distinctive west-Hunan craft." }
    ],
    exploreMore: ["guilin", "wuhan", "kunming", "lijiang"]
  },

  /* ===================== HANGZHOU (seasonal) ===================== */
  hangzhou: {
    lead: "West Lake, tea hills, Zen temples, canals and timeless Jiangnan grace",
    getThere: {
      short: "Hangzhou has a major international airport (HGH) and is just 45–60 minutes from Shanghai by frequent high-speed trains.",
      more: "Bullet trains arrive at Hangzhou East (the main hub) and Hangzhou stations; the metro links the airport and stations to the city. West Lake is walkable and bikeable from the lakeside — use the metro and buses to reach Lingyin Temple, Xixi Wetland and the Longjing tea hills."
    },
    tips: [
      "Free and open all day — walk or cycle the Su and Bai causeways, and catch the Three Pools and Leifeng at dusk. Avoid weekends and holidays, when the causeways are packed.",
      "Buy the Feilai Peak ticket plus a separate temple ticket. Go early on weekdays; incense crowds peak on the 1st and 15th of the lunar month.",
      "Taxi or bus to Meijiawu or Longjing Village and sip a pre-Qingming (early April) Longjing at a farmhouse — spring is the picking season.",
      "Big and best by boat — take the electric ferry through the reeds, enter via the south gate, and allow half a day.",
      "A pedestrian snack-and-souvenir street near the old imperial way — good for an evening graze; touristy but lively.",
      "Climb (there are escalators inside) for the classic south-shore lake panorama; sunset over the water is the money shot."
    ],
    itinerary: [
      { day: "Day 1", theme: "West Lake Classics", path: "Broken Bridge → Bai/Su Causeway → Leifeng Pagoda → Three Pools", slots: [
        { when: "Morning", what: "Start at the <b>Broken Bridge</b> and stroll the <b>Bai and Su Causeways</b> around the lake." },
        { when: "Afternoon", what: "Climb <b>Leifeng Pagoda</b> for the lake panorama, then take a boat to the <b>Three Pools Mirroring the Moon</b>." },
        { when: "Evening", what: "Relax along the <b>Hubin</b> lakeside and catch the music fountain." }
      ]},
      { day: "Day 2", theme: "Zen, Tea & Canal", path: "Lingyin Temple → Longjing Tea Hills → Xiaohe Street", slots: [
        { when: "Morning", what: "Visit <b>Lingyin Temple</b> and the <b>Feilai Peak</b> grotto carvings — go early to beat the incense crowds." },
        { when: "Afternoon", what: "Head to the <b>Longjing tea hills</b> for a farmhouse cup among the terraces." },
        { when: "Evening", what: "Wander the canal-side <b>Xiaohe Street</b> — white walls, grey tiles and lantern light." }
      ]}
    ],
    food: [
      { zh: "蟹", name: "Crab-Roe Noodles", tag: "Seasonal", blurb: "Rich noodles heaped with crab roe — a Jiangnan delicacy, best in autumn crab season." },
      { zh: "鳝", name: "Stir-fried Eel", tag: "Local", blurb: "'Cong bao shan' — eel flash-fried with scallions, a classic Hangzhou home dish." },
      { zh: "鱼", name: "West Lake Vinegar Fish", tag: "Signature", blurb: "Hangzhou's most famous dish — freshwater fish in a sweet-sour vinegar sauce. Order at a reputable spot for the real version." },
      { zh: "虾", name: "Longjing Shrimp", tag: "Refined", blurb: "Delicate river shrimp stir-fried with Longjing tea leaves — subtle and fragrant." },
      { zh: "糕", name: "Dingsheng Cake", tag: "Snack", blurb: "A pink-tinged steamed rice cake, lightly sweet — a traditional good-luck treat." }
    ],
    stay: [
      { level: "By the lake", name: "Hubin / West Lake", blurb: "Walking distance to the lakeshore and the best evening strolls — the prime, pricier area." },
      { level: "Best value", name: "Wulin Square & Metro Line 1", blurb: "Central shopping and transport, with fast metro access to West Lake and the stations at lower rates." },
      { level: "Quiet & local", name: "Grand Canal / Gongshu", blurb: "Near Xiaohe Street and the canal — a calmer, more local base with easy metro links." }
    ],
    pitfalls: [
      { emoji: "🗓️", title: "Beat the crowds", text: "West Lake is mobbed on weekends and holidays, especially the causeways. Go on a weekday morning or at dusk for breathing room." },
      { emoji: "🚇", title: "Getting around", text: "Metro, bus and bike are best — driving and parking near the lake is painful. Ride-hailing beats hailing taxis in the scenic zones." },
      { emoji: "📲", title: "Reservations", text: "Some museums and sites need a (free) online booking — check before you go, and book Lingyin for busy lunar dates." },
      { emoji: "🌂", title: "What to pack", text: "Jiangnan is humid with sudden rain — carry an umbrella, plus comfy shoes for the long lakeside walks." }
    ],
    seasonal: true,
    seasons: [
      { name: "Spring", note: "Mar–May · peach and willow on the causeways and tea-picking in the hills — classic West Lake poetry." },
      { name: "Summer", note: "Jun–Aug · lotus in bloom at Quyuan Garden, lush and warm; humid with rain, lovely lakeside evenings." },
      { name: "Autumn", note: "Sep–Nov · osmanthus scent across the city and crisp lake views — the other ideal window." },
      { name: "Winter", note: "Dec–Feb · the misty 'Broken Bridge in snow'; cold but serene and crowd-free." }
    ],
    specialties: [
      { zh: "龙井茶", name: "Longjing (Dragon Well) Tea", blurb: "China's most famous green tea, grown on the hills west of the lake — pre-Qingming leaves are the most prized." },
      { zh: "丝绸", name: "Hangzhou Silk", blurb: "A thousand-year silk tradition — scarves, fans and fabric from the silk market and old brands." },
      { zh: "团扇", name: "Wangxingji Fans", blurb: "Elegant silk and sandalwood fans from a storied Hangzhou maker — a refined gift." },
      { zh: "剪刀", name: "Zhang Xiaoquan Scissors", blurb: "A centuries-old Hangzhou cutlery brand — beautifully made scissors and knives." }
    ],
    exploreMore: ["suzhou", "shanghai", "nanjing", "guilin"]
  },

  /* ===================== HARBIN (seasonal — winter is the star) ===================== */
  harbin: {
    lead: "Ice and snow, Russian architecture, frozen-river fun and warm Northeastern food",
    getThere: {
      short: "Harbin has an international airport (HRB) and is on the high-speed rail network — about 1h from Changchun and several hours from Beijing by bullet train.",
      more: "Fly into Harbin Taiping Airport or arrive at Harbin or Harbin West stations. In peak winter this is a very busy destination, so book flights and trains early. Central sights cluster around Central Street and are walkable; use ride-hailing to stay out of the cold, and allow extra evening time for Ice and Snow World."
    },
    tips: [
      "Winter-only (roughly late December to February). Go after dark when the ice is lit; dress for −20°C and below, with snow boots, hand warmers and a phone-warmer — batteries die fast.",
      "Walk the cobblestones for Baroque buildings and a Modern (Madie'er) ice pop even in the cold. Free, and lovely for evening photos.",
      "Harbin's icon — book the low-cost entry online. Best photos at blue hour, with flocks of pigeons in the square out front.",
      "Frozen-river ice play and the Sun Island Snow Sculpture Expo in winter; a breezy green escape in summer.",
      "The China-Baroque old district — wander for street food and faded grandeur; quieter and more local than Central Street.",
      "China's top ski resort, about 3h away — book lessons and passes ahead in peak season; a 1–2 night add-on for snow-sports fans."
    ],
    itinerary: [
      { day: "Day 1", theme: "Ice & Snow Romance", path: "St. Sophia Cathedral → Central Street → Ice and Snow World", slots: [
        { when: "Morning", what: "Photograph <b>St. Sophia Cathedral</b> and feed the pigeons in the square." },
        { when: "Afternoon", what: "Stroll <b>Central Street</b> for Baroque facades and a Madie'er ice pop, with a warm lunch nearby." },
        { when: "Evening", what: "Spend the night at <b>Ice and Snow World</b>, glowing after dark — the trip's highlight." }
      ]},
      { day: "Day 2", theme: "Time Travel", path: "Hongzhuan St. market → Haoyao No.6 Factory → China-Baroque", slots: [
        { when: "Morning", what: "Graze the <b>Hongzhuan Street morning market</b> for fried cakes, baozi and Northeastern breakfast." },
        { when: "Afternoon", what: "Tour the photogenic <b>Haoyao No.6 Factory</b> ('the Louvre of the Northeast') and the <b>China-Baroque</b> (Laodaowai) quarter." },
        { when: "Evening", what: "Dinner at an old-shop iron-pot stew, then a last warm-up bowl." }
      ]}
    ],
    food: [
      { zh: "炖", name: "Iron-Pot Stew", tag: "Northeastern", blurb: "Slow-stewed pork, chicken or fish with potato, beans and corn cakes round the pot — the hearty soul of Dongbei cooking." },
      { zh: "肉", name: "Guobaorou", tag: "Signature", blurb: "Sweet-and-sour crispy pork, the dish Harbin is famous for. The old-style (vinegar) version differs from the tomato one." },
      { zh: "肠", name: "Harbin Red Sausage", tag: "Classic", blurb: "Russian-influenced smoked sausage (Qiulin is the famous brand) — a Harbin icon, great with big Russian bread." },
      { zh: "棍", name: "Madie'er Ice Pop", tag: "Iconic", blurb: "The creamy ice pop locals eat outdoors even at −20°C — a Central Street rite of passage." },
      { zh: "市", name: "Morning-Market Snacks", tag: "Street food", blurb: "Hongzhuan Street's stalls — fried cakes, hand-wrapped baozi and warming bites among the locals." }
    ],
    stay: [
      { level: "In the heart of it", name: "Central Street / St. Sophia", blurb: "Walking distance to the icons and restaurants — the most convenient and atmospheric base." },
      { level: "Transport", name: "Near Harbin Railway Station", blurb: "Handy for arrivals and departures and still close to the center, often at better value." },
      { level: "For the ice park", name: "Songbei", blurb: "Across the river near Ice and Snow World and Sun Island — convenient if the winter parks are your priority." }
    ],
    pitfalls: [
      { emoji: "🧥", title: "Dress for the cold", text: "Plan for −20 to −30°C: thermal base layers, a heavy down coat, snow boots, hat, gloves and hand/phone warmers. Phone batteries drain fast in the cold." },
      { emoji: "📅", title: "Book ahead", text: "Reserve Ice and Snow World, St. Sophia entry and the Haoyao No.6 Factory online, and book winter flights, trains and hotels well in advance — it's peak season." },
      { emoji: "⚠️", title: "Avoid the traps", text: "Buy ice pops and red sausage from reputable shops, agree taxi fares or use ride-hailing, and confirm seafood/restaurant prices before ordering." },
      { emoji: "🚕", title: "Getting around", text: "Central sights are walkable, but it's cold — ride-hailing is worth it. Allow extra time in winter as everything runs busier and slower." }
    ],
    seasonal: true,
    seasons: [
      { name: "Winter", note: "Dec–Feb · the reason to come — Ice and Snow World, snow sculptures, rime frost and skiing. Peak season." },
      { name: "Spring", note: "Mar–Apr · the thaw and shoulder season — fewer crowds, still chilly." },
      { name: "Summer", note: "Jun–Aug · a cool northern escape — riverside Sun Island, green parks and music; pleasant temperatures." },
      { name: "Autumn", note: "Sep–Oct · golden birch and crisp air before the freeze — brief and beautiful." }
    ],
    specialties: [
      { zh: "红肠", name: "Red Sausage", blurb: "Qiulin Lidaosi smoked sausage — Harbin's most famous edible souvenir, with a Russian heritage." },
      { zh: "大列巴", name: "Dalieba (Big Bread)", blurb: "A giant round Russian-style sourdough loaf — a Central Street classic to carry home." },
      { zh: "俄货", name: "Russian Goods", blurb: "Matryoshka dolls, chocolate and trinkets along Central Street, reflecting Harbin's Russian past." },
      { zh: "冰雪", name: "Ice-Snow Souvenirs", blurb: "Snowflake and ice-themed crafts and creative goods from the winter festival." }
    ],
    exploreMore: ["beijing", "datong", "xian", "shanghai"]
  },

  /* ===================== XIAMEN (coastal / year-round) ===================== */
  xiamen: {
    lead: "A breezy island city of Gulangyu, sea-road cycling, art harbours and Minnan flavor",
    getThere: {
      short: "Xiamen has an international airport (XMN) and high-speed rail along the southeast coast — about 1.5h from Fuzhou and 3–4h from Guangzhou or Shenzhen.",
      more: "Fly into Xiamen Gaoqi Airport or arrive at Xiamen or Xiamen North stations. A metro and BRT network plus buses cover the city. Ferries to Gulangyu leave from the designated tourist terminal — book online ahead, as same-day dockside tickets aren't sold. Many coastal sights link along the Ring Road."
    },
    tips: [
      "Buy ferry tickets online up to about 10 days ahead (none are sold dockside on the day) from the Xiamen ferry terminal. Go early and wear comfy shoes — the island is car-free and hilly.",
      "A converted fishing harbour turned art district — fishing boats moored below the Twin Towers. Sunset and night are the best times; great cafes.",
      "Tan Kah Kee's grand Nanyang-style campus and the long seafront causeway — reach it by ferry or metro, and combine with the Aoyuan garden.",
      "Rent a bike for the seaside path; the sunrise 'orange sea' is the famous shot, with swimming at Baicheng Beach.",
      "Enter via the South gate for the succulent and cactus 'photo' zones and the rainforest mist walk — mornings are coolest.",
      "One of China's prettiest campuses — visitor entry is limited and needs booking with ID, so check the current rules. The Furong Tunnel graffiti is right next door."
    ],
    itinerary: [
      { day: "Day 1", theme: "City & Street Life", path: "Bashi Market → Shapowei → Yanwu Bridge", slots: [
        { when: "Morning", what: "Graze old Xiamen's <b>Bashi Market</b> for seafood and Minnan snacks." },
        { when: "Afternoon", what: "Explore the artsy <b>Shapowei</b> harbour — boats, galleries and cafes." },
        { when: "Evening", what: "Catch the sea breeze across <b>Yanwu Bridge</b> at dusk." }
      ]},
      { day: "Day 2", theme: "Romantic Island", path: "Gulangyu → Round-Island Road → Baicheng Beach", slots: [
        { when: "Morning", what: "Ferry to <b>Gulangyu</b> (book ahead) for international architecture and piano-island lanes." },
        { when: "Afternoon", what: "Back on the mainland, cycle the <b>Round-Island Road</b> by the sea." },
        { when: "Evening", what: "Sunset and a stroll at <b>Baicheng Beach</b>." }
      ]},
      { day: "Day 3", theme: "Hills & Sea", path: "Botanical Garden → Nanputuo / Cableway → Jimei", slots: [
        { when: "Morning", what: "Wander the <b>Xiamen Botanical Garden</b> — succulent zones and rainforest mist." },
        { when: "Afternoon", what: "Visit <b>Nanputuo Temple</b> or ride the Zhonggu cableway for hill-and-sea views." },
        { when: "Evening", what: "Ferry or metro to the Tan Kah Kee architecture of <b>Jimei School Village</b>." }
      ]}
    ],
    food: [
      { zh: "鸭", name: "Ginger Duck (Jiangmu Ya)", tag: "Signature", blurb: "Duck slow-cooked in sesame oil and aged ginger in a claypot — warming and deeply Minnan." },
      { zh: "面", name: "Satay Noodles (Shacha Mian)", tag: "Must-try", blurb: "Noodles in a rich, nutty satay-seafood broth — Xiamen's signature bowl." },
      { zh: "蚝", name: "Oyster Omelette", tag: "Street food", blurb: "Plump oysters in a savoury sweet-potato-starch egg pancake — a classic Minnan snack." },
      { zh: "笋", name: "Tusundong", tag: "Local oddity", blurb: "Chilled sea-worm jelly with vinegar and garlic — a beloved (and surprising) Xiamen specialty." },
      { zh: "汤", name: "Four-Fruit Soup (Siguotang)", tag: "Dessert", blurb: "A cooling sweet soup of fruit, jelly and shaved ice — perfect in the island heat." }
    ],
    stay: [
      { level: "Old town & ferries", name: "Zhongshan Road / Old City", blurb: "Near Bashi Market and the Gulangyu ferry, with the best concentration of food and street life." },
      { level: "Sea views", name: "Ring Road Coast", blurb: "Along the seaside road by the beaches — sunrise views and easy cycling, a little out from the center." },
      { level: "Best value", name: "Siming / Exhibition Center", blurb: "Well served by metro and BRT, with lower rates and quick access across the city." }
    ],
    pitfalls: [
      { emoji: "⛴️", title: "Book the ferry", text: "Gulangyu ferry tickets must be bought online in advance (no same-day dockside sales) — pick your terminal and time slot early in peak season." },
      { emoji: "🚇", title: "Getting around", text: "Metro, BRT and buses cover the city well; ride-hailing fills the gaps. Many coastal sights link along the Ring Road by bike." },
      { emoji: "🦐", title: "Avoid overcharging", text: "At seafood stalls, confirm prices and have your order weighed before cooking to avoid surprise bills." },
      { emoji: "🌀", title: "When to go", text: "Summer (Jul–Sep) is hot and typhoon season — check forecasts. Spring and autumn are the most comfortable for the sea breeze." }
    ],
    seasonal: false,
    bestTime: {
      lead: "Xiamen is mild and pleasant for most of the year, so any season works — but <b>spring and autumn</b> are the sweet spot for comfortable sea-breeze weather. Summer is hot and is typhoon season (roughly July–September); winter is mild and the quietest.",
      seasons: [
        { name: "Spring", note: "Mar–May · mild, green & breezy — great", best: true },
        { name: "Summer", note: "Jun–Sep · hot, humid, typhoon season", best: false },
        { name: "Autumn ★", note: "Oct–Nov · warm, clear, sea breeze — best", best: true },
        { name: "Winter", note: "Dec–Feb · mild and quiet, low season", best: false }
      ]
    },
    specialties: [
      { zh: "馅饼", name: "Gulangyu Pies", blurb: "Flaky mung-bean and meat pastries — the classic Xiamen edible souvenir, boxed up to take home." },
      { zh: "铁观音", name: "Tieguanyin Tea", blurb: "Fragrant oolong from nearby Anxi — a signature Fujian tea and easy gift." },
      { zh: "漆线雕", name: "Lacquer Thread Sculpture", blurb: "An intricate Minnan craft of fine lacquer thread coiled into gilded figures and vessels." },
      { zh: "海产", name: "Dried Seafood", blurb: "Dried fish, shrimp and seaweed products from the coast — popular local gifts." }
    ],
    exploreMore: ["guangzhou", "shenzhen", "guilin", "hangzhou"]
  },

  /* ===================== LIJIANG (seasonal) ===================== */
  lijiang: {
    lead: "A Naxi old town of bridges and water, beneath the glaciers of Jade Dragon Snow Mountain",
    getThere: {
      short: "Lijiang has its own airport (LJG) and a high-speed rail station, with bullet trains from Kunming and Dali and flights from major cities.",
      more: "Fly into Lijiang Sanyi Airport or take the high-speed train to Lijiang station, often via Kunming or Dali. The old town is pedestrian-only — taxis and ride-hailing drop you at the gates, and tours or chartered cars reach Jade Dragon Snow Mountain (about 40 min) and Lugu Lake (a long half-day)."
    },
    tips: [
      "Take the big cableway to the 4,506m glacier park — book tickets online ahead (there's a daily quota), choose an early slot, and carry an oxygen can for the altitude.",
      "Free to wander, and best at dawn or after the day-trippers leave. Don't miss the bridges-and-water of Sifang Street and the panorama from Wangu Tower on Lion Hill.",
      "At the foot of Jade Dragon — the Tiffany-blue pools are most vivid in sun. Combine it with the snow-mountain ticket on the same day.",
      "A quieter, more local alternative to busy Dayan old town — slow cafes and tea-horse-road lanes; a nice place to stay over.",
      "A long half-day out — the Mosuo matriarchal homeland and a pristine highland lake; consider an overnight rather than a rushed day trip.",
      "The Naxi chieftain's palace, 'the Forbidden City of the south' — climb the rear hill for an old-town rooftop view."
    ],
    itinerary: [
      { day: "Day 1", theme: "Old-Town Wander", path: "Shuhe → Baisha → Lijiang Old Town", slots: [
        { when: "Morning", what: "Ease in at the quieter <b>Shuhe Old Town</b> — slow lanes and tea-horse-road history." },
        { when: "Afternoon", what: "Visit the artsy <b>Baisha</b> village with Jade Dragon as a backdrop and old Naxi murals." },
        { when: "Evening", what: "Wander <b>Lijiang Old Town</b> (Dayan) — Sifang Street's bridges, then a bonfire night and live music." }
      ]},
      { day: "Day 2", theme: "Snow Mountain", path: "Jade Dragon Snow Mountain → Yunshanping → Blue Moon Valley", slots: [
        { when: "Morning", what: "Ride the big cableway up <b>Jade Dragon Snow Mountain</b> to the 4,506m glacier park (book ahead, carry oxygen)." },
        { when: "Afternoon", what: "Stroll the <b>Yunshanping</b> meadow and the Tiffany-blue pools of <b>Blue Moon Valley</b>." },
        { when: "Evening", what: "Back in town for a cured-pork-rib hotpot and a quiet old-town night." }
      ]},
      { day: "Day 3", theme: "Local Life", path: "Zhongyi Market → leisure / Lugu Lake (option)", slots: [
        { when: "Morning", what: "Feel everyday Lijiang at <b>Zhongyi Market</b> — flowers, snacks and local produce." },
        { when: "Afternoon", what: "Relax in a courtyard cafe, or set out for an overnight at <b>Lugu Lake</b>." },
        { when: "Evening", what: "Final old-town stroll before the airport or high-speed train." }
      ]}
    ],
    food: [
      { zh: "排", name: "Cured-Pork-Rib Hotpot", tag: "Signature", blurb: "Lijiang's famous laopaigu hotpot — salt-cured ribs simmered with potato and greens, hearty for the highland chill." },
      { zh: "菌", name: "Wild Mushroom Hotpot", tag: "Yunnan", blurb: "Seasonal wild fungi in a fragrant broth — a Yunnan treat (cooked thoroughly, as the menu instructs)." },
      { zh: "扇", name: "Grilled Rushan", tag: "Snack", blurb: "Yunnan's 'milk fan' cheese, grilled and brushed with rose jam — a chewy Naxi street snack." },
      { zh: "粉", name: "Chickpea Jelly", tag: "Local", blurb: "Jidou liangfen — silky chickpea jelly served cold and spicy or pan-fried; a Lijiang staple." }
    ],
    stay: [
      { level: "Atmosphere", name: "Dayan Old Town", blurb: "Courtyard guesthouses in the heart of the lanes — magical at night, though the central streets can be lively/loud." },
      { level: "Quieter & scenic", name: "Shuhe Old Town", blurb: "Calmer cobbled lanes with Jade Dragon views — a relaxed base a short ride from Dayan." },
      { level: "Convenient / value", name: "New Town & Station Area", blurb: "Modern hotels near transport for easier arrivals and snow-mountain departures, often better value." }
    ],
    pitfalls: [
      { emoji: "🫁", title: "Altitude care", text: "The old town sits at ~2,400m and Jade Dragon reaches 4,500m+. Take it easy on day one, hydrate, carry oxygen on the mountain, and don't overexert." },
      { emoji: "📅", title: "Book the cableway", text: "Jade Dragon's big cableway has a daily quota and long queues — reserve online ahead and pick an early time slot." },
      { emoji: "🚶", title: "Getting around", text: "The old towns are pedestrian-only; use taxis/ride-hailing to the gates. Chartered cars or tours are easiest for the snow mountain and Lugu Lake." },
      { emoji: "🧴", title: "Sun & layers", text: "Fierce highland sun and big day-to-night temperature swings — high-SPF sunscreen, a hat and warm layers for the evenings and mountain." }
    ],
    seasonal: true,
    seasons: [
      { name: "Spring", note: "Mar–May · azaleas on Jade Dragon's slopes, dry and mild — a fine clear-sky window." },
      { name: "Summer", note: "Jun–Aug · green meadows and a cool escape; rainy-season afternoon showers." },
      { name: "Autumn", note: "Sep–Oct · crisp air, golden trees and the clearest snow-mountain views — prime season." },
      { name: "Winter", note: "Nov–Feb · snow on Jade Dragon under blue skies and a quiet old town; cold nights." }
    ],
    specialties: [
      { zh: "鲜花饼", name: "Flower Cakes", blurb: "Flaky rose-petal pastries from Yunnan — a fragrant, easy edible souvenir." },
      { zh: "普洱", name: "Pu'er & Yunnan Tea", blurb: "Aged Pu'er and Yunnan black tea from the tea-horse road — sold in cakes and gift tins." },
      { zh: "东巴", name: "Dongba Crafts", blurb: "Naxi Dongba-script woodblocks, scrolls and prints — a distinctive local art." },
      { zh: "银器", name: "Naxi Silver", blurb: "Hand-worked silver jewellery and tableware — a traditional highland craft." }
    ],
    exploreMore: ["shangrila", "kunming", "guilin", "chengdu"]
  },

  /* ===================== GUANGZHOU (culture / year-round) ===================== */
  guangzhou: {
    lead: "A thousand-year trading port of arcade lanes, Lingnan craft, morning tea and a glowing river skyline",
    getThere: {
      short: "Guangzhou has a major international airport (CAN) and is a hub of the southern high-speed rail network — under 1h from Shenzhen and about 1h from Hong Kong.",
      more: "Fly into Baiyun International Airport or arrive at Guangzhou South, Guangzhou and Guangzhou East stations. A vast metro network (plus buses and ride-hailing) covers the city; many old-town sights cluster around Liwan and are walkable between metro stops."
    },
    tips: [
      "A free island of European villas and plane trees — book a slot in peak times. Softest light is morning and late afternoon; great for photos and riverside cafes.",
      "Only ¥10, and the Lingnan wood, brick and ceramic carving is astonishing. Go early and reserve via the official account; it's right by a metro stop.",
      "Renewed Xiguan arcades — sliding-gate houses, heritage brands and the Bruce Lee ancestral hall. Lovely lit up at night along the creek.",
      "Go up the 'slim waist' at dusk, or skip the ticket and shoot it from Haixinsha or Honggcheng Park for the full Pearl River night view.",
      "Arcade shopping streets for dim sum, sweet soups and rice rolls — a classic graze through old Canton, busiest in the evening.",
      "The city's green lung — climb or take the cable car for a panorama over Guangzhou; a refreshing morning escape."
    ],
    itinerary: [
      { day: "Day 1", theme: "Xiguan & the River", path: "Shamian Island → Sacred Heart Cathedral → Yongqingfang", slots: [
        { when: "Morning", what: "Stroll <b>Shamian Island</b>'s colonial architecture, then the all-stone <b>Sacred Heart Cathedral</b> nearby." },
        { when: "Afternoon", what: "Wander <b>Yongqingfang</b>'s Xiguan arcades and lanes; lunch on authentic Cantonese fare." },
        { when: "Evening", what: "Cross to the river for the <b>Canton Tower</b> lit up — shoot it from Haixinsha or take a Pearl River cruise." }
      ]},
      { day: "Day 2", theme: "Lingnan Heritage", path: "Chen Clan Hall → Dafo Temple → Canton Tower", slots: [
        { when: "Morning", what: "Admire Lingnan decorative arts at the <b>Chen Clan Ancestral Hall</b>, then graze a morning-tea brunch." },
        { when: "Afternoon", what: "Visit the <b>Dafo (Great Buddha) Temple</b> and shop the thousand-year <b>Beijing Road</b>." },
        { when: "Evening", what: "Ride the APM line to Haixinsha for a final skyline view, or a late hotpot." }
      ]}
    ],
    food: [
      { zh: "茶", name: "Cantonese Morning Tea", tag: "Must-do", blurb: "Yum cha at an old house like Taotaoju or Yinji — har gow, char siu bao, chicken feet and red rice rolls, one pot of tea at a time." },
      { zh: "肠", name: "Rice Noodle Rolls", tag: "Local", blurb: "Silky cheungfun from a hole-in-the-wall like Yuanji — drizzled with sweet soy; a classic Canton breakfast." },
      { zh: "糖", name: "Cantonese Sweet Soups", tag: "Dessert", blurb: "Double-skin milk and mango-pomelo sago at spots like Nanxin — Guangzhou's beloved afternoon sugar fix." },
      { zh: "粤", name: "Cantonese Classics", tag: "Dinner", blurb: "Roast goose, white-cut chicken and clay-pot rice — the refined, fresh-focused heart of Cantonese cooking." }
    ],
    stay: [
      { level: "Old-town core", name: "Beijing Road / Shangxiajiu", blurb: "In the thick of arcade streets and food, well connected by metro — great for first-timers." },
      { level: "Modern & views", name: "Zhujiang New Town (CBD)", blurb: "Sleek hotels near the Canton Tower and Huacheng Square, with the best skyline outlook." },
      { level: "Best value", name: "Along Metro Line 1 / 3", blurb: "Anywhere on the core metro lines gives fast, cheap access to the sights at lower rates." }
    ],
    pitfalls: [
      { emoji: "🚇", title: "Getting around", text: "The metro reaches everything cheaply — avoid holiday crowds, and use ride-hailing for late nights. Old-town sights are walkable between stops." },
      { emoji: "📅", title: "Book ahead", text: "The Chen Clan Hall and Guangdong Museum need a (free) online reservation — sort it before you go." },
      { emoji: "🌧️", title: "Weather", text: "Humid and rainy much of the year, with hot summers — carry an umbrella and dress light; spring brings the damp '回南天'." },
      { emoji: "🦐", title: "Avoid overcharging", text: "At seafood and tourist-strip restaurants, confirm prices and weigh before ordering; stick to busy, well-reviewed spots." }
    ],
    seasonal: false,
    bestTime: {
      lead: "Guangzhou is warm year-round, so any season works — but <b>autumn and winter (October–February)</b> are the most comfortable and dry. Spring is humid and wet (the '回南天'); summer is hot, rainy and brings the odd typhoon.",
      seasons: [
        { name: "Spring", note: "Mar–Apr · warm but humid and damp", best: false },
        { name: "Summer", note: "May–Sep · hot, rainy, typhoon season", best: false },
        { name: "Autumn ★", note: "Oct–Nov · warm, dry, clear — best", best: true },
        { name: "Winter", note: "Dec–Feb · mild and pleasant — great", best: false }
      ]
    },
    specialties: [
      { zh: "广绣", name: "Cantonese Embroidery", blurb: "One of China's famous embroidery styles — vivid, finely stitched silk pieces." },
      { zh: "凉茶", name: "Herbal Tea (Liangcha)", blurb: "Bitter-sweet Cantonese cooling teas — a living local tradition you can sip at old herb shops." },
      { zh: "广式", name: "Cantonese Pastries", blurb: "Wife cakes, egg rolls and boxed dim-sum sweets — easy edible gifts." },
      { zh: "玉器", name: "Jade & Jewellery", blurb: "Hua Lin jade street is a long-running market for jade and gemstones." }
    ],
    exploreMore: ["shenzhen", "xiamen", "guilin", "hangzhou"]
  },

  /* ===================== SHANGHAI (culture / year-round) ===================== */
  shanghai: {
    lead: "The Bund and Lujiazui, plane-tree lanes, art deco villas and neon Shanghai-style nights",
    getThere: {
      short: "Shanghai has two major airports — Pudong (PVG, international) and Hongqiao (SHA, mostly domestic) — and is a central high-speed rail hub, with frequent bullet trains nationwide.",
      more: "From Pudong, the Maglev and Metro Line 2 reach the city; Hongqiao connects directly by metro and high-speed rail. Bullet trains arrive at Hongqiao, Shanghai and Shanghai South stations. The metro is extensive and easy — pay by QR or transit card; central districts are very walkable."
    },
    tips: [
      "Free and best at night when Lujiazui lights up across the river. Come at dusk; for a cheap, classic view, take the ¥2 ferry across the Huangpu.",
      "Go up the Shanghai Tower or Oriental Pearl observation deck for the city to the horizon — book ahead and pick a clear day.",
      "The famous 'ship-prow' Wukang Mansion and shaded plane-tree villas — a free city walk; quietest on a weekday morning.",
      "A Ming garden beside a buzzing temple bazaar — go early before the crowds, and graze soup dumplings in the lanes nearby.",
      "Shikumen lane houses turned into dining and boutiques — Xintiandi is polished, Tianzifang is narrow and artsy.",
      "Riverside art museums (West Bund, Long Museum) with a breezy promenade — check current exhibitions and closing days first."
    ],
    itinerary: [
      { day: "Day 1", theme: "Classic Shanghai", path: "The Bund → Nanjing Road → Yu Garden", slots: [
        { when: "Morning", what: "Walk <b>The Bund</b>'s grand riverfront architecture toward East Nanjing Road." },
        { when: "Afternoon", what: "Shop pedestrian <b>Nanjing Road</b>, then the classical <b>Yu Garden</b> and its temple bazaar." },
        { when: "Evening", what: "Back on the Bund for the lit Lujiazui skyline, or a Huangpu river cruise." }
      ]},
      { day: "Day 2", theme: "Modern & Stylish", path: "Wukang Mansion → Anfu Road → Jing'an Temple", slots: [
        { when: "Morning", what: "Photograph <b>Wukang Mansion</b> and stroll the plane-tree villas of the former French Concession." },
        { when: "Afternoon", what: "Cafe-hop <b>Anfu Road</b>, then the golden <b>Jing'an Temple</b> amid the skyscrapers." },
        { when: "Evening", what: "Dinner and bars around Xintiandi or the West Bund." }
      ]},
      { day: "Day 3", theme: "A Day Out", path: "Shanghai Disney Resort (or Zhujiajiao water town)", slots: [
        { when: "Morning", what: "Go early to <b>Shanghai Disney Resort</b> for the headline rides — or escape to the canals of <b>Zhujiajiao</b>." },
        { when: "Afternoon", what: "Keep riding (book the in-park express) or drift Zhujiajiao's old bridges by boat." },
        { when: "Evening", what: "Stay for Disney's night fireworks, or a final Shanghainese dinner in town." }
      ]}
    ],
    food: [
      { zh: "煎", name: "Pan-fried Buns (Shengjian)", tag: "Must-try", blurb: "Crisp-bottomed, juicy pork buns from Yang's or Da Hu Chun — eat carefully, the soup squirts." },
      { zh: "糕", name: "Pork-Chop Rice Cake", tag: "Old shop", blurb: "Xiandelai's signature — a fried pork chop with sticky rice cake in sweet-savoury sauce." },
      { zh: "蟹", name: "Crab-Roe Noodles", tag: "Seasonal", blurb: "Noodles lavished with hairy-crab roe — rich and indulgent, best in autumn crab season." },
      { zh: "本", name: "Benbang Cuisine", tag: "Local", blurb: "Sweet-savoury Shanghainese home cooking — red-braised pork (hongshaorou), drunken dishes and braised fish." },
      { zh: "饼", name: "Fresh-Pork Mooncakes", tag: "Snack", blurb: "Flaky, hot pork mooncakes from Guangmingcun or Dexingguan — a queue-worthy local treat." }
    ],
    stay: [
      { level: "Iconic", name: "The Bund / East Nanjing Rd", blurb: "Walk to the Bund and Nanjing Road, with river views — atmospheric and central, at a premium." },
      { level: "Central & value", name: "People's Square / Jing'an", blurb: "A metro hub close to everything, with the widest range of prices — a smart all-round base." },
      { level: "Skyline & modern", name: "Lujiazui", blurb: "High-floor rooms with skyline views, by the financial district — sleek and convenient for Pudong." }
    ],
    pitfalls: [
      { emoji: "🚇", title: "Getting around", text: "The metro covers everything — use the Shanghai Metro QR or a transit card, and avoid the rush-hour crush. Many districts are best on foot." },
      { emoji: "📅", title: "Book ahead", text: "The Shanghai Museum and Xujiahui Library need (free) online reservations; book Disney tickets and the in-park express in advance." },
      { emoji: "🗓️", title: "Beat the crowds", text: "The Bund and Disney are mobbed on weekends and holidays — go early on a weekday where you can." },
      { emoji: "⛴️", title: "Local gem", text: "The ¥2 Dongjin-line ferry across the Huangpu is a cheap, local alternative to a tourist river cruise." }
    ],
    seasonal: false,
    bestTime: {
      lead: "Shanghai works year-round, but <b>spring and autumn</b> are the most pleasant. Summer is hot and humid with the 'plum rains' and the odd typhoon; winter is cold and damp but festive around the holidays.",
      seasons: [
        { name: "Spring", note: "Mar–May · mild, blossoms — great", best: false },
        { name: "Summer", note: "Jun–Aug · hot, humid, plum rain", best: false },
        { name: "Autumn ★", note: "Sep–Nov · crisp and clear — best", best: true },
        { name: "Winter", note: "Dec–Feb · cold, damp, festive", best: false }
      ]
    },
    specialties: [
      { zh: "梨膏糖", name: "City God Temple Sweets", blurb: "Pear-syrup candy and classic snacks from the Yu Garden bazaar — nostalgic edible gifts." },
      { zh: "旗袍", name: "Qipao & Silk", blurb: "Tailored qipao and silk goods — a Shanghai-style keepsake from the old tailoring streets." },
      { zh: "海派", name: "Shanghai-style Design", blurb: "Art-deco-inspired homeware and creative goods — the city's 'haipai' aesthetic." },
      { zh: "糖果", name: "White Rabbit & Sweets", blurb: "White Rabbit milk candy and pineapple cakes — fun, classic Shanghai souvenirs." }
    ],
    exploreMore: ["hangzhou", "suzhou", "nanjing", "xiamen"]
  },

  /* ===================== LHASA (seasonal / best-time matters) ===================== */
  lhasa: {
    lead: "The roof-of-the-world city of the Potala, pilgrim circuits, sacred lakes and fierce highland sun",
    getThere: {
      short: "Lhasa has an international airport (LXA) and the high-altitude Qinghai–Tibet railway, with scenic (long) train rides from Xining, Chengdu and beyond.",
      more: "Fly into Lhasa Gonggar Airport (about 1h from the city) or take the famous Qinghai–Tibet train, which helps with gradual acclimatisation. Foreign travellers need a Tibet Travel Permit arranged through a registered agency. In the city, taxis and ride-hailing are easy; far sights (Yamdrok, Namtso) are day-trips by chartered car or tour."
    },
    tips: [
      "Strictly limited daily entry — book well ahead (often through an agency), bring your passport, and you'll get a timed slot with about an hour inside. No photos indoors.",
      "Tibetan Buddhism's holiest temple — the prostrating pilgrims out front are unforgettable. Mornings are most devotional; respect the photo rules.",
      "Walk the pilgrim circuit clockwise around the Jokhang — prayer wheels, butter lamps and a market full of Tibetan crafts.",
      "The Dalai Lamas' summer garden palace — loveliest in summer, and the heart of the Shoton Festival in July–August.",
      "A sacred lake at 4,700m — a long day-trip or overnight of mirror-still water and huge night skies; go slow for the altitude.",
      "Time your visit for the afternoon monk debates (usually not Sundays) — clapping, gesturing scholarship, a living lesson in Buddhist study."
    ],
    itinerary: [
      { day: "Day 1", theme: "Arrive & Acclimatise", path: "Tibet Museum → Norbulingka → Sera Monastery", slots: [
        { when: "Morning", what: "Take it easy on arrival — a gentle visit to the <b>Tibet Museum</b> to rest and adjust to the altitude." },
        { when: "Afternoon", what: "Stroll the garden palace of <b>Norbulingka</b>, then catch the monk debates at <b>Sera Monastery</b>." },
        { when: "Evening", what: "An early night and plenty of water — let your body acclimatise before the big day." }
      ]},
      { day: "Day 2", theme: "Faith & the Old City", path: "Yaowangshan viewpoint → Potala Palace → Jokhang → Barkhor", slots: [
        { when: "Morning", what: "Shoot the <b>Potala</b> from the Yaowangshan viewpoint (the ¥50-note view), then tour the <b>Potala Palace</b> on your timed slot." },
        { when: "Afternoon", what: "Visit the <b>Jokhang Temple</b> and join the pilgrim flow around <b>Barkhor Street</b>." },
        { when: "Evening", what: "Sweet-tea house downtime, watching old-town life go by." }
      ]},
      { day: "Day 3", theme: "Sacred Lakes", path: "Yamdrok Lake → Karola Glacier", slots: [
        { when: "Morning", what: "Drive over the pass to turquoise <b>Yamdrok Lake</b>, one of Tibet's three holy lakes." },
        { when: "Afternoon", what: "Continue to the <b>Karola Glacier</b> before returning to Lhasa." },
        { when: "Evening", what: "A warming yak-meat hotpot to round off the trip." }
      ]}
    ],
    food: [
      { zh: "茶", name: "Sweet Milk Tea", tag: "Daily ritual", blurb: "Tibetan sweet tea by the glass or thermos in a bustling tea house — the social heart of Lhasa days." },
      { zh: "面", name: "Tibetan Noodles", tag: "Staple", blurb: "Simple yak-broth noodles (zang mian) — a humble, warming local bowl." },
      { zh: "牛", name: "Yak Meat", tag: "Highland", blurb: "Yak in stews, dumplings or air-dried jerky — lean, rich and distinctly Tibetan." },
      { zh: "酪", name: "Tibetan Yoghurt", tag: "Dessert", blurb: "Tart, thick yak-milk yoghurt, often sweetened — cooling and beloved (the Shoton 'yoghurt festival' is named for it)." }
    ],
    stay: [
      { level: "Closest to the icons", name: "Potala / Jokhang Area", blurb: "Walking distance to the Potala, Jokhang and Barkhor — the most convenient and atmospheric base." },
      { level: "Quiet & scenic", name: "Xianzu Island / Lhasa River", blurb: "Calmer riverside guesthouses a little out from the centre, for a restful highland stay." },
      { level: "Old-town feel", name: "Around Barkhor Street", blurb: "Tibetan-style inns in the pilgrim quarter — steps from the prayer circuit and markets." }
    ],
    pitfalls: [
      { emoji: "🫁", title: "Altitude first", text: "Lhasa is 3,650m. Rest on arrival, don't shower or overexert the first night, hydrate well, and see a doctor if symptoms are bad. Consider acclimatising en route." },
      { emoji: "🪪", title: "Permits & booking", text: "Foreign travellers need a Tibet Travel Permit via a registered agency. Potala tickets are limited and must be booked ahead with your passport." },
      { emoji: "🙏", title: "Respect customs", text: "Walk clockwise around temples and stupas, dress modestly, ask before photographing people, and never photograph temple interiors." },
      { emoji: "🧴", title: "Sun & layers", text: "The highland sun is fierce — high-SPF sunscreen, sunglasses, a hat and lip balm, plus warm layers for cold nights and lake trips." }
    ],
    seasonal: true,
    seasons: [
      { name: "Spring", note: "Apr–May · clear, dry and uncrowded before the rush — fine light on the Potala." },
      { name: "Summer", note: "Jun–Aug · warmest and greenest, the Shoton Festival; the busiest, priciest season with afternoon showers." },
      { name: "Autumn", note: "Sep–Oct · crisp, clear skies and golden valleys — arguably the best all-round window." },
      { name: "Winter", note: "Nov–Mar · cold but sunny, far fewer tourists and cheaper; pilgrims fill the Jokhang — atmospheric if you brave the chill." }
    ],
    specialties: [
      { zh: "藏香", name: "Tibetan Incense", blurb: "Hand-rolled herbal incense from monastery workshops — a fragrant, packable keepsake." },
      { zh: "唐卡", name: "Thangka Paintings", blurb: "Intricate Tibetan Buddhist scroll paintings — buy from reputable studios for genuine work." },
      { zh: "天珠", name: "Silver & Dzi Beads", blurb: "Tibetan silver jewellery and dzi-bead ornaments sold around Barkhor Street." },
      { zh: "牛肉干", name: "Yak Jerky", blurb: "Air-dried yak meat, spiced or plain — a classic highland edible souvenir." }
    ],
    exploreMore: ["shangrila", "xian", "chengdu", "kunming"]
  },

  /* ===================== SHANGRI-LA (seasonal) ===================== */
  shangrila: {
    lead: "A Tibetan highland of golden monasteries, meadows, sacred lakes and snow peaks",
    getThere: {
      short: "Shangri-La has a small airport (DIG) and is reached by road from Lijiang (about 3.5h) and the wider Yunnan network; Tiger Leaping Gorge lies on the way.",
      more: "Fly into Diqing Shangri-La Airport, or come overland from Lijiang/Dali by bus or chartered car, stopping at Tiger Leaping Gorge en route. The old town is walkable; chartered cars or tours reach Pudacuo, Napa Lake and the long haul out to Meili Snow Mountain."
    },
    tips: [
      "Yunnan's largest Tibetan monastery, the 'Little Potala' — golden roofs and the Lamu Yangcuo lake reflection. Go in morning light and dress modestly.",
      "A high national park of lakes, wetlands and forest (Bita and Shudu lakes) above 3,500m — take it slow and allow most of a day on the shuttle loop.",
      "A moonlit Tibetan old town with the world's largest prayer wheel on Guishan hill — turn it at dusk, then warm up at an old well-side bar.",
      "Seasonal — a lake in the wet months, grazing meadows when dry. A horse-cart or bike loop is the classic way around.",
      "A long trip out to the Feilai Temple viewpoint — wait for the golden sunrise on Kawagebo (clearest Oct–Nov). A pilgrimage in itself.",
      "A world-class Jinsha-River canyon and hiking mecca on the way in or out — do the upper viewpoint, or the famous two-day trek."
    ],
    itinerary: [
      { day: "Day 1", theme: "Into Tibetan Culture", path: "Dukezong Old Town → Guishan Park", slots: [
        { when: "Morning", what: "Wander <b>Dukezong Old Town</b>'s Tibetan lanes and tea-horse-road history (ease into the altitude)." },
        { when: "Afternoon", what: "Climb <b>Guishan Park</b> to turn the giant golden prayer wheel and overlook the old town." },
        { when: "Evening", what: "A quiet night by the old town's wells and lantern-lit bars." }
      ]},
      { day: "Day 2", theme: "Nature & Faith", path: "Songzanlin Monastery → Napa Lake → Great Prayer Wheel", slots: [
        { when: "Morning", what: "Visit <b>Songzanlin Monastery</b>, the 'Little Potala', and its lake reflection." },
        { when: "Afternoon", what: "Loop the <b>Napa Lake</b> meadows by horse-cart or bike among grazing herds." },
        { when: "Evening", what: "Photos at the colourful prayer flags and great prayer wheel before dinner." }
      ]}
    ],
    food: [
      { zh: "茶", name: "Butter Tea", tag: "Highland", blurb: "Salty yak-butter tea — an acquired but warming Tibetan staple against the cold." },
      { zh: "锅", name: "Yak-Meat Hotpot", tag: "Signature", blurb: "Hearty yak hotpot with highland vegetables — the local way to warm up at altitude." },
      { zh: "粑", name: "Pork Baba Flatbread", tag: "Snack", blurb: "Laopo-rou baba — a savoury griddled flatbread, a filling local bite." },
      { zh: "糌", name: "Tsampa", tag: "Staple", blurb: "Roasted barley flour mixed with butter tea — the everyday Tibetan staple food." }
    ],
    stay: [
      { level: "Atmosphere", name: "Dukezong Old Town", blurb: "Tibetan-style guesthouses by the prayer wheel — the most characterful base, lovely at night." },
      { level: "Scenery", name: "Around Napa Lake", blurb: "Meadow-and-lake views a little out of town — best if you have a car." },
      { level: "Convenient", name: "New Town Centre", blurb: "Modern hotels near transport and restaurants for an easy, warmer stay." }
    ],
    pitfalls: [
      { emoji: "🫁", title: "Altitude care", text: "Shangri-La sits at ~3,300m. Rest on day one, hydrate, keep oxygen handy and avoid overexertion — and acclimatise in Lijiang first if you can." },
      { emoji: "🚗", title: "Napa Lake & tours", text: "Loop Napa Lake by the ring road or horse-cart, and steer clear of cheap tours that force shopping stops — book reputable operators." },
      { emoji: "🧥", title: "Stay warm", text: "Nights are cold year-round — bring proper warm layers, even in summer, and a windproof jacket for the lakes and passes." },
      { emoji: "🙏", title: "Respect customs", text: "Walk clockwise around monasteries and prayer wheels, dress modestly, and ask before photographing monks or pilgrims." }
    ],
    seasonal: true,
    seasons: [
      { name: "Spring", note: "Mar–Jun · wildflower meadows and azaleas, mild and clear — a lovely window." },
      { name: "Summer", note: "Jul–Aug · greenest meadows and a full Napa Lake, festivals; busiest with afternoon rain." },
      { name: "Autumn", note: "Sep–Oct · golden grasslands and the clearest Meili sunrise — prime photography." },
      { name: "Winter", note: "Nov–Feb · snow-dusted monasteries and a quiet old town; cold, and some high passes may close." }
    ],
    specialties: [
      { zh: "牛肉干", name: "Yak Jerky", blurb: "Air-dried, spiced yak meat — a classic highland edible souvenir." },
      { zh: "松茸", name: "Matsutake & Wild Mushrooms", blurb: "Prized summer matsutake and dried wild fungi from the surrounding forests." },
      { zh: "唐卡", name: "Thangka & Incense", blurb: "Tibetan scroll paintings and herbal incense from local workshops." },
      { zh: "青稞", name: "Barley Products", blurb: "Highland-barley wine, tsampa and snacks — distinctive Tibetan-plateau goods." }
    ],
    exploreMore: ["lijiang", "lhasa", "kunming", "guilin"]
  },

  /* ===================== KUNMING (seasonal — the Spring City) ===================== */
  kunming: {
    lead: "The eternal-spring city of red-billed gulls, the Stone Forest, flowers and the gateway to Yunnan",
    getThere: {
      short: "Kunming has a large international airport (KMG) and is Yunnan's high-speed rail hub, with bullet trains to Dali, Lijiang and across the country.",
      more: "Fly into Changshui International Airport or arrive at Kunming South and Kunming stations. A growing metro plus buses, e-bikes and ride-hailing cover the city. The Stone Forest is about 1.5–2h out by train or tour; Kunming is the natural springboard for onward Yunnan travel."
    },
    tips: [
      "In winter (Nov–Mar) thousands of Siberian red-billed gulls gather here — the prime spot to feed and photograph them at sunset. Buy gull food only from official stalls.",
      "About 1.5–2h from the city — the karst 'greatest wonder' of sword-peaks. Go early, and follow the Ashima loop (or a guide) so you don't get lost.",
      "Kunming's central living-room lake — free, and the winter gull date; lovely for a morning Citywalk.",
      "A showcase of Yunnan's 20-odd peoples beside Dianchi — costumes, dance and architecture; good for families.",
      "Old Kunming's memorial arches and a snack-filled old town — best grazed in the evening.",
      "A Republican-era campus and an artsy lane of coffee and books — an easy, atmospheric stroll."
    ],
    itinerary: [
      { day: "Day 1", theme: "Spring-City Citywalk", path: "Aocheng Tower → Kunming Old Street → Cuihu Park → Dianchi sunset", slots: [
        { when: "Morning", what: "Shoot the 'tube-building' geometry at <b>Aocheng Tower</b>, then graze <b>Kunming Old Street</b>'s arcades and snacks." },
        { when: "Afternoon", what: "Citywalk <b>Cuihu Park</b> (winter gulls!) and the lanes around Yunnan University." },
        { when: "Evening", what: "Head to <b>Dianchi / Haigeng Dam</b> for the sunset and the wheeling red-billed gulls." }
      ]},
      { day: "Day 2", theme: "Stone Forest Day Trip", path: "Stone Forest (Shilin)", slots: [
        { when: "Morning", what: "Travel out to the <b>Stone Forest</b> and wander the karst maze of sword-like pinnacles." },
        { when: "Afternoon", what: "Catch the Ashima legend spots and the Naigu black stone forest before heading back." },
        { when: "Evening", what: "Return for a wild-mushroom hotpot in town." }
      ]}
    ],
    food: [
      { zh: "粉", name: "Douhua Rice Noodles", tag: "Must-eat", blurb: "Silky rice noodles topped with tofu pudding and savoury sauce — a beloved Kunming bowl, great around Cuihu." },
      { zh: "菌", name: "Wild Mushroom Hotpot", tag: "Yunnan", blurb: "Yunnan's famous fungi simmered in rich broth — a seasonal must (cook thoroughly as instructed)." },
      { zh: "饼", name: "Fresh Flower Cakes", tag: "Snack", blurb: "Warm, flaky rose-petal pastries — buy them fresh from the oven; never too sweet." },
      { zh: "凉", name: "Qilin Cold Jelly", tag: "Street", blurb: "Refreshing 'mouth-watering' cold jelly, plus avocado milkshakes at Xiangzi teahouse — light Kunming treats." }
    ],
    stay: [
      { level: "Central & scenic", name: "Cuihu / Old Street", blurb: "Walkable, atmospheric and close to the gulls and snacks — the nicest base for a short stay." },
      { level: "Best value", name: "Near Kunming / South Station", blurb: "Handy for trains onward into Yunnan, with easy metro access and lower rates." },
      { level: "Lake views", name: "Dianchi Lakeside", blurb: "By the water for sunsets and gulls — quieter, a little out from the centre." }
    ],
    pitfalls: [
      { emoji: "🧴", title: "Sun & layers", text: "At ~1,900m the UV is strong and days swing warm-to-cool — sunscreen, a hat and 'onion-style' layers, even on bright days." },
      { emoji: "🚇", title: "Getting around", text: "Metro plus e-bikes, buses and ride-hailing cover the city; the airport and stations link by metro." },
      { emoji: "⚠️", title: "Skip cheap tours", text: "Avoid 'low-price one-day' Stone Forest tours that force shopping — go independently by train or pick a reputable operator." },
      { emoji: "🕊️", title: "Gull etiquette", text: "Only buy gull food from official stalls at Cuihu and Dianchi, and don't chase or grab the birds." }
    ],
    seasonal: true,
    seasons: [
      { name: "Spring", note: "Mar–May · the Spring City at its flowery best — blossoms everywhere, mild and bright." },
      { name: "Summer", note: "Jun–Aug · green and cool, a rainy-season escape from the heat; afternoon showers." },
      { name: "Autumn", note: "Sep–Oct · clear, comfortable and dry — easy sightseeing weather." },
      { name: "Winter", note: "Nov–Feb · mild and sunny, and the season of the red-billed gulls — Kunming's signature winter sight." }
    ],
    specialties: [
      { zh: "鲜花饼", name: "Flower Cakes", blurb: "Yunnan's rose-petal pastries — the region's most popular edible souvenir." },
      { zh: "野生菌", name: "Dried Wild Mushrooms", blurb: "Matsutake, morels and more, dried for travel — a prized Yunnan gift." },
      { zh: "普洱", name: "Pu'er & Yunnan Tea", blurb: "Aged Pu'er and Dian Hong black tea, sold in cakes and tins." },
      { zh: "鲜花", name: "Fresh Flowers (Dounan)", blurb: "From Asia's largest flower market — bouquets and dried-flower goods at bargain prices." }
    ],
    exploreMore: ["lijiang", "shangrila", "guilin", "guangzhou"]
  },

  /* ===================== NANJING ===================== */
  nanjing: {
    lead: "A six-dynasty capital of city walls, mausoleums, plane-tree avenues and Qinhuai lantern light",
    getThere: { short: "Nanjing has an international airport (NKG) and is a high-speed rail hub — about 1h from Shanghai and Hangzhou by bullet train.", more: "Bullet trains arrive at Nanjing South and Nanjing stations; the metro links the airport and stations to the city. Most sights are metro- or bus-reachable, and the Zhongshan scenic area has its own shuttle between the mausoleums." },
    tips: [
      "Most atmospheric at night — take a lantern boat on the Qinhuai River. The temple area is free to walk; the old imperial-exam museum needs a ticket.",
      "Free but needs a reservation, and it's closed Mondays. Brace for 392 steps up through the pines; the Zhongshan shuttle pass links it to the other tombs.",
      "Walk the stone-figure Spirit Way — gorgeous with autumn ginkgo. Part of the Zhongshan scenic area, a shuttle ride from Sun Yat-sen's Mausoleum.",
      "Climb the wall at Taicheng for the Xuanwu Lake view — stunning in spring with cherry blossoms and Jiming Temple's yellow walls alongside.",
      "Book about 7 days ahead — it sells out. Don't miss the Republic-era street hall; allow a half day.",
      "A famous bookstore in a former air-raid bunker — quiet, photogenic and free; a calm break between sights."
    ],
    itinerary: [
      { day: "Day 1", theme: "Zhongshan & Qinhuai", path: "Wutong Avenue → Ming Xiaoling → Sun Yat-sen Mausoleum → Confucius Temple", slots: [
        { when: "Morning", what: "Drive the <b>plane-tree avenue</b> to <b>Ming Xiaoling</b> and its stone Spirit Way." },
        { when: "Afternoon", what: "Climb the grand stairway of the <b>Sun Yat-sen Mausoleum</b> (book ahead, closed Mondays)." },
        { when: "Evening", what: "A lantern boat on the <b>Qinhuai River</b> by the Confucius Temple." }
      ]},
      { day: "Day 2", theme: "Culture & Old City", path: "Nanjing Museum → Presidential Palace → Laomendong", slots: [
        { when: "Morning", what: "Tour the <b>Nanjing Museum</b> (book ~7 days ahead), especially the Republic-era hall." },
        { when: "Afternoon", what: "Trace history at the <b>Presidential Palace</b>." },
        { when: "Evening", what: "Snacks and lanes at <b>Laomendong</b>." }
      ]},
      { day: "Day 3", theme: "Temples & Lake", path: "Jiming Temple → Ming City Wall (Taicheng) → Xuanwu Lake", slots: [
        { when: "Morning", what: "Yellow-walled <b>Jiming Temple</b> and a stretch of the <b>Ming city wall</b> at Taicheng." },
        { when: "Afternoon", what: "Stroll <b>Xuanwu Lake</b>." },
        { when: "Evening", what: "Dinner and shopping around Xinjiekou." }
      ]}
    ],
    food: [
      { zh: "鸭", name: "Duck-Blood Vermicelli Soup", tag: "Must-try", blurb: "Nanjing's signature bowl — silky vermicelli with duck blood, gizzard and liver in a savoury broth." },
      { zh: "盐", name: "Saltwater Duck", tag: "Signature", blurb: "Tender, lightly brined Nanjing duck — the city's most famous dish, sold by old delis everywhere." },
      { zh: "面", name: "Pork-Skin Noodles", tag: "Local", blurb: "Pidu mian — springy noodles with puffed pork skin in rich broth, a beloved Nanjing staple." },
      { zh: "糕", name: "Plum-Blossom Cake", tag: "Snack", blurb: "Crisp, sweet-filled cones from street stalls — a classic Nanjing teatime treat." }
    ],
    stay: [
      { level: "Central hub", name: "Xinjiekou", blurb: "Downtown and the main metro interchange — handy for everything, with the widest range of hotels." },
      { level: "Old-town nights", name: "Confucius Temple / Qinhuai", blurb: "By the lantern-lit river and old lanes — atmospheric, if livelier/noisier." },
      { level: "Quiet & scenic", name: "Zhongshan / Purple Mountain", blurb: "Near the mausoleums and woods — calmer, greener, a little out from the centre." }
    ],
    pitfalls: [
      { emoji: "📅", title: "Book ahead", text: "The Nanjing Museum needs booking ~7 days out; the Sun Yat-sen Mausoleum is free but needs a reservation and closes Mondays." },
      { emoji: "🚇", title: "Getting around", text: "The metro reaches the sights; the Zhongshan scenic shuttle links the mausoleums, which are spread out." },
      { emoji: "🌸", title: "Beat the crowds", text: "Cherry-blossom season (late March, Jiming Temple / Jimingsi Road) is mobbed — go early on a weekday." },
      { emoji: "🎒", title: "What to pack", text: "Lots of walking and steps (392 at the mausoleum) — comfy shoes; summers are 'furnace' hot, so hydrate." }
    ],
    seasonal: false,
    bestTime: { lead: "Nanjing is a year-round city, but <b>spring and autumn</b> are loveliest — cherry blossoms and plane-tree green in spring, golden ginkgo in autumn. Summer is one of China's 'furnace' cities (hot, humid); winter is cold and damp.", seasons: [ { name: "Spring", note: "Mar–May · blossoms & plane trees — great", best: false }, { name: "Summer", note: "Jun–Aug · hot, humid 'furnace'", best: false }, { name: "Autumn ★", note: "Sep–Nov · ginkgo, crisp — best", best: true }, { name: "Winter", note: "Dec–Feb · cold, damp", best: false } ] },
    specialties: [
      { zh: "云锦", name: "Yunjin Brocade", blurb: "Nanjing's imperial cloud-brocade silk — luxurious woven pieces and scarves." },
      { zh: "雨花石", name: "Yuhua Pebbles", blurb: "Polished multicoloured 'rain-flower' stones, a classic local collectible." },
      { zh: "盐水鸭", name: "Vacuum-Packed Salted Duck", blurb: "Nanjing's famous duck, boxed for travel — the city's edible souvenir." },
      { zh: "金箔", name: "Gold Leaf", blurb: "Nanjing's centuries-old gold-beating craft — gilded art and gifts." }
    ],
    exploreMore: ["suzhou", "shanghai", "hangzhou", "wuhan"]
  },

  /* ===================== KASHGAR ===================== */
  kashgar: {
    lead: "The Silk Road still alive — earthen old-city lanes, a grand bazaar, and the snow peaks and lakes of the Pamirs",
    getThere: { short: "Kashgar has an airport (KHG) with flights via Urumqi, and a rail link across Xinjiang; the city is the gateway to the Pamir Plateau.", more: "Fly into Kashgar airport (usually via Urumqi) or arrive by train. In the city, taxis and ride-hailing are easy. The Pamir highland (Karakul Lake, Muztagh Ata) is reached by chartered car on the Karakoram Highway, and a border permit is needed for Taxkorgan and the highland lakes." },
    tips: [
      "Free to wander — the east side is lively, the quieter west side more photogenic. Catch the morning 'opening ceremony' at the gate and get lost in the earthen lanes.",
      "The spiritual heart of the old city — dress modestly (cover shoulders and legs) and mind prayer times. A small ticket; the front square is the social hub.",
      "Busiest and best on Sunday — dried fruit, carpets, copperware and instruments. Bargain politely and graze the food stalls.",
      "On the Karakoram Highway toward the Pamirs (about 3.5h) — mirror-still water under Muztagh's peak. A border permit may be needed; go slow for the altitude (3,600m).",
      "The 'half-white, half-blue' Baisha Lake on the way up the Pamir Highway — a stunning roadside stop; early morning gives the calmest reflections.",
      "The old cliffside earthen quarter and the memory of old Kashgar — check current opening, as parts may be under protection or repair."
    ],
    itinerary: [
      { day: "Day 1", theme: "Old-City Wander", path: "Kashgar Old City → Id Kah Mosque → century-old teahouse", slots: [
        { when: "Morning", what: "The <b>Kashgar Old City</b> opening ceremony and the <b>Id Kah Mosque</b>." },
        { when: "Afternoon", what: "Wind through the earthen lanes and slow hours in a <b>hundred-year-old teahouse</b>." },
        { when: "Evening", what: "Lamb and naan at the night market." }
      ]},
      { day: "Day 2", theme: "Pamir Highland", path: "Baisha Lake → Karakul Lake", slots: [
        { when: "Morning", what: "Drive the Karakoram Highway to <b>Baisha Lake</b> (permit needed)." },
        { when: "Afternoon", what: "Continue to <b>Karakul Lake</b> beneath the snow peaks." },
        { when: "Evening", what: "Return, or stay over in Taxkorgan." }
      ]},
      { day: "Day 3", theme: "Snow & Switchbacks", path: "Muztagh Ata → Panlong ancient road", slots: [
        { when: "Morning", what: "The snow giant <b>Muztagh Ata</b> up close." },
        { when: "Afternoon", what: "The dizzying switchbacks of the <b>Panlong ancient road</b>." },
        { when: "Evening", what: "Back to Kashgar for a hot jar-cooked lamb soup." }
      ]}
    ],
    food: [
      { zh: "鸡", name: "Big-Plate Chicken", tag: "Signature", blurb: "Dapanji — chicken stewed with potato and peppers, finished with hand-pulled belt noodles." },
      { zh: "包", name: "Baked Samsa", tag: "Street", blurb: "Kao baozi — crisp, juicy lamb-filled pastries straight from the tandoor." },
      { zh: "馕", name: "Naan", tag: "Staple", blurb: "Tandoor-baked flatbread in countless shapes — the everyday bread of the region." },
      { zh: "缸", name: "Jar-Cooked Lamb", tag: "Local", blurb: "Gangzi rou — clear, clean lamb slow-cooked in a jar, eaten with naan." },
      { zh: "酪", name: "Yoghurt", tag: "Refresh", blurb: "Tart, thick local yoghurt, often with a spoon of sugar — cooling in the dry heat." }
    ],
    stay: [
      { level: "Atmosphere", name: "In / by the Old City", blurb: "Walk to the lanes, mosque and bazaar — the most characterful base." },
      { level: "Convenient", name: "City Centre", blurb: "Hotels near transport, food and services for an easy stay." },
      { level: "For the Pamirs", name: "Taxkorgan", blurb: "A highland base for the Karakul/Baisha lakes if you do the full Pamir loop (permit needed)." }
    ],
    pitfalls: [
      { emoji: "🪪", title: "Permits & ID", text: "A border permit is required for Taxkorgan and the Pamir lakes — arrange it ahead, and carry your passport everywhere." },
      { emoji: "🧴", title: "Sun & dryness", text: "Strong UV and big day-night swings — high-SPF sunscreen, sunglasses, lip balm and layers." },
      { emoji: "🫁", title: "Altitude", text: "The Pamir lakes sit above 3,600m — go slow, hydrate, and don't overexert on arrival." },
      { emoji: "🚗", title: "Getting to the lakes", text: "A chartered car is the practical way up the winding mountain highway — bring motion-sickness remedies." }
    ],
    seasonal: false,
    bestTime: { lead: "Kashgar is best from <b>May to October</b>, when the Pamir highland and lakes are open and mild. Spring and autumn are pleasant in the city; summer is hot in the lowland but cool up high; winter is cold and many highland routes close.", seasons: [ { name: "Spring", note: "Apr–May · mild, blossoms", best: false }, { name: "Summer", note: "Jun–Aug · hot city / cool Pamirs", best: false }, { name: "Autumn ★", note: "Sep–Oct · clear, golden — best", best: true }, { name: "Winter", note: "Nov–Mar · cold, passes may close", best: false } ] },
    specialties: [
      { zh: "小刀", name: "Yengisar Knives", blurb: "Ornately handled Uyghur craft knives from nearby Yengisar — a famous regional craft." },
      { zh: "艾德莱斯", name: "Atlas Silk", blurb: "Vivid ikat-dyed 'Atlas' silk — scarves and fabric in rainbow patterns." },
      { zh: "地毯", name: "Carpets", blurb: "Hand-knotted Silk-Road carpets and kilims from the bazaar." },
      { zh: "干果", name: "Dried Fruit & Nuts", blurb: "Xinjiang raisins, apricots, walnuts and almonds — pile them high at the bazaar." }
    ],
    exploreMore: ["lhasa", "xian", "datong", "shangrila"]
  },

  /* ===================== SUZHOU ===================== */
  suzhou: {
    lead: "Classical gardens, white-walled water lanes and the finest of Jiangnan grace",
    getThere: { short: "Suzhou has no major airport of its own but is about 25 minutes from Shanghai by frequent high-speed trains (use Shanghai's airports).", more: "Bullet trains arrive at Suzhou and Suzhou North stations, minutes from Shanghai and Hangzhou. A growing metro plus buses and bikes cover the city; the classical gardens and Pingjiang Road cluster in the walkable old town." },
    tips: [
      "Suzhou's grandest garden — book online ahead (real-name) and go early on a weekday. Every few steps reframes the view; allow about 2 hours.",
      "A maze of Taihu rockeries that's fun to get lost in — right next to the Humble Administrator's Garden, so pair the two.",
      "Free canal-side old lanes — bridges, water and tea houses. Loveliest at dusk for blue-hour reflections; Shantang dazzles lit up at night.",
      "Famous for its midnight bell and the Tang poem — a modest ticket; combine with Tiger Hill nearby.",
      "A classic Jiangnan water town just outside the city — rowboats, arched bridges and the antique Tuisi Garden; a relaxed half-day.",
      "I.M. Pei's white-and-grey garden museum — free but book ahead; it sits right by the Humble Administrator's Garden, so do them together."
    ],
    itinerary: [
      { day: "Day 1", theme: "Gardens Dream", path: "Suzhou Museum → Humble Administrator's Garden → Pingjiang Road", slots: [
        { when: "Morning", what: "I.M. Pei's <b>Suzhou Museum</b>, then the <b>Humble Administrator's Garden</b> next door (book ahead)." },
        { when: "Afternoon", what: "The rockery maze of <b>Lion Grove Garden</b>." },
        { when: "Evening", what: "Canal-side <b>Pingjiang Road</b> at dusk." }
      ]},
      { day: "Day 2", theme: "Temples & Modern", path: "Xiyuan Temple → Lingering Garden → Jinji Lake", slots: [
        { when: "Morning", what: "Cats and calm at <b>Xiyuan Temple</b>, then the <b>Lingering Garden</b>." },
        { when: "Afternoon", what: "Modern Suzhou at <b>Jinji Lake</b>." },
        { when: "Evening", what: "Eslite and the Gate of the Orient night view." }
      ]},
      { day: "Day 3", theme: "Old Streets & Water", path: "Hanshan Temple → Shantang Street → Tongli (option)", slots: [
        { when: "Morning", what: "The bell of <b>Hanshan Temple</b> and a Suzhou broth-noodle breakfast." },
        { when: "Afternoon", what: "<b>Shantang Street</b>'s seven-li canal, or out to <b>Tongli</b> water town." },
        { when: "Evening", what: "Shantang lit up by the water." }
      ]}
    ],
    food: [
      { zh: "面", name: "Suzhou Broth Noodles", tag: "Must-try", blurb: "Refined noodles in a clear, sweet-savoury broth with toppings like braised pork or shrimp." },
      { zh: "蟹", name: "Crab-Roe Dishes", tag: "Seasonal", blurb: "Hairy-crab and crab-roe specialties in autumn — a Jiangnan delicacy at its best." },
      { zh: "黄", name: "Sesame Pastry (Xiekehuang)", tag: "Snack", blurb: "Flaky 'crab-shell yellow' sesame pastries — a classic Suzhou teatime bite." },
      { zh: "煎", name: "Suzhou Pan-fried Buns", tag: "Street", blurb: "Delicate sheng jian with a sweeter Jiangnan touch." },
      { zh: "糕", name: "Suzhou Sweets", tag: "Dessert", blurb: "Rose and osmanthus rice cakes and pastries — pretty, gentle and not too sweet." }
    ],
    stay: [
      { level: "Central old town", name: "Guanqian Street", blurb: "Walkable to gardens and lanes, well served by metro — the easy first-timer base." },
      { level: "Canal atmosphere", name: "Pingjiang Road", blurb: "Boutique stays among the water lanes — the most photogenic, quietly lovely at night." },
      { level: "Modern & value", name: "Jinji Lake / SIP", blurb: "Sleek lakeside hotels in the industrial park, with good value and metro links." }
    ],
    pitfalls: [
      { emoji: "📲", title: "Real-name booking", text: "The famous gardens need real-name online booking (up to 7 days in peak season) — reserve early." },
      { emoji: "🗓️", title: "Beat the crowds", text: "Weekends and holidays pack the gardens and Pingjiang Road — go on a weekday morning." },
      { emoji: "🚇", title: "Getting around", text: "Metro plus bikes cover the old town; Tongli and the water towns are a short bus/car ride out." },
      { emoji: "🦐", title: "Avoid overcharging", text: "At water-town snack stalls, check prices before ordering and favour busy, well-reviewed spots." }
    ],
    seasonal: false,
    bestTime: { lead: "Suzhou is beautiful year-round, but <b>spring and autumn</b> are ideal — blossoms and fresh green in spring, osmanthus and crisp light in autumn. Summer is hot and humid; winter is cold but the gardens are serene and crowd-free.", seasons: [ { name: "Spring", note: "Mar–May · blossoms, fresh green — best", best: false }, { name: "Summer", note: "Jun–Aug · hot, humid", best: false }, { name: "Autumn ★", note: "Sep–Nov · osmanthus, crisp — best", best: true }, { name: "Winter", note: "Dec–Feb · cold, quiet gardens", best: false } ] },
    specialties: [
      { zh: "苏绣", name: "Su Embroidery", blurb: "One of China's four great embroidery styles — exquisitely fine double-sided silk work." },
      { zh: "丝绸", name: "Silk", blurb: "Suzhou's age-old silk — scarves, fabric and quilts from the silk market." },
      { zh: "苏扇", name: "Suzhou Fans", blurb: "Elegant folding and silk fans, a refined Jiangnan craft." },
      { zh: "碧螺春", name: "Biluochun Tea", blurb: "The famous spiral green tea from the Dongting hills by Lake Tai." }
    ],
    exploreMore: ["shanghai", "hangzhou", "nanjing", "xian"]
  },

  /* ===================== WUHAN (seasonal) ===================== */
  wuhan: {
    lead: "Great river, great lakes — Yellow Crane Tower, cherry blossoms, hot-dry noodles and university campuses",
    getThere: { short: "Wuhan has an international airport (WUH) and is a central high-speed rail hub, roughly 4–5h from Beijing, Shanghai and Guangzhou.", more: "Fly into Tianhe Airport (linked by metro) or arrive at Wuhan, Hankou and Wuchang stations. A big metro network plus buses and the classic Yangtze ferries connect the 'three towns'; many riverfront and lake sights are walkable or a short ride apart." },
    tips: [
      "You don't always need a ticket — the red walls at Simenkou make a great free shot. For the climb and river view, go up; sunset light is best.",
      "China's largest urban lake — rent a bike for the greenway. Cherry blossoms (Moshan) in spring, lotus in summer; allow a relaxed half-day.",
      "The most famous cherry-blossom campus — late March needs an advance reservation and gets very crowded. Lovely Republican architecture year-round.",
      "Hubu Alley is the breakfast-snack street for reganmian and doupi; Jianghan Road is the historic shopping street — graze in the morning.",
      "Walk or cycle the first Yangtze bridge; the riverbank is the spot for sunset and ferries. A ¥1.5 ferry is a cheap river cruise.",
      "Home to the Marquis Yi of Zeng bells and the Sword of Goujian — book ahead (free). A must for Chu-civilisation treasures."
    ],
    itinerary: [
      { day: "Day 1", theme: "Hankou Charm", path: "Gude Temple → Lihuangpi Road → Jianghan Road", slots: [
        { when: "Morning", what: "The Euro-Asian <b>Gude Temple</b>." },
        { when: "Afternoon", what: "Citywalk <b>Lihuangpi Road</b> and the historic <b>Jianghan Road</b>." },
        { when: "Evening", what: "The Jianghan riverfront." }
      ]},
      { day: "Day 2", theme: "Wuchang Culture", path: "Hubei Provincial Museum → East Lake → Liangdao Street", slots: [
        { when: "Morning", what: "The <b>Hubei Provincial Museum</b> and its ancient bells (book ahead)." },
        { when: "Afternoon", what: "Cycle the <b>East Lake</b> greenway." },
        { when: "Evening", what: "Street food on <b>Liangdao Street</b>." }
      ]},
      { day: "Day 3", theme: "Classics", path: "Tanhualin → Yellow Crane Tower → Yangtze River Bridge", slots: [
        { when: "Morning", what: "Artsy lanes of <b>Tanhualin</b>." },
        { when: "Afternoon", what: "The <b>Yellow Crane Tower</b> over the great river." },
        { when: "Evening", what: "Sunset on the <b>Yangtze River Bridge</b>." }
      ]}
    ],
    food: [
      { zh: "面", name: "Hot-Dry Noodles", tag: "Must-try", blurb: "Reganmian — Wuhan's iconic breakfast: noodles tossed with sesame paste and pickles." },
      { zh: "皮", name: "Three-Fresh Doupi", tag: "Street", blurb: "Sanxian doupi — a crisp tofu-skin-and-glutinous-rice griddle cake with savoury filling." },
      { zh: "藕", name: "Lotus-Root Rib Soup", tag: "Local", blurb: "Slow-simmered pork ribs and powdery lotus root — a comforting Hubei classic." },
      { zh: "虾", name: "Braised Crayfish", tag: "Summer", blurb: "Youmen daxia — spicy summer crayfish, the soul of Wuhan's night-time food streets." },
      { zh: "粉", name: "Beef Noodles", tag: "Breakfast", blurb: "Spicy beef rice-noodles, another Wuhan morning staple." }
    ],
    stay: [
      { level: "Historic & food", name: "Jianghan Road / Hankou", blurb: "Old concession architecture, snacks and metro — a lively, central base." },
      { level: "Lake & culture", name: "Wuchang / East Lake", blurb: "Near the museum and the lake greenway — greener and calmer." },
      { level: "Modern central", name: "Chu River & Han Street", blurb: "A modern shopping-and-dining district, well connected by metro." }
    ],
    pitfalls: [
      { emoji: "⛴️", title: "Getting around", text: "The metro covers the three towns, and the ¥1.5 Yangtze ferry is a cheap, classic river crossing." },
      { emoji: "📲", title: "Reservations", text: "The Hubei Museum and (in blossom season) Wuhan University need a (free) booking — sort it ahead." },
      { emoji: "🌸", title: "Blossom crowds", text: "Late-March cherry-blossom crowds at Wuhan University and East Lake are intense — go early." },
      { emoji: "🥵", title: "Summer heat", text: "Wuhan is a 'furnace city' — summers are very hot and humid, so hydrate and pace yourself." }
    ],
    seasonal: true,
    seasons: [
      { name: "Spring", note: "Mar–Apr · cherry blossoms at Wuhan University, East Lake and Moshan — the signature season." },
      { name: "Summer", note: "Jun–Aug · lotus on East Lake and lively crayfish nights; hot, humid 'furnace' heat." },
      { name: "Autumn", note: "Sep–Nov · crisp and comfortable, golden greenway — the easiest weather for cycling." },
      { name: "Winter", note: "Dec–Feb · cold and grey but quiet; warming lotus-root rib soup and reganmian." }
    ],
    specialties: [
      { zh: "热干面", name: "Hot-Dry Noodle Kits", blurb: "Boxed reganmian to take the Wuhan breakfast home." },
      { zh: "周黑鸭", name: "Zhou Hei Ya Duck", blurb: "Spicy braised duck necks and wings — a famous Wuhan snack brand." },
      { zh: "绿松石", name: "Turquoise", blurb: "Hubei is a major turquoise source — beads and jewellery." },
      { zh: "楚文创", name: "Chu Culture Goods", blurb: "Designs inspired by the Chu bronzes and the Marquis Yi bells." }
    ],
    exploreMore: ["changsha", "nanjing", "chongqing", "xian"]
  },

  /* ===================== XI'AN ===================== */
  xian: {
    lead: "Thirteen dynasties of history — the Terracotta Army, the city wall, Tang night cities and carb-heavy street food",
    getThere: { short: "Xi'an has a large international airport (XIY) and is a central high-speed rail hub, reaching Beijing, Chengdu, Luoyang and beyond.", more: "Fly into Xianyang International Airport (linked by the airport metro/bus) or arrive at Xi'an North and Xi'an stations. The city metro is excellent; the Terracotta Army is about 1h east in Lintong, reachable by tour, train or chartered car." },
    tips: [
      "Book about 3 days ahead. It's in Lintong (about 1h out) — a guide or audio guide makes sense of the pits; go early to beat the tour groups.",
      "Rent a bike and cycle the full 14km loop — magical at sunset and lit up at night. Enter at the South Gate (Yongningmen).",
      "Free to see from the squares — the North Square has Asia's largest music fountain (check show times); the Tang Everbright City next door dazzles at night.",
      "A lively halal food street — but it's touristy and pricey; for the real thing locals point to Sajin Bridge or Xiaonanmen. Go hungry.",
      "The Ming-era heart of the old city, beautifully lit at night — a quick climb and a great photo stop between the Muslim Quarter and the wall.",
      "Book about 5 days ahead — it sells out fast. One museum to grasp Zhou-Qin-Han-Tang; allow a half day."
    ],
    itinerary: [
      { day: "Day 1", theme: "Tang Splendour", path: "Shaanxi History Museum → Big Wild Goose Pagoda → Tang Everbright City", slots: [
        { when: "Morning", what: "Treasures at the <b>Shaanxi History Museum</b> (book ~5 days ahead)." },
        { when: "Afternoon", what: "The <b>Big Wild Goose Pagoda</b> and music fountain." },
        { when: "Evening", what: "Tang costumes and lights at <b>Tang Everbright City</b>." }
      ]},
      { day: "Day 2", theme: "The Qin Trail", path: "Terracotta Army → Mount Li → Huaqing Palace", slots: [
        { when: "Morning", what: "The thousand-strong <b>Terracotta Army</b> (book ahead) — hire a guide." },
        { when: "Afternoon", what: "The Lishan hot springs of <b>Huaqing Palace</b>." },
        { when: "Evening", what: "Back to the city for dinner." }
      ]},
      { day: "Day 3", theme: "Old-City Life", path: "City Wall → Bell & Drum Towers → Muslim Quarter", slots: [
        { when: "Morning", what: "Cycle the full <b>City Wall</b> loop." },
        { when: "Afternoon", what: "The <b>Bell & Drum Towers</b> and old-town lanes." },
        { when: "Evening", what: "Feast through the <b>Muslim Quarter</b> (or Sajin Bridge for locals)." }
      ]}
    ],
    food: [
      { zh: "馍", name: "Roujiamo & Liangpi", tag: "Must-try", blurb: "The 'Xi'an burger' of stewed pork in a crisp bun, with cold liangpi noodles — the classic combo." },
      { zh: "馍", name: "Lamb Paomo", tag: "Signature", blurb: "Yangrou paomo — you tear flatbread into a bowl, then it's filled with rich lamb soup." },
      { zh: "面", name: "Biangbiang Noodles", tag: "Local", blurb: "Wide, belt-like hand-pulled noodles with chilli and vinegar — pure Shaanxi carbs." },
      { zh: "鸡", name: "Calabash Chicken", tag: "Classic", blurb: "Hulu ji — crisp-skinned deep-fried chicken, a Xi'an specialty." },
      { zh: "串", name: "Grilled Skewers", tag: "Street", blurb: "Cumin-spiced lamb skewers — the smoky soul of Xi'an's night streets." }
    ],
    stay: [
      { level: "Old-city core", name: "Bell Tower / Inside the Walls", blurb: "Walk to the towers, Muslim Quarter and wall — the most convenient base." },
      { level: "Tang sights", name: "Big Wild Goose Pagoda / Qujiang", blurb: "Near the pagoda, fountain and Tang Everbright City — lively at night." },
      { level: "Best value", name: "Along Metro Line 2", blurb: "The north-south line links the wall, pagoda and stations at lower rates." }
    ],
    pitfalls: [
      { emoji: "📅", title: "Book ahead", text: "The Shaanxi History Museum (~5 days) and Terracotta Army (~3 days) sell out — reserve early." },
      { emoji: "🚇", title: "Getting around", text: "The metro is best in the city; for the Terracotta Army take a tour, the train or a chartered car." },
      { emoji: "🍜", title: "Eat where locals eat", text: "The Muslim Quarter is touristy and pricey — locals prefer Sajin Bridge or Xiaonanmen for the real flavours." },
      { emoji: "🎒", title: "What to pack", text: "Lots of walking and wall-cycling — comfy shoes; summers are hot, so go early and hydrate." }
    ],
    seasonal: false,
    bestTime: { lead: "Xi'an is a year-round destination, but <b>spring and autumn</b> are the most comfortable. Summer is hot and crowded; winter is cold but quieter, and the city wall under snow is special.", seasons: [ { name: "Spring", note: "Mar–May · mild — great", best: false }, { name: "Summer", note: "Jun–Aug · hot, busy", best: false }, { name: "Autumn ★", note: "Sep–Nov · crisp, clear — best", best: true }, { name: "Winter", note: "Dec–Feb · cold, quiet", best: false } ] },
    specialties: [
      { zh: "文创", name: "Terracotta Souvenirs", blurb: "Mini warriors and Tang-themed creative goods — the classic Xi'an gift." },
      { zh: "皮影", name: "Shadow Puppets", blurb: "Hand-cut leather shadow-play figures, a Shaanxi folk art." },
      { zh: "唐三彩", name: "Tang Tri-colour Pottery", blurb: "Glazed sancai horses and camels echoing the Tang dynasty." },
      { zh: "泥塑", name: "Fengxiang Clay Figures", blurb: "Bright, lucky painted clay figurines from nearby Fengxiang." }
    ],
    exploreMore: ["datong", "lhasa", "chengdu", "kashgar"]
  },

  /* ===================== CHONGQING ===================== */
  chongqing: {
    lead: "An 8D fantasy city stacked between mountains and rivers — light-soaked nights, monorails through buildings and fierce hotpot",
    getThere: { short: "Chongqing has a large international airport (CKG) and is a high-speed rail hub, with bullet trains to Chengdu, Xi'an, Wuhan and beyond.", more: "Fly into Jiangbei International Airport (linked by metro) or arrive at Chongqing West, North and Shapingba stations. The metro (with its famous through-building monorail) plus the Yangtze cableway and ride-hailing are the way around — but the vertical, layered terrain confuses GPS, so follow signs." },
    tips: [
      "Don't squeeze inside — the iconic 'Spirited Away' shot is from Qiansimen Bridge or the opposite bank at dusk. It's free; arrive before dark for the light-up.",
      "The train threads through a residential building — shoot it from the viewing platform below (free). Off-peak is far less crowded.",
      "A short cable-car ride across the Yangtze with two-rivers views — buy online ahead in peak season to skip the long queue.",
      "The downtown hub and snack alley — hotpot, xiaomian and skewers. A lively base day and night.",
      "The best full night panorama of the Yuzhong peninsula — go up at dusk and stay for the lights.",
      "A riverside old town of flagstone lanes, fried twists and tea houses — touristy but fun; quieter early morning."
    ],
    itinerary: [
      { day: "Day 1", theme: "Yuzhong Classics", path: "Baixiangju → Shancheng Trail → Hongyadong", slots: [
        { when: "Morning", what: "The old-movie <b>Baixiangju</b> and the <b>Shancheng (Mountain City) Trail</b>." },
        { when: "Afternoon", what: "Wander toward <b>Hongyadong</b>." },
        { when: "Evening", what: "Shoot <b>Hongyadong</b> from Qiansimen Bridge at dusk." }
      ]},
      { day: "Day 2", theme: "Through-Building & Art", path: "Liziba Monorail → E'ling No.2 Factory → Guanyinqiao", slots: [
        { when: "Morning", what: "The <b>Liziba</b> train through a building." },
        { when: "Afternoon", what: "Retro-industrial <b>E'ling No.2 Factory</b> with skyline views." },
        { when: "Evening", what: "Shopping and food at <b>Guanyinqiao</b>." }
      ]},
      { day: "Day 3", theme: "Southbank Retro", path: "Longmenhao Old Street → Tanzishi → Yangtze Cableway", slots: [
        { when: "Morning", what: "<b>Longmenhao Old Street</b> and Xiahaoli's restored lanes." },
        { when: "Afternoon", what: "<b>Tanzishi Old Street</b> by the river." },
        { when: "Evening", what: "A night ride on the <b>Yangtze Cableway</b>." }
      ]}
    ],
    food: [
      { zh: "锅", name: "Authentic Hotpot", tag: "Must-do", blurb: "Fiery beef-tallow hotpot in a neighbourhood spot (skip the viral chains) — the city's obsession." },
      { zh: "面", name: "Chongqing Xiaomian", tag: "Breakfast", blurb: "Numbing-spicy noodles, the local morning ritual — order it as hot as you dare." },
      { zh: "江", name: "Jianghu Cuisine", tag: "Local", blurb: "Bold 'rivers-and-lakes' dishes like laziji and boiled fish — heavy on chilli and Sichuan pepper." },
      { zh: "串", name: "Chuan-Chuan Skewers", tag: "Street", blurb: "Hotpot-on-a-stick — pick your skewers and dunk them in bubbling broth." },
      { zh: "冰", name: "Bingfen & Liangxia", tag: "Cool-down", blurb: "Icy jelly desserts to soothe the chilli burn between meals." }
    ],
    stay: [
      { level: "Downtown & sights", name: "Jiefangbei / Yuzhong", blurb: "In the heart of the night views, food and monorail — the classic base." },
      { level: "Shopping & value", name: "Guanyinqiao", blurb: "A lively shopping-and-nightlife hub across the river, often better value." },
      { level: "Riverside nights", name: "Nanbin Road", blurb: "Along the south bank for the glittering skyline and river views." }
    ],
    pitfalls: [
      { emoji: "🧗", title: "Dress for stairs", text: "It's a vertical 'stair city' — comfy non-slip shoes, and be ready for a lot of up and down." },
      { emoji: "🧭", title: "GPS gets lost", text: "Navigation is unreliable in the 8D terrain — follow signs, ask locals, and allow extra time." },
      { emoji: "🚕", title: "Getting around", text: "High-speed rail and metro are best; avoid unlicensed 'black taxis' at stations." },
      { emoji: "🌶️", title: "Tame the spice", text: "Hotpot and jianghu food are intense — ask for mild, and keep cold drinks or fruit handy." }
    ],
    seasonal: false,
    bestTime: { lead: "Chongqing is best in <b>spring and autumn</b>. Summer is famously one of China's 'furnace' cities (very hot and humid), and winter is mild but grey and foggy. Aim for March–May or September–November.", seasons: [ { name: "Spring", note: "Mar–May · mild — great", best: false }, { name: "Summer", note: "Jun–Aug · 'furnace' heat", best: false }, { name: "Autumn ★", note: "Sep–Nov · comfortable — best", best: true }, { name: "Winter", note: "Dec–Feb · mild, foggy", best: false } ] },
    specialties: [
      { zh: "底料", name: "Hotpot Base", blurb: "Boxed beef-tallow hotpot base to recreate the fire at home." },
      { zh: "小面", name: "Xiaomian Seasoning", blurb: "Packets of the chilli-pepper seasoning behind Chongqing's morning noodles." },
      { zh: "榨菜", name: "Fuling Zhacai", blurb: "The famous pickled mustard-stem from nearby Fuling." },
      { zh: "折扇", name: "Rongchang Crafts", blurb: "Rongchang folding fans and pottery from the region." }
    ],
    exploreMore: ["chengdu", "wuhan", "changsha", "guilin"]
  },

  /* ===================== CHENGDU ===================== */
  chengdu: {
    lead: "A city that turns daily life into a holiday — pandas, teahouses, hotpot and ancient Shu wonders",
    getThere: { short: "Chengdu has two international airports (Tianfu TFU and Shuangliu CTU) and is a high-speed rail hub, reaching Chongqing, Xi'an, Kunming and beyond.", more: "Fly into Tianfu or Shuangliu (both linked by metro) or arrive at Chengdu East and South stations. The metro plus ride-hailing cover the city; the Panda Base is on the metro, while Sanxingdui and Dujiangyan are day trips by tour or high-speed train." },
    tips: [
      "Go right at opening (around 8am) when pandas are most active and feeding — book ahead. To see star panda 'Hua Hua', expect a long, separate queue.",
      "Qing-era lanes of tea houses, ear-cleaning and snacks — touristy but fun; pair it with People's Park for the real teahouse vibe.",
      "A Three Kingdoms shrine and themed old street — red lanterns and chuan-chuan; liveliest in the evening.",
      "The most authentic Chengdu afternoon — bamboo chairs, covered-bowl tea, ear-cleaning and mahjong. Free to enter; just buy a tea.",
      "A 2,000-year-old irrigation marvel about 1h out — engineering meets landscape; combine with Mount Qingcheng for a day trip.",
      "A serene garden on the poet Du Fu's former home — red walls, bamboo and water; a calm, photogenic break."
    ],
    itinerary: [
      { day: "Day 1", theme: "Shu Stroll", path: "Wuhou Shrine → Jinli → Jiuyanqiao", slots: [
        { when: "Morning", what: "The <b>Wuhou Shrine</b> and Three Kingdoms <b>Jinli</b> street." },
        { when: "Afternoon", what: "Quiet bamboo and water at <b>Du Fu's Thatched Cottage</b>." },
        { when: "Evening", what: "Riverside bars at <b>Jiuyanqiao</b>." }
      ]},
      { day: "Day 2", theme: "Pandas & Old Lanes", path: "Panda Base → Kuanzhai Alley → People's Park", slots: [
        { when: "Morning", what: "The <b>Panda Base</b> at opening, while the pandas are active." },
        { when: "Afternoon", what: "<b>Kuanzhai Alley</b>'s tea houses and snacks." },
        { when: "Evening", what: "Covered-bowl tea at <b>People's Park</b>, then a spicy hotpot." }
      ]},
      { day: "Day 3", theme: "Ancient Shu", path: "Sanxingdui Museum → Chunxi Road → Taikoo Li", slots: [
        { when: "Morning", what: "The golden masks and bronze trees of <b>Sanxingdui</b> (day trip)." },
        { when: "Afternoon", what: "Shopping at <b>Chunxi Road</b>." },
        { when: "Evening", what: "<b>Taikoo Li</b> and the 3D Daci Temple billboard, a last hotpot." }
      ]}
    ],
    food: [
      { zh: "锅", name: "Chengdu Hotpot", tag: "Must-do", blurb: "Numbing-spicy beef-tallow hotpot — the city's headline meal; order mild if you're new to it." },
      { zh: "串", name: "Chuan-Chuan & Maocai", tag: "Street", blurb: "Skewers and bowl-served 'pick-your-own' spicy broth — casual Chengdu comfort food." },
      { zh: "蹄", name: "Laoma Pig-Trotter Soup", tag: "Local", blurb: "Silky stewed trotters in a mild, collagen-rich soup — a Chengdu late-night favourite." },
      { zh: "糕", name: "Egg Pancake (Danhonggao)", tag: "Snack", blurb: "Little folded egg cakes with sweet or savoury fillings — a beloved street snack." },
      { zh: "鸡", name: "Bobo Chicken", tag: "Cold dish", blurb: "Skewered cold bites bathed in a fragrant chilli-and-sesame sauce." }
    ],
    stay: [
      { level: "Downtown", name: "Chunxi Road / Taikoo Li", blurb: "Central shopping, dining and metro — the easy first-timer base." },
      { level: "Old-town charm", name: "Kuanzhai Alley / People's Park", blurb: "Near the teahouses and lanes, central and atmospheric." },
      { level: "Best value", name: "Along the metro", blurb: "Anywhere on the metro gives cheap, fast access — including straight to the Panda Base line." }
    ],
    pitfalls: [
      { emoji: "🐼", title: "Pandas, go early", text: "Arrive at opening (~8am) for active pandas; star panda 'Hua Hua' has a long separate queue." },
      { emoji: "📅", title: "Book ahead", text: "Reserve the Panda Base and Sanxingdui online; both get busy." },
      { emoji: "🚇", title: "Getting around", text: "Metro plus ride-hailing cover the city; Sanxingdui and Dujiangyan are day trips by train or tour." },
      { emoji: "🌶️", title: "Tame the spice", text: "Hotpot is fierce — order a mild or split pot and pace the chillies." }
    ],
    seasonal: false,
    bestTime: { lead: "Chengdu is mild much of the year; <b>spring and autumn</b> are best. Summers are hot and humid, winters cool, grey and often overcast — but the city's slow teahouse charm works in any season.", seasons: [ { name: "Spring", note: "Mar–May · mild, flowers — best", best: false }, { name: "Summer", note: "Jun–Aug · hot, humid", best: false }, { name: "Autumn ★", note: "Sep–Nov · comfortable — best", best: true }, { name: "Winter", note: "Dec–Feb · cool, grey", best: false } ] },
    specialties: [
      { zh: "底料", name: "Hotpot Base", blurb: "Boxed Sichuan hotpot and maocai bases to take the heat home." },
      { zh: "蜀绣", name: "Shu Embroidery", blurb: "One of China's four great embroidery styles, with panda and flower motifs." },
      { zh: "熊猫", name: "Panda Goods", blurb: "Endless adorable panda toys, tea tins and creative gifts." },
      { zh: "茶", name: "Sichuan Tea & Brocade", blurb: "Mengding and jasmine teas, and Shu brocade — classic Chengdu gifts." }
    ],
    exploreMore: ["chongqing", "xian", "guilin", "lhasa"]
  },

  /* ===================== CHANGSHA ===================== */
  changsha: {
    lead: "A spicy, sleepless city of riverside views, milk-tea culture, viral street life and fiery Hunan food",
    getThere: { short: "Changsha has an international airport (CSX) and is a high-speed rail hub, about 2h from Wuhan and Guangzhou and a gateway to Zhangjiajie.", more: "Fly into Huanghua International Airport (linked by maglev/metro) or arrive at Changsha South station. A growing metro plus buses and ride-hailing cover the compact sights; Orange Isle and Mount Yuelu are metro-reachable." },
    tips: [
      "Free — see the giant young-Mao statue, and catch the weekend-evening fireworks over the river. The little sightseeing train saves the long walk.",
      "A thousand-year academy and a hill with city views — go early to beat crowds and heat; Aiwan Pavilion is gorgeous with autumn maples.",
      "Old Changsha's flagstone street — Jia Yi's house and endless snacks; busiest and best in the evening.",
      "A viral, photogenic 'community' rebuilt as 1980s Changsha — go to wander and shoot, not just to eat; expect queues at peak.",
      "The downtown hub — the rooftop KAWS at IFS is the selfie spot, with Sexy Tea (Cha Yan Yue Se) on every corner.",
      "Both banks light up at night, mirrored in the river — a relaxed way to end a day."
    ],
    itinerary: [
      { day: "Day 1", theme: "Street-Food & Trends", path: "Wuyi Square → IFS → Super Wenheyou", slots: [
        { when: "Morning", what: "The downtown buzz around <b>Wuyi Square</b>." },
        { when: "Afternoon", what: "The rooftop KAWS at <b>IFS</b>, then nostalgic <b>Super Wenheyou</b>." },
        { when: "Evening", what: "Graze the city's famous street snacks." }
      ]},
      { day: "Day 2", theme: "History & River", path: "Orange Isle → Mount Yuelu → Yuelu Academy", slots: [
        { when: "Morning", what: "<b>Orange Isle</b> and the young-Mao statue." },
        { when: "Afternoon", what: "<b>Mount Yuelu</b> and the thousand-year <b>Yuelu Academy</b>." },
        { when: "Evening", what: "Aiwan Pavilion and a riverside stroll." }
      ]},
      { day: "Day 3", theme: "Culture", path: "Hunan Museum → Kaifu Temple → Chaozong Street", slots: [
        { when: "Morning", what: "The Mawangdui treasures at the <b>Hunan Museum</b> (book ahead)." },
        { when: "Afternoon", what: "Old <b>Kaifu Temple</b>." },
        { when: "Evening", what: "Artsy <b>Chaozong Street</b> and a cup of Sexy Tea." }
      ]}
    ],
    food: [
      { zh: "茶", name: "Sexy Tea (Cha Yan Yue Se)", tag: "Must-try", blurb: "Changsha's beloved milk-tea brand — creamy, fragrant and on nearly every corner." },
      { zh: "臭", name: "Stinky Tofu", tag: "Street", blurb: "Black, deep-fried Changsha-style stinky tofu in spicy sauce — a fragrant rite of passage." },
      { zh: "牛", name: "Stir-fried Beef", tag: "Hunan", blurb: "Xiaochao huangniurou — wok-fried beef with chillies, the test of a real Hunan kitchen." },
      { zh: "虾", name: "Spicy Crayfish", tag: "Summer", blurb: "Kouwei xia — Changsha's punchy crayfish, the centrepiece of a summer night out." },
      { zh: "坨", name: "Sugar-Oil Dough Balls", tag: "Snack", blurb: "Tangyou tuotuo — chewy fried glutinous-rice balls in syrup, a classic street sweet." }
    ],
    stay: [
      { level: "Downtown & nights", name: "Wuyi Square / Huangxing Road", blurb: "Central, on the metro, surrounded by food and nightlife — the easy base." },
      { level: "River views", name: "Orange Isle / Xiang River", blurb: "By the water for the river light show and weekend fireworks." },
      { level: "Quieter", name: "Hexi / Mount Yuelu", blurb: "Near the academy and university, calmer and green." }
    ],
    pitfalls: [
      { emoji: "📅", title: "Book the museum", text: "The Hunan Museum (free) needs booking ~7 days ahead and sells out fast." },
      { emoji: "🎆", title: "Weekend crowds", text: "Orange Isle's weekend fireworks draw big crowds — arrive early for a spot." },
      { emoji: "🚇", title: "Getting around", text: "The metro reaches the sights, including Orange Isle; ride-hailing fills the gaps." },
      { emoji: "🧋", title: "Expect queues", text: "Super Wenheyou and Sexy Tea have long lines at peak — go off-hours or order ahead." }
    ],
    seasonal: false,
    bestTime: { lead: "Changsha is best in <b>spring and autumn</b>. Summer is hot and humid; winter is cold and damp — but the food-and-nightlife buzz keeps the city lively year-round.", seasons: [ { name: "Spring", note: "Mar–May · mild — great", best: false }, { name: "Summer", note: "Jun–Aug · hot, humid", best: false }, { name: "Autumn ★", note: "Sep–Nov · crisp, maples — best", best: true }, { name: "Winter", note: "Dec–Feb · cold, damp", best: false } ] },
    specialties: [
      { zh: "湘绣", name: "Xiang Embroidery", blurb: "One of China's four great embroidery styles, known for lifelike tigers and lions." },
      { zh: "小吃", name: "Snack Gift Packs", blurb: "Boxed stinky-tofu kits and crayfish seasoning to take the spice home." },
      { zh: "菊花石", name: "Chrysanthemum Stone", blurb: "Carved stone with natural chrysanthemum-like patterns, a Hunan craft." },
      { zh: "黑茶", name: "Hunan Dark Tea", blurb: "Anhua dark tea, pressed into bricks — a regional specialty." }
    ],
    exploreMore: ["wuhan", "chongqing", "guilin", "zhangjiajie"]
  },

  /* ===================== DATONG ===================== */
  datong: {
    lead: "Northern Wei Buddhas, a cliff-hung temple, the world's tallest wooden pagoda and a four-square old city",
    getThere: { short: "Datong has an airport (DAT) and a high-speed rail station, about 1.5–2h from Beijing by bullet train.", more: "Fly into Datong Yungang Airport or take the high-speed train to Datong South. The major sights are spread out, so use the official scenic shuttle buses, tours or a chartered car; the old town itself is walkable." },
    tips: [
      "Go early — the open-air giant Buddha in Cave 20 is the showpiece. A guide helps read the Northern Wei carvings; allow a half day.",
      "Only ~2,475 climb-up tickets a day with a timed/face check — book ahead. The cliff walkways are narrow (not for vertigo); it sits beneath Mount Heng.",
      "The four-square restored Ming wall is best at night when it's lit — walk a stretch or cycle the top.",
      "A great Liao-Jin Buddhist hall — find the smiling, palms-together Bodhisattva; beautiful old-style architecture for photos.",
      "China's largest and earliest glazed nine-dragon screen — a quick but worthwhile stop in the old town.",
      "The Northern Sacred Mountain — a steep Taoist climb the Hanging Temple leans against; combine the two."
    ],
    itinerary: [
      { day: "Day 1", theme: "Old-City Beauty", path: "Huayan Temple → Shanhua Temple → Datong Old City", slots: [
        { when: "Morning", what: "The great halls of <b>Huayan Temple</b>." },
        { when: "Afternoon", what: "<b>Shanhua Temple</b> and the restored <b>Old City</b>." },
        { when: "Evening", what: "The city wall lit up, and Dongnanyi's lanes." }
      ]},
      { day: "Day 2", theme: "Northern Wei", path: "Yungang Grottoes → Datong Museum → Dongnanyi", slots: [
        { when: "Morning", what: "The thousand Buddhas of the <b>Yungang Grottoes</b> (go early)." },
        { when: "Afternoon", what: "Context at the <b>Datong Museum</b>." },
        { when: "Evening", what: "Citywalk the <b>Dongnanyi</b> cultural block." }
      ]},
      { day: "Day 3", theme: "Architectural Marvels", path: "Hanging Temple → Yingxian Wooden Pagoda", slots: [
        { when: "Morning", what: "The cliff-pinned <b>Hanging Temple</b> (book ahead) beneath Mount Heng." },
        { when: "Afternoon", what: "The thousand-year, nail-free <b>Yingxian Wooden Pagoda</b>." },
        { when: "Evening", what: "Return with a bowl of knife-cut noodles." }
      ]}
    ],
    food: [
      { zh: "面", name: "Knife-Cut Noodles", tag: "Must-try", blurb: "Daoxiaomian — chewy noodles shaved straight off the dough into the pot, the Shanxi staple." },
      { zh: "粉", name: "Hunyuan Cold Jelly", tag: "Local", blurb: "Liangfen — silky, springy cold jelly in a tangy-spicy sauce from nearby Hunyuan." },
      { zh: "糕", name: "Yellow-Rice Cake", tag: "Snack", blurb: "Huangmi lianggao — soft, lightly sweet millet cake, a northern comfort bite." },
      { zh: "肉", name: "Guoyourou", tag: "Classic", blurb: "Pork in a savoury-tart sauce — a signature Shanxi home dish over rice." },
      { zh: "丸", name: "Sweet-Sour Meatballs", tag: "Dish", blurb: "Tangcu wanzi — crisp fried meatballs in a glossy sweet-sour glaze." }
    ],
    stay: [
      { level: "Atmosphere", name: "Inside the Old City", blurb: "Walk the restored old town and lit-up wall — the most characterful base." },
      { level: "Transport", name: "Near the Train Station", blurb: "Handy for arrivals and the spread-out day trips, often better value." },
      { level: "Modern", name: "Yudong New District", blurb: "Newer hotels with more space and value, a short ride from the old town." }
    ],
    pitfalls: [
      { emoji: "🚌", title: "Getting around", text: "The sights are far apart — use the official scenic shuttle buses, a tour or a chartered car." },
      { emoji: "📅", title: "Book ahead", text: "Yungang and especially the Hanging Temple need advance/timed tickets (limited daily, face check)." },
      { emoji: "🧥", title: "Plateau weather", text: "Big day-night temperature swings and wind — bring layers even in summer." },
      { emoji: "🎒", title: "What to pack", text: "Comfy shoes for grottoes, walls and the pagoda; sun protection on the open sites." }
    ],
    seasonal: false,
    bestTime: { lead: "Datong sits on a high plateau, so it stays cool even in summer — <b>summer and autumn</b> are the most pleasant. Spring is windy and dusty; winter is cold and quiet. Days and nights swing a lot, so pack layers.", seasons: [ { name: "Spring", note: "Mar–Apr · windy, dusty", best: false }, { name: "Summer", note: "Jun–Aug · cool plateau — great", best: false }, { name: "Autumn ★", note: "Sep–Oct · crisp, clear — best", best: true }, { name: "Winter", note: "Nov–Feb · cold, quiet", best: false } ] },
    specialties: [
      { zh: "铜器", name: "Datong Copperware", blurb: "Hand-hammered copper pots and hotpots — a centuries-old Datong craft." },
      { zh: "剪纸", name: "Guangling Papercuts", blurb: "Intricate, colourful Shanxi papercut art." },
      { zh: "凉粉", name: "Hunyuan Cold-Jelly Kits", blurb: "Take-home liangfen sets from nearby Hunyuan." },
      { zh: "黄花", name: "Day-Lily (Huanghua)", blurb: "Datong's prized dried day-lily, a regional food specialty." }
    ],
    exploreMore: ["beijing", "xian", "kashgar", "lhasa"]
  },

  /* ===================== SHENZHEN ===================== */
  shenzhen: {
    lead: "From fishing village to tech metropolis — glass-tower skylines, free seaside parks and easy coastal escapes",
    getThere: { short: "Shenzhen has an international airport (SZX), is minutes from Hong Kong, and is a high-speed rail hub (about 30 min from Guangzhou).", more: "Fly into Bao'an International Airport (linked by metro) or arrive at Shenzhen North and Futian stations; Futian connects to Hong Kong by high-speed rail. The metro is excellent and reaches almost everything, including the coastal parks." },
    tips: [
      "Go up the Ping An Finance Centre cloud deck for the glass-tower view — book ahead, pick a clear day. Talent Park and Shenzhen Bay frame it at dusk.",
      "World landmarks in miniature — a theme park, best for families; a half to full day, and nicely lit in the evening.",
      "A free seaside boardwalk and mangrove park — cycle it for city-sea views and (in season) migrating birds; the 'orange sea' sunset is the shot.",
      "A Ming coastal-defence old town with the Jiaochangwei bay — a slower hills-and-sea escape, about 1.5h out; best as a day trip.",
      "'China's No.1 electronics street' — a maker/gadget wonderland; fun to browse even if you're not buying.",
      "Shenzhen's highest peak — climb (or part-cable) for hill-sea and skyline views; popular with local hikers on weekends."
    ],
    itinerary: [
      { day: "Day 1", theme: "City Coast", path: "Shenzhen Bay Park → Talent Park → Happy Coast", slots: [
        { when: "Morning", what: "Cycle <b>Shenzhen Bay Park</b> with views toward Hong Kong." },
        { when: "Afternoon", what: "The Ping An skyline from <b>Talent Park</b>." },
        { when: "Evening", what: "Dining and the Ferris wheel at <b>Happy Coast</b>." }
      ]},
      { day: "Day 2", theme: "Glass Sea", path: "Jidiaosha → Yangmeikeng → Wutong / seafood", slots: [
        { when: "Morning", what: "The clear 'glass sea' at <b>Jidiaosha</b> beach." },
        { when: "Afternoon", what: "Cycle the <b>Yangmeikeng</b> coast (the 'Mermaid' filming spot)." },
        { when: "Evening", what: "Nan'ao seafood, or a Wutong-area dinner." }
      ]},
      { day: "Day 3", theme: "Slow Culture", path: "Nantou Old Town → OCT-LOFT → Sea World", slots: [
        { when: "Morning", what: "History at <b>Nantou Old Town</b>." },
        { when: "Afternoon", what: "Galleries and cafes at <b>OCT-LOFT</b>." },
        { when: "Evening", what: "Waterfront dining at <b>Sea World</b> (Shekou)." }
      ]}
    ],
    food: [
      { zh: "锅", name: "Chaoshan Beef Hotpot", tag: "Must-do", blurb: "Hand-cut beef dipped in a clear broth — Shenzhen's hotpot of choice, fresh and quick." },
      { zh: "粉", name: "Rice Noodle Rolls", tag: "Breakfast", blurb: "Silky Cantonese cheungfun from spots like Hanji — a classic morning bite." },
      { zh: "鹅", name: "Roast Goose", tag: "Cantonese", blurb: "Crisp-skinned roast goose — a Lingnan staple done well across the city." },
      { zh: "蚝", name: "Shajing Oysters", tag: "Local", blurb: "Plump oysters from the Shenzhen coast, grilled or in omelettes." },
      { zh: "茶", name: "HK-style Cha Canting", tag: "Casual", blurb: "Hong-Kong-style cafe fare — milk tea, pineapple buns and baked rice, everywhere." }
    ],
    stay: [
      { level: "Sea & culture", name: "Nanshan / Shekou", blurb: "By the bay, parks and OCT creative district with great dining — a relaxed base." },
      { level: "Central CBD", name: "Futian", blurb: "Skyline central, metro everywhere, and the Hong Kong rail link — convenient for business." },
      { level: "Best value", name: "Luohu", blurb: "Near the old town and the HK border, with lower rates and easy metro access." }
    ],
    pitfalls: [
      { emoji: "🚇", title: "Getting around", text: "The metro is excellent — almost everything, including the coastal parks, is metro-reachable." },
      { emoji: "🧴", title: "Sun & heat", text: "Subtropical sun — sunscreen, hat and water; pace outdoor time in the hot months." },
      { emoji: "📲", title: "Reserve the coast", text: "Yangmeikeng and the Dapeng beaches need a reservation and pack out on weekends — book ahead." },
      { emoji: "🌀", title: "Typhoon season", text: "Summer (Jul–Sep) brings heat and typhoons — check forecasts before beach days." }
    ],
    seasonal: false,
    bestTime: { lead: "Shenzhen is warm year-round; <b>autumn and winter (October–February)</b> are the most comfortable and dry. Spring is humid; summer is hot and is typhoon season — but the beaches and parks shine when the weather's clear.", seasons: [ { name: "Spring", note: "Mar–Apr · warm, humid", best: false }, { name: "Summer", note: "May–Sep · hot, typhoons", best: false }, { name: "Autumn ★", note: "Oct–Nov · warm, dry — best", best: true }, { name: "Winter", note: "Dec–Feb · mild — great", best: false } ] },
    specialties: [
      { zh: "电子", name: "Electronics & Gadgets", blurb: "From Huaqiangbei — drones, parts and gadgets at maker-city prices." },
      { zh: "糕点", name: "HK-style Snacks", blurb: "Pineapple buns, egg rolls and cha-canting treats to take home." },
      { zh: "蚝干", name: "Shajing Dried Oysters", blurb: "Dried oysters from the Shenzhen coast, a traditional local product." },
      { zh: "文创", name: "Design Goods", blurb: "Creative, design-forward souvenirs from OCT-LOFT and the city's studios." }
    ],
    exploreMore: ["guangzhou", "xiamen", "guilin", "hangzhou"]
  }

};
