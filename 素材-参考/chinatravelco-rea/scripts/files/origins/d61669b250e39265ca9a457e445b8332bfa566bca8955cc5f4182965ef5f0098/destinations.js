/* Attraction and travel-pack data for 14 cities. The key matches images/draw/{key}.jpg.
   Each city: scenery intro + 5-6 highlight attractions + pack title/items. */
const cityGuides = {
  beijing: {
    routes: [{"no": "01", "theme": "Imperial Axis", "days": "1 day", "stops": ["Tiananmen Square", "The Forbidden City", "Jingshan Park"], "note": "Trace the central axis through the Forbidden City, then climb Jingshan for a rooftop view of golden palace roofs. Book the Forbidden City 7 days ahead; closed Mondays."}, {"no": "02", "theme": "Hutong Wander", "days": "1 day", "stops": ["Lama Temple", "Imperial College", "Wudaoying Hutong"], "note": "Slip into the artsy old lanes where incense, ancient scholar trees and tiny cafes mingle — old Beijing street life."}, {"no": "03", "theme": "The Great Wall", "days": "1 day", "stops": ["Badaling Great Wall", "Olympic Park"], "note": "A high-speed train runs straight to Badaling for sweeping mountain views; back in the city by dusk for the Bird's Nest and Water Cube lit up."}, {"no": "04", "theme": "Garden Dream", "days": "1 day", "stops": ["Summer Palace", "Old Summer Palace"], "note": "Row across Kunming Lake and stroll the Long Corridor, then reflect among the ruins of the Old Summer Palace."}],
    city: "Beijing", cityEn: "Beijing", region: "North China · Imperial Capital",
    tagline: "Where dynasties and skylines stand side by side",
    days: "3–5 days", season: "Best in spring & autumn",
    intro: "The weight of an ancient capital and the rhythm of a modern metropolis, layered together. Red-walled, gold-tiled palaces, the Great Wall winding over the hills, and deep hutong lanes face the glass towers of the CBD across the street — Beijing is the most substantial first stop into China.",
    attractions: [
      { name: "The Forbidden City", en: "The Forbidden City", blurb: "The world's largest surviving wooden palace complex — red walls, gold tiles, perfect symmetry; courtyard after courtyard reads like a dynasty's history." },
      { name: "The Great Wall (Mutianyu / Badaling)", en: "The Great Wall", blurb: "A giant dragon riding the ridgelines; Mutianyu is quieter and scenic, most spectacular when autumn colors the hills." },
      { name: "Temple of Heaven", en: "Temple of Heaven", blurb: "Where Ming and Qing emperors prayed for the harvest; the round Hall of Prayer is a geometric masterpiece, full of locals at dawn." },
      { name: "Summer Palace", en: "Summer Palace", blurb: "An imperial garden of Kunming Lake and Longevity Hill — the Long Corridor, Marble Boat and Seventeen-Arch Bridge bring landscape into the capital." },
      { name: "Hutongs & Nanluoguxiang", en: "Hutong & Nanluoguxiang", blurb: "The grey-brick texture of old Beijing — courtyard homes, scholar trees and bicycle bells, made for slow wandering." },
      { name: "798 Art District", en: "798 Art District", blurb: "A contemporary-art enclave in old factories — galleries, cafes and industrial graffiti show Beijing's younger side." }
    ],
    packTitle: "Palace Wall Dawn Pack",
    packItems: ["Beijing 3-day route", "Forbidden City booking & flow", "Hutong walking map", "Beijing snack list", "Sunset gate-tower spots", "A line of Beijing slang"]
  },

  shanghai: {
    routes: [{"no": "01", "theme": "The Bund Skyline", "days": "1 day", "stops": ["The Bund", "Nanjing Road", "Lujiazui"], "note": "Colonial facades by day, dazzling Lujiazui lights by night, both riverbanks from a Huangpu cruise."}, {"no": "02", "theme": "Plane-Tree Quarter", "days": "1 day", "stops": ["Yu Garden", "Xintiandi", "Wukang Road & French Concession"], "note": "Snack around the City God Temple by Yu Garden, then amble the shaded old villas of Wukang Road and Xintiandi."}, {"no": "03", "theme": "Water Towns", "days": "1 day", "stops": ["Zhujiajiao", "Fengjing Town"], "note": "Canal-side old towns just outside the city — rowboats and arched bridges, the slow Jiangnan life."}],
    city: "Shanghai", cityEn: "Shanghai", region: "East China · Shanghai Style",
    tagline: "A river between a century of history and the future",
    days: "2–4 days", season: "Great year-round",
    intro: "A single river, the Huangpu, divides a century of grand Bund architecture from the soaring skyline of Lujiazui. The old-world charm of the plane-tree districts and the neon nights make for the most 'Shanghai-style' China.",
    attractions: [
      { name: "The Bund", en: "The Bund", blurb: "A riverside gallery of world architecture on the west bank; at night Lujiazui lights up across the water — Shanghai's most classic frame." },
      { name: "Lujiazui Skyline", en: "Lujiazui Skyline", blurb: "The futuristic trio of the Oriental Pearl, Shanghai Tower and Jin Mao; go up top to watch the city stretch to the horizon." },
      { name: "Wukang Road · Plane-Tree District", en: "Wukang Road", blurb: "Shaded plane trees and old villas left from the French Concession; cafes and boutiques tucked on corners, perfect for a city walk." },
      { name: "Yu Garden & City God Temple", en: "Yu Garden", blurb: "A Ming-era Jiangnan garden beside a lively temple market — rockeries, winding corridors and soup dumplings." },
      { name: "Xintiandi & Tianzifang", en: "Xintiandi & Tianzifang", blurb: "Shikumen lane houses turned into creative dining and shopping districts — new boutiques inside old brick walls." },
      { name: "West Bund Museum Mile", en: "West Bund", blurb: "A cluster of riverside museums where industrial relics became art landmarks — river breeze, runways and exhibitions." }
    ],
    packTitle: "Neon Riverside Pack",
    packItems: ["Shanghai 3-day route", "Bund & Lujiazui photo spots", "Plane-tree district walk", "Old-villa cafes", "River ferry tips", "A line of Shanghainese"]
  },

  chengdu: {
    routes: [{"no": "01", "theme": "Panda Time", "days": "1 day", "stops": ["Giant Panda Breeding Base", "Panda Tower"], "note": "Grab a morning ticket and go early when pandas are liveliest (book up to ~14 days out, daily limit); wander the city after lunch."}, {"no": "02", "theme": "Slow Lanes", "days": "1 day", "stops": ["Kuanzhai Alleys", "Jinli", "Wuhou Shrine"], "note": "Covered-bowl tea and ear-cleaning in the Kuanzhai Alleys, Three Kingdoms traces at Wuhou Shrine and Jinli, open-air tea in People's Park."}, {"no": "03", "theme": "Nearby Wonders", "days": "1 day", "stops": ["Leshan Giant Buddha", "Dujiangyan"], "note": "See the world's largest carved Buddha at Leshan, or the 2,000-year-old waterworks of Dujiangyan."}],
    city: "Chengdu", cityEn: "Chengdu", region: "Southwest · Bashu",
    tagline: "A city that turns daily life into a holiday",
    days: "3–4 days", season: "Best in spring & autumn",
    intro: "A city that turns daily life into a holiday. Covered-bowl tea, hotpot, pandas and greenways — the pace is so slow you won't want to rush. Chengdu's charm isn't in its sights, but in its ease.",
    attractions: [
      { name: "Giant Panda Breeding Base", en: "Panda Base", blurb: "Watch adorable giant pandas munch bamboo and tumble about in the early morning — the earlier you go, the more active they are." },
      { name: "Kuanzhai Alley", en: "Kuanzhai Alley", blurb: "Qing-dynasty lanes turned leisure district — tea houses, ear-cleaning and snacks, the model of laid-back old Chengdu." },
      { name: "Jinli & Wuhou Shrine", en: "Jinli & Wuhou Shrine", blurb: "A Three Kingdoms-themed old street and shrine — red lanterns, opera stages and chuan-chuan skewers." },
      { name: "People's Park · Heming Teahouse", en: "People's Park Teahouse", blurb: "Bamboo chairs, covered-bowl tea, ear-cleaning and mahjong — the most authentic Chengdu afternoon." },
      { name: "Dujiangyan", en: "Dujiangyan", blurb: "An ancient irrigation marvel still working after 2,000+ years; the Min River splits where engineering meets landscape. (Nearby)" },
      { name: "Du Fu Thatched Cottage", en: "Du Fu Thatched Cottage", blurb: "A garden built on the poet-sage's former home — bamboo groves, flowing water and quiet poetry." }
    ],
    packTitle: "Lazy Alley Flavor Pack",
    packItems: ["Chengdu 3-day route", "Panda base off-peak guide", "Hole-in-the-wall eatery list", "Tea house picks", "Hotpot ordering guide", "A line of Sichuan dialect"]
  },

  chongqing: {
    routes: [{"no": "01", "theme": "Magic Mountain City", "days": "1 day", "stops": ["Liziba Monorail", "Hongyadong", "Liberation Monument"], "note": "Watch the monorail thread through a tower block, catch Hongyadong's Spirited-Away night view at dusk, and eat your way around Liberation Monument."}, {"no": "02", "theme": "Two Rivers by Night", "days": "1 day", "stops": ["Yangtze Cableway", "Yikeshu Lookout", "Qiansimen Bridge"], "note": "Ride the Yangtze cableway across the river, then look down on the city's sea of lights from Yikeshu on Nanshan."}, {"no": "03", "theme": "Wulong Wonders", "days": "1 day", "stops": ["Wulong Three Natural Bridges", "Fairy Mountain"], "note": "A filming location for 'Curse of the Golden Flower' and 'Transformers' — karst sinkholes and chasms on a giant scale."}],
    city: "Chongqing", cityEn: "Chongqing", region: "Southwest · Mountain City",
    tagline: "An 8D city stacked between mountains and rivers",
    days: "3–4 days", season: "Spring & autumn (avoid the heat)",
    intro: "An 8D fantasy city built between mountains and rivers. Monorails through buildings, cableways over the water, a galaxy of night views, and spicy hotpot as intense as the layered streets.",
    attractions: [
      { name: "Hongyadong", en: "Hongyadong", blurb: "Stilted houses built into the cliff, brilliantly lit at night — a Miyazaki-like mountain-city landmark." },
      { name: "Liziba Monorail Through a Building", en: "Liziba Monorail", blurb: "A train running straight through a residential building — the fantasy city's signature scene." },
      { name: "Yangtze Cableway", en: "Yangtze Cableway", blurb: "A cable car across the Yangtze, with aerial views over the two rivers and four banks." },
      { name: "Jiefangbei · Bayi Food Street", en: "Jiefangbei", blurb: "The downtown landmark and snack hub — home turf of hotpot, xiaomian and skewers." },
      { name: "Nanshan One-Tree Viewpoint", en: "Nanshan Viewpoint", blurb: "The best spot for the full night panorama of the Yuzhong peninsula." },
      { name: "Ciqikou Old Town", en: "Ciqikou", blurb: "A thousand-year-old town by the Jialing River — flagstone streets, fried twists and tea houses." }
    ],
    packTitle: "Mountain City Night Pack",
    packItems: ["Chongqing 3-day route", "Hotpot ordering guide", "Night-view photo spots", "Monorail experience route", "Mountain-city stairway picks", "A line of Chongqing dialect"]
  },

  xian: {
    routes: [{"no": "01", "theme": "Terracotta & Tombs", "days": "1 day", "stops": ["Terracotta Army", "Huaqing Palace"], "note": "The thousand-strong Terracotta Army in the morning (book 7 days ahead, up to 10 in peak season), then the Lishan hot springs of Huaqing Palace."}, {"no": "02", "theme": "Tang Splendor", "days": "1 day", "stops": ["Big Wild Goose Pagoda", "Great Tang All Day Mall", "Shaanxi History Museum"], "note": "The Big Wild Goose Pagoda and the dazzling lights of the Tang mall, plus Zhou-to-Tang treasures at the Shaanxi History Museum (reserve ahead)."}, {"no": "03", "theme": "City Wall Ride", "days": "1 day", "stops": ["Xi'an City Wall", "Bell & Drum Towers", "Muslim Quarter"], "note": "Cycle a full loop of the Ming city wall, the Bell and Drum Towers by night, and a feast through the Muslim Quarter."}],
    city: "Xi'an", cityEn: "Xi'an", region: "Northwest · Ancient Capital",
    tagline: "Thirteen dynasties beneath a single city wall",
    days: "2–3 days", season: "Best in spring & autumn",
    intro: "A 13-dynasty ancient capital — dynasties buried below, city walls standing above. From the Terracotta Army to Tang-style night tours, this is the most direct gateway into Chinese history.",
    attractions: [
      { name: "Terracotta Army", en: "Terracotta Army", blurb: "An underground army of thousands — a miracle of world archaeology, leaving you speechless. (Nearby, Lintong)" },
      { name: "Xi'an City Wall", en: "City Wall", blurb: "China's most complete ancient city wall; cycle a full loop, most beautiful at sunset." },
      { name: "Big Wild Goose Pagoda · Tang Everbright City", en: "Big Wild Goose Pagoda", blurb: "A Tang-era pagoda and a Tang-themed district — night lights, Tang costumes and fountains take you back to Chang'an." },
      { name: "Muslim Quarter", en: "Muslim Quarter", blurb: "A lively halal food street — heaven for roujiamo, paomo and grilled meats." },
      { name: "Bell & Drum Towers", en: "Bell & Drum Towers", blurb: "Ming-era landmarks at the heart of the old city, brilliantly lit at night." },
      { name: "Shaanxi History Museum", en: "Shaanxi History Museum", blurb: "Understand the Zhou, Qin, Han and Tang in one museum — book ahead." }
    ],
    packTitle: "Chang'an Old Dream Pack",
    packItems: ["Xi'an 2-day route", "Terracotta Army visiting flow", "City-wall cycling guide", "Muslim Quarter food list", "Tang-style night-tour picks", "A line of Shaanxi dialect"]
  },

  zhangjiajie: {
    routes: [{"no": "01", "theme": "Peaks of Wonder", "days": "1 day", "stops": ["Bailong Elevator", "Yuanjiajie", "Tianzi Mountain"], "note": "Ride the Bailong Elevator up to the 'Avatar' floating peaks and Tianzi Mountain, king of the stone forest."}, {"no": "02", "theme": "Canyon Air", "days": "1 day", "stops": ["Huangshizhai", "Golden Whip Stream", "Fenghuang Old Town"], "note": "Survey the peaks from Huangshizhai, hike the forest oxygen-bar of Golden Whip Stream, and end with Fenghuang's riverside lights."}, {"no": "03", "theme": "Above the Clouds", "days": "1 day", "stops": ["Tianmen Mountain", "Tianmen Cave"], "note": "West-side glass walkways and 999 steps up to Tianmen Cave; cableway under upgrade — check the latest notice before you go."}],
    city: "Zhangjiajie", cityEn: "Zhangjiajie", region: "Central China · Wonder Peaks",
    tagline: "A vertical ink painting of three thousand peaks",
    days: "3–5 days", season: "Spring & autumn (avoid the rainy season)",
    intro: "Three thousand quartz-sandstone peaks rise from the ground, mist flowing between them like a vertical ink scroll — the inspiration for the floating mountains of Avatar.",
    attractions: [
      { name: "National Forest Park", en: "National Forest Park", blurb: "Yuanjiajie, Golden Whip Stream and the Bailong Elevator — the core of the peak forest and cloud sea." },
      { name: "Tianmen Mountain · Glass Skywalk", en: "Tianmen Mountain", blurb: "99 hairpin bends, Tianmen Cave and a cliffside glass skywalk — thrilling and magnificent." },
      { name: "Yuanjiajie · Avatar Mountain", en: "Avatar Mountain", blurb: "The filming inspiration for the floating peaks — pure magic when the clouds rise." },
      { name: "Golden Whip Stream", en: "Golden Whip Stream", blurb: "A clear-stream trail between peaks — greenery, monkey troops and flowing water." },
      { name: "Tianzi Mountain", en: "Tianzi Mountain", blurb: "A high point for the full peak-forest panorama and cloud-sea sunrise." },
      { name: "Grand Canyon Glass Bridge", en: "Grand Canyon Glass Bridge", blurb: "A transparent bridge across the canyon — the abyss right beneath your feet." }
    ],
    packTitle: "Cloud-Sea Ascent Pack",
    packItems: ["Zhangjiajie 3-day route", "Forest park route flow", "Tianmen Mountain guide", "Best times & spots for the cloud sea", "Cable-car & skywalk tips", "A line of west-Hunan dialect"]
  },

  hangzhou: {
    routes: [{"no": "01", "theme": "West Lake Ten Views", "days": "1 day", "stops": ["Broken Bridge", "Su Causeway", "Leifeng Pagoda"], "note": "Stroll the lake past Broken Bridge, Su Causeway and the Three Pools, then climb Leifeng Pagoda for the sunset glow."}, {"no": "02", "theme": "Zen & Tea", "days": "1 day", "stops": ["Lingyin Temple", "Feilai Peak", "Longjing Tea Plantation"], "note": "The ancient Lingyin Temple and Feilai Peak carvings, then a cup of pre-Qingming Longjing among the tea terraces."}, {"no": "03", "theme": "Canal & Song Dynasty", "days": "1 day", "stops": ["Grand Canal", "Songcheng", "Hefang Street"], "note": "A lantern-lit canal cruise, the Romance of the Song Dynasty show at Songcheng, and Hangzhou snacks on Hefang Street."}],
    city: "Hangzhou", cityEn: "Hangzhou", region: "East China · Jiangnan",
    tagline: "Paradise on earth, painted in mist and tea",
    days: "2–4 days", season: "Best in spring & autumn",
    intro: "'Above is heaven, below are Suzhou and Hangzhou.' West Lake makes the Jiangnan of classical poetry real — tea hills, ancient temples and canals, gentle in every light.",
    attractions: [
      { name: "West Lake", en: "West Lake", blurb: "Spring dawn on Su Causeway, snow on Broken Bridge, moon over three pools — a painting in every season and weather." },
      { name: "Lingyin Temple · Feilai Peak", en: "Lingyin Temple", blurb: "A thousand-year temple and cliffside grotto carvings — incense, woods and springs." },
      { name: "Longjing Tea Hills · Meijiawu", en: "Longjing Tea Fields", blurb: "Tiered rows of tea; pick leaves in spring and sip a pre-Qingming Longjing." },
      { name: "Xixi Wetland", en: "Xixi Wetland", blurb: "A reed-and-water network on the city's edge; glide through by rowboat, slow as another time." },
      { name: "Hefang Street · Southern Song Imperial Way", en: "Hefang Street", blurb: "A retro commercial street — old brands, handicrafts and snacks." },
      { name: "Leifeng Pagoda", en: "Leifeng Pagoda", blurb: "Climb for a full lake view from the south shore — best at dusk." }
    ],
    packTitle: "Jiangnan Slow-Travel Pack",
    packItems: ["West Lake half-day route", "Longjing tea-hill experience", "Rainy-day plans", "Photogenic bridges & lanes", "Tea house picks", "A Jiangnan-style fortune line"]
  },

  lhasa: {
    routes: [{"no": "01", "theme": "Sacred Heart", "days": "1 day", "stops": ["Potala Palace", "Jokhang Temple", "Barkhor Street"], "note": "The red-and-white walls of Potala Palace (book 7 days ahead, limited entry), then the pilgrim circuit of Jokhang and Barkhor Street."}, {"no": "02", "theme": "Holy Lakes", "days": "1 day", "stops": ["Yamdrok Lake", "Karola Glacier"], "note": "Cross the pass to Yamdrok Lake, turquoise set among snow peaks, with the Karola Glacier in the distance."}, {"no": "03", "theme": "Plateau Wild", "days": "1 day", "stops": ["Namtso Lake", "Nyenchen Tanglha"], "note": "Holy Namtso Lake and the Nyenchen Tanglha snow range — starry skies and high pastures (mind the altitude)."}],
    city: "Lhasa", cityEn: "Lhasa", region: "Tibetan Plateau · Snowland",
    tagline: "The city of sunlight, closest to the sky",
    days: "3–5 days", season: "May–October",
    intro: "The 'City of Sunlight' at 3,600 m. Under a sky unreally blue, the Potala Palace stands tall and pilgrims circle day and night — the air itself carries the weight of faith.",
    attractions: [
      { name: "Potala Palace", en: "Potala Palace", blurb: "A snowland palace-fortress built on Red Hill — the pinnacle of Tibetan architecture; book ahead." },
      { name: "Jokhang Temple", en: "Jokhang Temple", blurb: "Tibetan Buddhism's holiest temple; the prostrating pilgrims out front are deeply moving." },
      { name: "Barkhor Street", en: "Barkhor Street", blurb: "The pilgrim circuit and old-town market around the Jokhang — butter, Tibetan crafts and crowds." },
      { name: "Norbulingka", en: "Norbulingka", blurb: "The Dalai Lama's summer garden palace — Tibetan pavilions among trees and flowers." },
      { name: "Namtso Lake", en: "Namtso Lake", blurb: "A sacred lake at 4,700 m — reflected snow peaks and a vast night sky. (Nearby)" },
      { name: "Sera Monastery Debates", en: "Sera Monastery", blurb: "Afternoon debates with clapping monks — a living lesson in Tibetan Buddhist study." }
    ],
    packTitle: "Highland Sunlight Pack",
    packItems: ["Lhasa 3-day route", "Altitude adjustment tips", "Barkhor Street walk", "Best time to watch the sunlit peaks", "Sweet-tea house picks", "A line of Tibetan greeting"]
  },

  nanjing: {
    routes: [{"no": "01", "theme": "Zhongshan Tombs", "days": "1 day", "stops": ["Sun Yat-sen Mausoleum", "Ming Xiaoling Mausoleum", "Meiling Palace"], "note": "Climb the grand stairway of Sun Yat-sen's Mausoleum, walk the stone-elephant Sacred Way at Ming Xiaoling, and see the 'necklace' of plane trees at Meiling Palace."}, {"no": "02", "theme": "Qinhuai Nights", "days": "1 day", "stops": ["Confucius Temple", "Qinhuai River", "Laomendong"], "note": "The Confucius Temple and old imperial exam hall, a lantern-boat cruise on the Qinhuai River, and the lively lanes of Laomendong."}, {"no": "03", "theme": "Ming City Traces", "days": "1 day", "stops": ["Zhonghua Gate", "Presidential Palace", "Librairie Avant-Garde"], "note": "Climb the Zhonghua Gate barbican, trace Republican-era history at the Presidential Palace, and browse the artsy Librairie Avant-Garde."}],
    city: "Nanjing", cityEn: "Nanjing", region: "East China · Six Dynasties",
    tagline: "Six dynasties of mist, water and plane trees",
    days: "2–3 days", season: "Spring & autumn (plane-tree season)",
    intro: "The misty water of a six-dynasty capital, hidden in plane-tree-shaded streets and the lantern-lit oar sounds of the Qinhuai. City walls, mausoleums and museums — history layered upon history.",
    attractions: [
      { name: "Confucius Temple · Qinhuai River", en: "Confucius Temple & Qinhuai River", blurb: "The old-city heart amid lantern light and oar sounds — a night pleasure-boat is the most atmospheric." },
      { name: "Sun Yat-sen Mausoleum", en: "Sun Yat-sen Mausoleum", blurb: "A grand mausoleum on Zhongshan's southern slope — 392 steps rising through pines and cypress." },
      { name: "Ming Xiaoling Mausoleum", en: "Ming Xiaoling", blurb: "The Ming founding emperor's tomb — a stone-figure spirit way and autumn ginkgo." },
      { name: "Ming City Wall · Taicheng", en: "City Wall", blurb: "The world's longest surviving brick-and-stone city wall; climb Taicheng for Xuanwu Lake." },
      { name: "Nanjing Museum", en: "Nanjing Museum", blurb: "One of China's top museums — from prehistory to the Republic in a single visit." },
      { name: "Librairie Avant-Garde", en: "Librairie Avant-Garde", blurb: "A famous bookstore in a former air-raid shelter — Nanjing's literary landmark." }
    ],
    packTitle: "Six Dynasties Misty Water Pack",
    packItems: ["Nanjing 2-day route", "Ming city-wall flow", "Museum highlights", "Plane-tree avenue spots", "Qinhuai night-cruise guide", "A line of Nanjing dialect"]
  },

  guangzhou: {
    routes: [{"no": "01", "theme": "Old Canton", "days": "1 day", "stops": ["Shangxiajiu Arcades", "Chen Clan Ancestral Hall", "Shamian Island"], "note": "Arcade streets of Shangxiajiu, Lingnan wood-and-stone carving at the Chen Clan Hall, and a stroll among Shamian's European architecture."}, {"no": "02", "theme": "Zhujiang New Town", "days": "1 day", "stops": ["Canton Tower", "Pearl River Cruise", "Huacheng Square"], "note": "Up the 'slim waist' Canton Tower, the new axis at Huacheng Square, and both banks aglow on a Pearl River cruise."}, {"no": "03", "theme": "Lingnan Charm", "days": "1 day", "stops": ["Yuexiu Park", "Beijing Road", "Yongqingfang"], "note": "The Five Rams legend at Yuexiu Park, the thousand-year-old Beijing Road, and intangible-heritage cool in Yongqingfang's arcades."}],
    city: "Guangzhou", cityEn: "Guangzhou", region: "South China · Lingnan",
    tagline: "A thousand-year trading port over morning tea",
    days: "2–3 days", season: "Best in autumn & winter",
    intro: "A thousand-year trading port where street life meets the modern. Morning tea of one pot and two dishes, the street life of arcade-lined lanes, and the Pearl River nights with the Canton Tower's glow weave the most vivid Lingnan.",
    attractions: [
      { name: "Shamian Island", en: "Shamian Island", blurb: "A European-flavored island by the Pearl River — plane trees, old villas and cafes." },
      { name: "Chen Clan Ancestral Hall", en: "Chen Clan Ancestral Hall", blurb: "A showcase of Lingnan decorative arts — astonishing wood, brick and plaster carving." },
      { name: "Yongqingfang · Xiguan", en: "Yongqingfang", blurb: "Old Xiguan arcades renewed — sliding gates, heritage brands and trendy shops." },
      { name: "Canton Tower", en: "Canton Tower", blurb: "The riverside city landmark — go up top or watch it light up from the riverbank." },
      { name: "Shangxiajiu · Beijing Road", en: "Shangxiajiu", blurb: "Arcade shopping streets — sweet soups, rice rolls and Cantonese dim sum." },
      { name: "Baiyun Mountain", en: "Baiyun Mountain", blurb: "The city's green lung — climb for a view over the whole city." }
    ],
    packTitle: "Morning Tea Pack",
    packItems: ["Guangzhou 2-day route", "Morning-tea house list", "Old Xiguan walk", "Sweet-soup dessert map", "Pearl River night spots", "A line of Cantonese"]
  },

  guilin: {
    routes: [{"no": "01", "theme": "Li River Ink", "days": "1 day", "stops": ["Li River Bamboo Raft", "Xingping Town", "Nine-Horse Mural Hill"], "note": "Drift the Li River by bamboo raft; the Xingping stretch is the scene on the ¥20 note, and Nine-Horse Hill unrolls like an ink scroll."}, {"no": "02", "theme": "Yangshuo Countryside", "days": "1 day", "stops": ["Yangshuo West Street", "Yulong River", "Ten-Mile Gallery"], "note": "Bamboo rafts and cycling along the Yulong River, West Street by night, and the Impression Liu Sanjie outdoor show."}, {"no": "03", "theme": "Longji Terraces", "days": "1 day", "stops": ["Longji Rice Terraces", "Huangluo Yao Village"], "note": "The sky-ladder Longji rice terraces, the long-haired Yao women, and sunrise over a sea of clouds."}],
    city: "Guilin", cityEn: "Guilin", region: "South China · Landscapes",
    tagline: "The finest landscape under heaven",
    days: "3–4 days", season: "April–October",
    intro: "'Guilin's scenery is the finest under heaven.' Karst peaks spread along the Li River — bamboo rafts, fishing lights and rice terraces bring the spirit of Chinese landscape painting to life.",
    attractions: [
      { name: "Li River", en: "Li River", blurb: "The golden waterway from Guilin to Yangshuo — Nine-Horse Hill and Yellow Cloth reflections; the scene on the 20-yuan note is right here." },
      { name: "Yangshuo · Yulong River", en: "Yangshuo", blurb: "Bamboo rafting, countryside cycling and lively West Street — slow life among hills and water." },
      { name: "Longji Rice Terraces", en: "Longji Rice Terraces", blurb: "Tiered terraces winding up the mountains, ever-changing with mist and season." },
      { name: "Elephant Trunk Hill", en: "Elephant Trunk Hill", blurb: "Guilin's emblem — a natural stone elephant standing by the river." },
      { name: "Silver Cave Karst Caves", en: "Karst Caves", blurb: "Stalactite wonders in karst caves, dreamlike under the lights." },
      { name: "Xingping Old Town", en: "Xingping", blurb: "A thousand-year town on the Li River's finest stretch — old streets and a fishing village." }
    ],
    packTitle: "Ink-Wash Boating Pack",
    packItems: ["Guilin 3-day route", "Li River boating segments", "Yangshuo cycling route", "Longji rice-terrace guide", "Rice-noodle breakfast picks", "A line of Guilin dialect"]
  },

  harbin: {
    routes: [{"no": "01", "theme": "Ice City Classics", "days": "3 days", "stops": ["Central Street", "St. Sophia Cathedral", "Sun Island Snow Expo", "Ice-Snow World"], "note": "City strolls plus an evening at Ice-Snow World — an easy first visit and family-friendly, with simple food, stays and transport."}, {"no": "02", "theme": "Snow-Country Hideaway", "days": "4 days", "stops": ["Rime-Frost Riverbank", "Yabuli Ski Resort", "Snow Town"], "note": "Skiing plus the red lanterns of Snow Town's cabins — a golden route for rime-frost photography and snow-sports lovers."}, {"no": "03", "theme": "The Far North", "days": "5 days", "stops": ["Arctic Village · Mohe"], "note": "Head all the way north to China's northernmost point — chase 'the north' in winter, maybe the aurora in summer; an expedition for the dedicated."}],
    city: "Harbin", cityEn: "Harbin", region: "Northeast · Ice & Snow",
    tagline: "A city that glows through the northern winter",
    days: "2–4 days", season: "December–February (ice & snow season)",
    intro: "China's northernmost provincial capital, a city of ice that glows in winter. European-style old buildings, the snow and ice of the Songhua River, and the warmth of the Northeast make a one-of-a-kind northern fairytale.",
    attractions: [
      { name: "Ice and Snow World", en: "Ice and Snow World", blurb: "A giant winter-only ice-sculpture park, dazzling at night — the soul of the Northeastern winter." },
      { name: "Central Street", en: "Central Street", blurb: "A century-old cobblestone pedestrian street — Baroque architecture, Modern ice pops and Russian flavor." },
      { name: "St. Sophia Cathedral", en: "St. Sophia Cathedral", blurb: "A red-brick, green-domed Byzantine church — Harbin's calling card." },
      { name: "Songhua River · Sun Island", en: "Songhua River", blurb: "Cool riverside in summer, ice play in winter." },
      { name: "Laodaowai Chinese Baroque", en: "Laodaowai", blurb: "A blended East-West old district — street life and architecture mixed together." },
      { name: "Yabuli Ski Resort", en: "Yabuli Ski Resort", blurb: "One of China's top ski resorts. (Nearby)" }
    ],
    packTitle: "Ice & Snow Fairytale Pack",
    packItems: ["Harbin 2-day route", "Ice and Snow World tips", "Central Avenue flow", "Cold-weather outfit advice", "Northeastern food list", "A line of Northeastern dialect"]
  },

  shangrila: {
    city: "Shangri-La", cityEn: "Shangri-La", region: "Northwest Yunnan · Snowland",
    tagline: "The hidden plateau where time slows down",
    days: "3–5 days", season: "March–June / September–October",
    intro: "A highland haven in northwest Yunnan, where snow peaks, meadows, Tibetan temples and pastures stretch to the horizon. Crisp air and an extremely slow pace — the place from Lost Horizon that quiets you down.",
    attractions: [
      { name: "Songzanlin Monastery", en: "Songzanlin Monastery", blurb: "Yunnan's largest Tibetan Buddhist monastery, known as the 'Little Potala'." },
      { name: "Pudacuo National Park", en: "Pudacuo Park", blurb: "Highland lakes, wetlands and primeval forest — Bita Lake and Shudu Lake like mirrors." },
      { name: "Dukezong Old Town", en: "Dukezong Old Town", blurb: "A moonlit Tibetan old town, with the world's largest prayer wheel on the hilltop." },
      { name: "Napa Lake · Yila Meadow", en: "Napa Lake", blurb: "A seasonal highland lake and meadow — grazing herds and migrating birds." },
      { name: "Meili Snow Mountain · Feilai Temple", en: "Meili Snow Mountain", blurb: "Wait for the golden sunrise — the sacred awe of Kawagebo. (Nearby)" },
      { name: "Tiger Leaping Gorge", en: "Tiger Leaping Gorge", blurb: "A world-class canyon carved by the Jinsha River — a hiking mecca. (Nearby)" }
    ],
    packTitle: "Letter from the Snow Mountains Pack",
    packItems: ["Shangri-La 3-day route", "Altitude adjustment tips", "Pudacuo route flow", "Best time for the golden-peak sunrise", "Pasture & old-town picks", "A line of Tibetan blessing"]
  },

  wuhan: {
    city: "Wuhan", cityEn: "Wuhan", region: "Central China · Great River",
    tagline: "Great river, great lakes, great Wuhan",
    days: "2–3 days", season: "Spring cherry blossoms · crisp autumn",
    intro: "'Great river, great lakes, great Wuhan.' The Yangtze and Han rivers meet here, Yellow Crane Tower overlooks the three towns, and hot-dry noodles open the morning — both the swagger of a port and the youth of its universities.",
    attractions: [
      { name: "Yellow Crane Tower", en: "Yellow Crane Tower", blurb: "A legendary tower by the Yangtze — climb to overlook the great river and the three towns." },
      { name: "East Lake Greenway", en: "East Lake", blurb: "China's largest urban lake — lakeside cycling greenways, cherry blossoms and lotus ponds." },
      { name: "Wuhan University", en: "Wuhan University", blurb: "Republican-era architecture and a cherry-blossom avenue — the top spot for spring blossoms." },
      { name: "Hubu Alley · Jianghan Road", en: "Hubu Alley", blurb: "A breakfast-snack street — hot-dry noodles, doupi and mianwo." },
      { name: "Yangtze River Bridge · Riverbank", en: "Yangtze River Bridge", blurb: "The first bridge over the Yangtze; watch sunset and ferries from the riverbank." },
      { name: "Hubei Provincial Museum", en: "Hubei Museum", blurb: "The Marquis Yi of Zeng bells and the Sword of Goujian — treasures of Chu civilization." }
    ],
    packTitle: "Great River Hot-Dry-Noodle Pack",
    packItems: ["Wuhan 2-day route", "Local breakfast food list", "Yellow Crane Tower & riverfront flow", "River-ferry guide", "Riverside photo spots", "A line of Wuhan dialect"]
  },
  "lijiang": {"city": "Lijiang", "cityEn": "Lijiang", "region": "Yunnan · Snow-Mountain Old Town", "tagline": "A romantic old town at the foot of a snow mountain", "days": "3–4 days", "season": "Best in spring & autumn", "intro": "Glaciers crowning Jade Dragon Snow Mountain, bridges and running water through the old town, the jade pools of Blue Moon Valley and the ancient Dongba script of the Naxi — Lijiang is a romantic old town beneath the snow peaks.", "attractions": [{"name": "Jade Dragon Snow Mountain", "en": "Jade Dragon Snow Mountain", "blurb": "The Naxi's sacred peak; a glacier cableway climbs to 4,500m, so acclimatise for the altitude."}, {"name": "Lijiang Old Town", "en": "Lijiang Old Town", "blurb": "A UNESCO-listed Naxi old town of Sifang Street, little bridges and running water."}, {"name": "Blue Moon Valley", "en": "Blue Moon Valley", "blurb": "Snowmelt gathered into jade-blue pools, curved like a crescent among the hills."}, {"name": "Shuhe Old Town", "en": "Shuhe Old Town", "blurb": "A quieter tea-horse town than Dayan — made for the slow life."}, {"name": "Lugu Lake", "en": "Lugu Lake", "blurb": "The matriarchal Mosuo homeland, a pure highland-lake hideaway."}, {"name": "Mu Mansion", "en": "Mu Mansion", "blurb": "The Naxi chieftain's palace — 'the Forbidden City of the south.'"}], "routes": [{"no": "01", "theme": "Old Town at a Stroll", "days": "1 day", "stops": ["Lijiang Old Town", "Sifang Street", "Mu Mansion"], "note": "Bridges and water through Sifang Street, the Mu chieftain's palace, and a panorama from Wangu Tower on Lion Hill."}, {"no": "02", "theme": "Snow Mountain & Glacier", "days": "1 day", "stops": ["Jade Dragon Snow Mountain", "Blue Moon Valley", "Impression Lijiang"], "note": "The glacier cableway up Jade Dragon (carry oxygen at altitude), the blue water of Blue Moon Valley and the outdoor show."}, {"no": "03", "theme": "Hidden Lakes", "days": "1–2 days", "stops": ["Shuhe Old Town", "Lugu Lake"], "note": "The quiet slow life of Shuhe, then the long trip out to the Mosuo matriarchal homeland at Lugu Lake."}], "packTitle": "Snow-Mountain Old Town Pack", "packItems": ["Lijiang 3-day route", "Old town walking map", "Jade Dragon altitude tips", "Naxi food list", "Blue Moon Valley photo spots", "Lugu Lake side-trip plan"]},
  "xiamen": {"city": "Xiamen", "cityEn": "Xiamen", "region": "Fujian · Island Garden by the Sea", "tagline": "A languid, romantic garden on the sea", "days": "2–3 days", "season": "Pleasant most of the year; best spring & autumn", "intro": "The international architecture of Gulangyu, the blue sea along the Ring Road, the artsy bustle of Shapowei and the Tan Kah Kee red of Jimei — Xiamen is a languid, romantic garden on the water.", "attractions": [{"name": "Gulangyu", "en": "Gulangyu", "blurb": "A car-free island of international architecture and pianos; ferry tickets sell online up to 10 days ahead, with none on the day."}, {"name": "Shapowei", "en": "Shapowei", "blurb": "An artsy district in a converted harbour, fishing boats moored below the twin towers."}, {"name": "Jimei School Village", "en": "Jimei School Village", "blurb": "Tan Kah Kee's grand school campus and the long seafront causeway."}, {"name": "Round-Island Road & Baicheng Beach", "en": "Round-Island Road & Baicheng Beach", "blurb": "A seaside cycling road of blue water and a gorgeous 'orange sea' sunrise."}, {"name": "Xiamen Botanical Garden", "en": "Xiamen Botanical Garden", "blurb": "A rainforest world and a desert cactus zone — a much-loved photo spot."}, {"name": "Xiamen University", "en": "Xiamen University", "blurb": "One of China's prettiest campuses, beside the Furong graffiti tunnel and Baicheng beach."}], "routes": [{"no": "01", "theme": "City & Street Life", "days": "1 day", "stops": ["Bashi Market", "Shapowei", "Yanwu Bridge"], "note": "Old Xiamen's Bashi market, the artsy Shapowei harbour, and a sea breeze across Yanwu Bridge at dusk."}, {"no": "02", "theme": "Romantic Island", "days": "1 day", "stops": ["Gulangyu", "Round-Island Road", "Baicheng Beach"], "note": "International architecture on Gulangyu (ferry tickets online up to 10 days ahead), then cycling the Ring Road by the sea."}, {"no": "03", "theme": "Where Hills Meet Sea", "days": "1 day", "stops": ["Botanical Garden", "Zhonggu Cableway", "Jimei School Village"], "note": "Rainforest at the Botanical Garden, a bird's-eye cableway, then the Tan Kah Kee architecture of Jimei."}], "packTitle": "Island Garden Pack", "packItems": ["Xiamen 2-day route", "Gulangyu ferry & timing", "Ring Road cycling map", "Xiamen snack list", "'Orange sea' sunrise spots", "Cafe & art picks"]},
  "kashgar": {"city": "Kashgar", "cityEn": "Kashgar", "region": "Xinjiang · The Living Silk Road", "tagline": "Where the Silk Road is still alive", "days": "2–3 days", "season": "Best May–October", "intro": "The earthen lanes of a thousand-year-old old city, the laden stalls of the Grand Bazaar, the carved wooden gateways of the Uyghur quarter and the snow peaks and ice lakes of the Pamirs — Kashgar is the Silk Road's Western Regions, still alive.", "attractions": [{"name": "Kashgar Old City", "en": "Kashgar Old City", "blurb": "A thousand-year-old earthen old town and cliffside dwellings — the Western Regions, still lived in."}, {"name": "Id Kah Mosque", "en": "Id Kah Mosque", "blurb": "One of China's largest mosques, the spiritual heart of the old city."}, {"name": "Grand Bazaar", "en": "Grand Bazaar", "blurb": "A Silk-Road market of dried fruit, carpets, copperware and instruments."}, {"name": "Karakul Lake", "en": "Karakul Lake", "blurb": "A high lake at 3,600m mirroring the Muztagh snow peak on the Pamir Plateau."}, {"name": "Pamir & Baisha Lake", "en": "Pamir & Baisha Lake", "blurb": "White-sand mountains and blue water beside the Karakoram Highway, under snow and glaciers."}, {"name": "Gaotai Dwellings", "en": "Gaotai Dwellings", "blurb": "Earthen homes built into the cliff — the memory of the old Uyghur quarter."}], "routes": [{"no": "01", "theme": "Old-City Lanes", "days": "1 day", "stops": ["Kashgar Old City", "Id Kah Mosque", "Century-Old Teahouse"], "note": "Wind through the earthen old town and Gaotai dwellings, Id Kah Square and slow hours in a hundred-year-old teahouse."}, {"no": "02", "theme": "Silk-Road Market", "days": "1 day", "stops": ["Grand Bazaar", "Livestock Bazaar", "Craft Street"], "note": "Hunt dried fruit, carpets and copperware in the Grand Bazaar, and the Sunday roar of the livestock market."}, {"no": "03", "theme": "Pamir Plateau", "days": "1–2 days", "stops": ["Baisha Lake", "Karakul Lake", "Muztagh Ata"], "note": "Up the Karakoram Highway onto the Pamirs, Baisha and Karakul lakes mirroring snow peaks (mind the altitude)."}], "packTitle": "Living Silk Road Pack", "packItems": ["Kashgar 2–3 day route", "Old city walking map", "Pamir day-trip plan", "Bazaar bargaining tips", "Local food list", "Permit & altitude notes"]},
  "datong": {"city": "Datong", "cityEn": "Datong", "region": "Shanxi · Grottoes & Frontier Capital", "tagline": "Northern Wei Buddhas and frontier-capital weight", "days": "2 days", "season": "Best in summer & autumn", "intro": "The thousand Buddhas of the Yungang Grottoes, the cliff-hung beams of the Hanging Temple, the great Liao-Jin halls of Huayan Temple and the four-square old city wall — Datong keeps both the Buddhist splendour of the Northern Wei and the weight of a frontier capital.", "attractions": [{"name": "Yungang Grottoes", "en": "Yungang Grottoes", "blurb": "Northern Wei rock-cut grottoes of a thousand Buddhas; the open-air giant in Cave 20 is a UNESCO treasure."}, {"name": "Hanging Temple", "en": "Hanging Temple", "blurb": "A timber marvel pinned to the cliff; just 2,475 climb-up tickets a day, booked ahead with a face check."}, {"name": "Datong City Wall", "en": "Datong City Wall", "blurb": "Four-square, massive Ming walls tracing the old capital's outline by night."}, {"name": "Huayan Temple", "en": "Huayan Temple", "blurb": "A great Liao-Jin Buddhist hall, home to the smiling, palms-together Bodhisattva."}, {"name": "Nine-Dragon Wall", "en": "Nine-Dragon Wall", "blurb": "China's largest and earliest surviving glazed nine-dragon screen."}, {"name": "Mount Heng", "en": "Mount Heng", "blurb": "The Northern Sacred Mountain, the steep Taoist peak the Hanging Temple leans against."}], "routes": [{"no": "01", "theme": "Buddhist Grottoes", "days": "1 day", "stops": ["Yungang Grottoes"], "note": "Half a day among the Northern Wei thousand-Buddhas of Yungang; the open-air giant of Cave 20 is the showpiece."}, {"no": "02", "theme": "Cliff-Hung Wonder", "days": "1 day", "stops": ["Hanging Temple", "Mount Heng"], "note": "The cliff-pinned beams of the Hanging Temple (2,475 tickets a day, face check-in), then a climb up Mount Heng."}, {"no": "03", "theme": "Old-City Traces", "days": "1 day", "stops": ["Datong City Wall", "Huayan Temple", "Nine-Dragon Wall"], "note": "Walk the city wall, the great Liao-Jin halls of Huayan Temple, and the Nine-Dragon Wall in the old town."}], "packTitle": "Northern Wei Capital Pack", "packItems": ["Datong 2-day route", "Yungang ticket & flow", "Hanging Temple booking tips", "Shanxi food list", "City wall night spots", "Mount Heng add-on"]},
  "kunming": {"city": "Kunming", "cityEn": "Kunming", "region": "Yunnan · The Spring City", "tagline": "Eternal spring, and the gateway to Yunnan", "days": "2–3 days", "season": "Mild year-round", "intro": "Spring-like weather all year, red-billed gulls wheeling over Dianchi Lake, the karst wonder of the Stone Forest and the colour of its ethnic villages — Kunming is a gentle Spring City and the gateway to Yunnan.", "attractions": [{"name": "Dianchi Lake & Haigeng Dam", "en": "Dianchi Lake & Haigeng Dam", "blurb": "A highland pearl where thousands of red-billed gulls winter and wheel."}, {"name": "Stone Forest", "en": "Stone Forest", "blurb": "The karst 'greatest wonder under heaven' of sword-like pinnacles and the Ashima legend."}, {"name": "Cuihu Park", "en": "Cuihu Park", "blurb": "A city lake and its winter date with the gulls — Kunming's living room."}, {"name": "Yunnan Ethnic Villages", "en": "Yunnan Ethnic Villages", "blurb": "A showcase of the twenty-odd peoples native to Yunnan."}, {"name": "Jinma-Biji Arches & Guandu Town", "en": "Jinma-Biji Arches & Guandu Town", "blurb": "Old Kunming's memorial arches and an old town of street snacks."}, {"name": "Yunnan University & Wenlin Street", "en": "Yunnan University & Wenlin Street", "blurb": "A Republican-era campus and an artsy quarter of coffee and books."}], "routes": [{"no": "01", "theme": "Spring-City Waters", "days": "1 day", "stops": ["Dianchi & Haigeng Dam", "Cuihu Park", "Yunnan University"], "note": "Red-billed gulls over winter Dianchi, feeding gulls at Cuihu, and the artsy lanes around Yunnan University and Wenlin Street."}, {"no": "02", "theme": "Stone Forest Wonder", "days": "1 day", "stops": ["Stone Forest", "Naigu Stone Forest"], "note": "The karst 'greatest wonder' of the Stone Forest, the Ashima legend and its sword-peaks."}, {"no": "03", "theme": "Ethnic Colour", "days": "1 day", "stops": ["Ethnic Villages", "Jinma-Biji Arches", "Guandu Old Town"], "note": "Twenty-odd peoples at the Ethnic Villages, the old arches, and the street life of Guandu Old Town."}], "packTitle": "Spring City Pack", "packItems": ["Kunming 2-day route", "Stone Forest day plan", "Gull-watching spots & timing", "Yunnan rice-noodle list", "Old town & arch walks", "Gateway-to-Yunnan tips"]},
  "shenzhen": {"city": "Shenzhen", "cityEn": "Shenzhen", "region": "Guangdong · China's Youngest Metropolis", "tagline": "From fishing village to tech capital in 40 years", "days": "2–3 days", "season": "Warm; best in autumn & winter", "intro": "The 40-year miracle from fishing village to tech capital, a forest of glass towers, theme-park fun and the blue water of Dapeng Bay — Shenzhen is young, modern and full of energy.", "attractions": [{"name": "Shenzhen Skyline", "en": "Shenzhen Skyline", "blurb": "A tech forest of glass towers led by the Ping An Finance Centre."}, {"name": "Window of the World", "en": "Window of the World", "blurb": "A theme park of world landmarks in miniature — the globe in a day."}, {"name": "Shenzhen Bay", "en": "Shenzhen Bay", "blurb": "A seaside boardwalk and mangrove wetland for cycling, city-sea views and migrating birds."}, {"name": "Dapeng Fortress", "en": "Dapeng Fortress", "blurb": "A Ming coastal-defence town and the Jiaochangwei bay — slow time between hills and sea."}, {"name": "Huaqiangbei", "en": "Huaqiangbei", "blurb": "'China's No.1 electronics street,' a hub of makers and gadgets."}, {"name": "Wutong Mountain", "en": "Wutong Mountain", "blurb": "Shenzhen's highest peak, with hill-and-sea and skyline views from the top."}], "routes": [{"no": "01", "theme": "Tech Metropolis", "days": "1 day", "stops": ["Ping An Finance Centre", "Shenzhen Bay", "Huaqiangbei"], "note": "The cloud-deck of the Ping An tower, city-sea views at Shenzhen Bay, and 'China's No.1 electronics street.'"}, {"no": "02", "theme": "Theme Parks", "days": "1 day", "stops": ["Window of the World", "Happy Valley", "Splendid China"], "note": "World landmarks in miniature at Window of the World, then the rides of Happy Valley."}, {"no": "03", "theme": "Hills & Sea", "days": "1 day", "stops": ["Dapeng Fortress", "Jiaochangwei", "Wutong Mountain"], "note": "The old Dapeng town and Jiaochangwei bay, then a climb up Wutong for the hill-and-sea city."}], "packTitle": "Young Metropolis Pack", "packItems": ["Shenzhen 2-day route", "Skyline observation decks", "Shenzhen Bay cycling map", "Cantonese food list", "Theme-park planning", "Dapeng coast add-on"]},
  "suzhou": {"city": "Suzhou", "cityEn": "Suzhou", "region": "Jiangsu · Gardens & Water Towns", "tagline": "Jiangnan grace, written to its finest", "days": "2–3 days", "season": "Best in spring & autumn", "intro": "Classical gardens where every step reframes the view, white-walled water towns, the fineness of Kesi silk and Su embroidery, and the oar-songs of Pingjiang Road — Suzhou writes Jiangnan grace to its very finest.", "attractions": [{"name": "Humble Administrator's Garden", "en": "Humble Administrator's Garden", "blurb": "The first of Jiangnan's gardens — a masterclass in framed, shifting views; UNESCO listed."}, {"name": "Lion Grove Garden", "en": "Lion Grove Garden", "blurb": "A maze of strange Taihu rockeries, a grotto-world of stone."}, {"name": "Pingjiang Road & Shantang Street", "en": "Pingjiang Road & Shantang Street", "blurb": "Authentic water-lanes of little bridges and waterside homes."}, {"name": "Hanshan Temple", "en": "Hanshan Temple", "blurb": "The thousand-year temple of the famous midnight bell beyond Gusu's walls."}, {"name": "Tongli Water Town", "en": "Tongli Water Town", "blurb": "A Jiangnan water town nearby — rowing boats and the antique Tuisi Garden."}, {"name": "Suzhou Museum", "en": "Suzhou Museum", "blurb": "I.M. Pei's garden-style museum, a modern take on white walls and grey tiles."}], "routes": [{"no": "01", "theme": "Classical Gardens", "days": "1 day", "stops": ["Humble Administrator's Garden", "Lingering Garden", "Lion Grove Garden"], "note": "The shifting views of the Humble Administrator's Garden and the rockery maze of Lion Grove — 'a forest within inches.'"}, {"no": "02", "theme": "Water Towns", "days": "1 day", "stops": ["Pingjiang Road", "Shantang Street", "Tongli"], "note": "The bridges and water of Pingjiang and Shantang, then rowing boats and Tuisi Garden at Tongli."}, {"no": "03", "theme": "Bells & Canal", "days": "1 day", "stops": ["Hanshan Temple", "Tiger Hill", "Suzhou Museum"], "note": "The bell of Hanshan Temple, the leaning pagoda of Tiger Hill, and Wu relics in I.M. Pei's museum."}], "packTitle": "Jiangnan Gardens Pack", "packItems": ["Suzhou 2-day route", "Garden visiting order & timing", "Water-town walking map", "Suzhou food list", "Pingjiang Road photo spots", "Tongli side-trip plan"]},
  "changsha": {"city": "Changsha", "cityEn": "Changsha", "region": "Hunan · Food, Nightlife & Buzz", "tagline": "A spicy, sleepless city that knows how to eat and play", "days": "2–3 days", "season": "Best in spring & autumn", "intro": "The Xiang River flowing north past Orange Isle, a thousand years of learning at Yuelu Academy, the street life of Taiping Street and the retro buzz of Super Wenheyou — Changsha is a spicy, sleepless city that knows how to eat and play.", "attractions": [{"name": "Orange Isle", "en": "Orange Isle", "blurb": "A long sandbar in the Xiang River, with the young Mao statue and weekend fireworks."}, {"name": "Yuelu Academy & Mount Yuelu", "en": "Yuelu Academy & Mount Yuelu", "blurb": "A thousand-year academy and red maples at Aiwan Pavilion, with city views from the hill."}, {"name": "Taiping Street", "en": "Taiping Street", "blurb": "Old Changsha's flagstone street of Jia Yi's house and endless snacks."}, {"name": "Super Wenheyou", "en": "Super Wenheyou", "blurb": "A viral dining 'community' rebuilt as 1980s street life — pure nostalgia."}, {"name": "Wuyi & IFS", "en": "Wuyi & IFS", "blurb": "Changsha's buzziest shopping hub — Sexy Tea and the rooftop KAWS."}, {"name": "Xiang River Night Cruise", "en": "Xiang River Night Cruise", "blurb": "Light shows on both banks mirrored in the river by night."}], "routes": [{"no": "01", "theme": "Xiang River Views", "days": "1 day", "stops": ["Orange Isle", "Mount Yuelu", "Yuelu Academy"], "note": "The young Mao statue on Orange Isle, a climb up Mount Yuelu, and a thousand years of learning at Yuelu Academy."}, {"no": "02", "theme": "Street Life & Trends", "days": "1 day", "stops": ["Taiping Street", "Super Wenheyou", "IFS"], "note": "Jia Yi's house and snacks on Taiping Street, nostalgic Wenheyou, and the KAWS at IFS."}, {"no": "03", "theme": "Sleepless City", "days": "1 day", "stops": ["Wuyi Hub", "Xiang River Night", "Jiefang West Road"], "note": "Sexy Tea around Wuyi, the river light show, and the spicy nightlife of Jiefang West Road."}], "packTitle": "Sleepless City Pack", "packItems": ["Changsha 2-day route", "Stinky-tofu & spice food list", "Orange Isle & Yuelu plan", "Sexy Tea must-tries", "Wenheyou photo spots", "Nightlife guide"]},
};

const cityOrder = ["beijing", "shanghai", "chengdu", "chongqing", "xian", "zhangjiajie", "hangzhou", "lhasa", "nanjing", "guangzhou", "guilin", "harbin", "shangrila", "wuhan", "lijiang", "xiamen", "kashgar", "datong", "kunming", "shenzhen", "suzhou", "changsha"];

/* Don't Miss (quick highlights on the city detail page, inspired by japan.travel region pages) */
const dontMiss = {
  beijing: ["Walk the central axis between the Forbidden City's red walls", "Climb a stretch of Mutianyu Great Wall for the layered hills", "Duck into a hutong for a Beijing breakfast", "Watch locals stroll at dawn around the Temple of Heaven"],
  shanghai: ["Catch the skyline day and night at the Bund", "City walk under the plane trees of Wukang Road", "Cross the Huangpu by ferry", "Go up Lujiazui to overlook the city"],
  chengdu: ["Sip covered-bowl tea on a bamboo chair in People's Park", "See the roly-poly pandas at the panda base", "Have a late-night spicy hotpot", "Find a hole-in-the-wall for authentic Sichuan food"],
  chongqing: ["See the Spirited Away-style night view at Hongyadong", "Ride the Liziba monorail through a building", "Cross the Yangtze by cableway", "Find a frame with river, bridge and towers together"],
  xian: ["Cycle the city wall at sunset", "Feel the army of thousands before the Terracotta Warriors", "Eat roujiamo and paomo on Muslim Street", "Step back to Chang'an at the Tang night district"],
  zhangjiajie: ["Wait for a cloud sea to wash over the peaks", "Walk Tianmen Mountain's cliffside glass skywalk", "Find the Avatar floating peaks at Yuanjiajie", "Listen to the water and watch monkeys at Golden Whip Stream"],
  hangzhou: ["Watch water meet sky at West Lake", "Hear the ancient bells at Lingyin Temple", "Sip a pre-Qingming tea on the Longjing hills", "Drift slowly by rowboat through Xixi Wetland"],
  lhasa: ["Gaze up at the red, white and gold of the Potala", "Follow the pilgrim flow around Barkhor Street", "Soak up the highland sun", "Wait for the starry night over Namtso"],
  nanjing: ["Night cruise of lantern light and oar sounds on the Qinhuai", "Walk a stretch of the Ming wall for Xuanwu Lake", "Climb among the pines and cypress at Sun Yat-sen Mausoleum", "Stroll slowly under the plane-tree avenue"],
  guangzhou: ["Slowly savor morning tea, one pot and two dishes", "See the European villas on Shamian Island", "Admire the Lingnan carvings at Chen Clan Hall", "Night cycle by the Pearl River for the Canton Tower"],
  guilin: ["Raft into a landscape painting on the Li River", "Cycle the Yulong River in Yangshuo", "See the layered mist over the Longji terraces", "Have a steaming bowl of Guilin rice noodles"],
  harbin: ["See the glowing ice sculptures at Ice and Snow World", "Bite a Modern ice pop on Central Street", "Take photos before St. Sophia Cathedral", "Romp on the frozen Songhua River"],
  shangrila: ["See the 'Little Potala' at Songzanlin Monastery", "Walk the highland lakes and wetlands of Pudacuo", "Turn the world's largest prayer wheel in Dukezong", "Wait for the golden sunrise on Meili Snow Mountain"],
  wuhan: ["Overlook the great river and three towns from Yellow Crane Tower", "Start the day with a bowl of hot-dry noodles", "Cycle the East Lake greenway among cherry blossoms", "Watch the Yangtze sunset from the riverbank"],
  "lijiang": ["Wander Sifang Street's bridges and water at dawn", "Ride the cableway up Jade Dragon Snow Mountain", "Catch the jade pools of Blue Moon Valley", "Slow down in quieter Shuhe Old Town"],
  "xiamen": ["Wander the car-free lanes of Gulangyu", "Cycle the Round-Island Road by the sea", "Catch the 'orange sea' sunrise", "Snack through old Bashi market"],
  "kashgar": ["Lose yourself in the earthen Old City lanes", "Haggle through the Grand Bazaar", "Drive the Karakoram Highway to Karakul Lake", "Sip tea in a century-old teahouse"],
  "datong": ["Stand before the open-air Buddha of Yungang Cave 20", "Look up at the cliff-pinned Hanging Temple", "Walk the four-square Ming city wall at night", "Find the smiling Bodhisattva at Huayan Temple"],
  "kunming": ["Feed the red-billed gulls at Cuihu in winter", "Wander the karst Stone Forest", "Stroll Guandu Old Town for snacks", "Slow down on artsy Wenlin Street"],
  "shenzhen": ["Look down from the Ping An cloud deck", "Cycle the Shenzhen Bay boardwalk", "See the world in a day at Window of the World", "Escape to the old Dapeng coast"],
  "suzhou": ["Lose the day in the Humble Administrator's Garden", "Wander the water-lanes of Pingjiang Road", "Hear the bell at Hanshan Temple", "See I.M. Pei's Suzhou Museum"],
  "changsha": ["See the young Mao statue on Orange Isle", "Climb to Yuelu Academy's red maples", "Time-travel through Super Wenheyou", "Try a cup of Sexy Tea"],
};

/* City filter metadata (legacy, unused): theme / len (length) / seasons */
const cityMeta = {
  beijing:   { theme: "Ancient capital", len: "Medium", seasons: ["Spring", "Autumn"] },
  shanghai:  { theme: "City", len: "Medium", seasons: ["Spring", "Summer", "Autumn", "Winter"] },
  chengdu:   { theme: "Street life", len: "Medium", seasons: ["Spring", "Autumn"] },
  chongqing: { theme: "Street life", len: "Medium", seasons: ["Spring", "Autumn"] },
  xian:      { theme: "Ancient capital", len: "Short", seasons: ["Spring", "Autumn"] },
  zhangjiajie:{ theme: "Landscape", len: "Medium", seasons: ["Spring", "Autumn"] },
  hangzhou:  { theme: "Elegance", len: "Medium", seasons: ["Spring", "Autumn"] },
  lhasa:     { theme: "Snowland", len: "Deep", seasons: ["Summer", "Autumn"] },
  nanjing:   { theme: "Ancient capital", len: "Short", seasons: ["Spring", "Autumn"] },
  guangzhou: { theme: "Street life", len: "Short", seasons: ["Autumn", "Winter"] },
  guilin:    { theme: "Landscape", len: "Medium", seasons: ["Spring", "Summer", "Autumn"] },
  harbin:    { theme: "Ice & snow", len: "Medium", seasons: ["Winter"] },
  shangrila: { theme: "Snowland", len: "Deep", seasons: ["Spring", "Summer", "Autumn"] },
  wuhan:     { theme: "Street life", len: "Short", seasons: ["Spring", "Autumn"] },
  "lijiang": {"theme": "Snow mountain & old town", "len": "Medium", "seasons": ["Spring", "Autumn"]},
  "xiamen": {"theme": "Seaside island garden", "len": "Short", "seasons": ["Spring", "Autumn"]},
  "kashgar": {"theme": "Silk Road & plateau", "len": "Short", "seasons": ["Summer", "Autumn"]},
  "datong": {"theme": "Grottoes & old capital", "len": "Short", "seasons": ["Summer", "Autumn"]},
  "kunming": {"theme": "Spring city & karst", "len": "Short", "seasons": ["Spring", "Winter"]},
  "shenzhen": {"theme": "Tech city & coast", "len": "Short", "seasons": ["Autumn", "Winter"]},
  "suzhou": {"theme": "Gardens & water towns", "len": "Short", "seasons": ["Spring", "Autumn"]},
  "changsha": {"theme": "Food & nightlife", "len": "Short", "seasons": ["Spring", "Autumn"]},
};
