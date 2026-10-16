
    const CC = window.cityContent || {};
    const params = new URLSearchParams(location.search);
    const key = params.get("city");
    const root = document.getElementById("cityRoot");

    const FOOD_COLORS = ["linear-gradient(150deg,#b5462f,#7d2c1d)","linear-gradient(150deg,#1f6f78,#0e3f49)","linear-gradient(150deg,#7a3b86,#3f2350)","linear-gradient(150deg,#c0853a,#7c5220)","linear-gradient(150deg,#3f7a4a,#234d2c)","linear-gradient(150deg,#3a6ea5,#22436a)"];
    const SPEC_COLORS = ["linear-gradient(150deg,#b5462f,#7d2c1d)","linear-gradient(150deg,#7a3b86,#3f2350)","linear-gradient(150deg,#1f6f78,#0e3f49)","linear-gradient(150deg,#c0853a,#7c5220)"];
    const SEASON_SLUGS = ["spring","summer","autumn","winter"];

    const draw = (k) => `images/draw/${k}.jpg`;
    const reco = (k) => { const g = cityGuides[k]; return `<a class="reco-card" href="city.html?city=${k}"><div class="thumb"><img src="${draw(k)}" alt="${g.cityEn}" loading="lazy"></div><div class="cap">${g.cityEn}</div></a>`; };
    const moreCard = (k) => { const g = cityGuides[k]; return `<a class="more-card" href="city.html?city=${k}"><img src="${draw(k)}" alt="${g.cityEn}" loading="lazy"><span>${g.cityEn}</span></a>`; };

    const VIDEOS = {
      beijing:["7609289358239108374","https://www.tiktok.com/@hanfu.folk.china/video/7609289358239108374"],
      shanghai:["7565602614243609859","https://www.tiktok.com/@acasainlume/video/7565602614243609859"],
      hangzhou:["7525781223625461023","https://www.tiktok.com/@chinatravelbee/video/7525781223625461023"],
      guangzhou:["7547057780914408722","https://www.tiktok.com/@boy_dylan17/video/7547057780914408722"],
      xiamen:["7512841973795998994","https://www.tiktok.com/@lucy_lux2/video/7512841973795998994"],
      chongqing:["7548027059063229713","https://www.tiktok.com/@sundatraveladventure/video/7548027059063229713"],
      kunming:["7634349384246856991","https://www.tiktok.com/@kongholidaytravel/video/7634349384246856991"],
      guilin:["7553172924073594134","https://www.tiktok.com/@poetic.china/video/7553172924073594134"],
      zhangjiajie:["7567644998057921814","https://www.tiktok.com/@poetic.china/video/7567644998057921814"],
      kashgar:["7550521410163100958","https://www.tiktok.com/@kongholidaytravel/video/7550521410163100958"],
      datong:["7589682322430004535","https://www.tiktok.com/@sansu.zhouj/video/7589682322430004535"],
      harbin:["7572992444715764999","https://www.tiktok.com/@chelseainbeijing/video/7572992444715764999"],
      xian:["7527928747434069266","https://www.tiktok.com/@xia.nan6/video/7527928747434069266"],
      chengdu:["7525413781585874206","https://www.tiktok.com/@chinatravelbee/video/7525413781585874206"],
      nanjing:["7536085582523436290","https://www.tiktok.com/@lamartin183/video/7536085582523436290"],
      shenzhen:["7589573356962254102","https://www.tiktok.com/@china.travelers.t/video/7589573356962254102"],
      changsha:["7536042724982623519","https://www.tiktok.com/@kongholidaytravel/video/7536042724982623519"],
      lijiang:["7532444489823096086","https://www.tiktok.com/@lamartin183/video/7532444489823096086"],
      lhasa:["7536177995267198239","https://www.tiktok.com/@kongholidaytravel/video/7536177995267198239"],
      suzhou:["7535713047499853078","https://www.tiktok.com/@lamartin183/video/7535713047499853078"],
      shangrila:["7625076745762262293","https://www.tiktok.com/@mexedich5/video/7625076745762262293"],
      wuhan:["7537284585869118750","https://www.tiktok.com/@kongholidaytravel/video/7537284585869118750"],
    };

    function tiktokHTML(name, k) {
      const v = VIDEOS[k];
      const slot = v
        ? `<div class="tiktok-player"><iframe src="https://www.tiktok.com/player/v1/${v[0]}?controls=1&progress_bar=1&play_button=1&volume_control=1&rel=0&description=0&music_info=0&fullscreen_button=1&native_context_menu=0" allow="fullscreen; encrypted-media" title="${name} on TikTok" loading="lazy"></iframe></div>`
        : `<div class="tiktok-slot" role="img" aria-label="TikTok video placeholder"><div>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 17a3 3 0 1 0 3-3V4c.5 2.5 2.5 4 5 4"/></svg>
          <div class="badge">TikTok video</div><div class="hint">Paste a TikTok embed for ${name} here.</div>
        </div></div>`;
      return `<section class="section" style="padding-top:0"><div class="wrap tiktok-wrap">
        <div class="tiktok-copy"><p class="eyebrow">Watch</p><h2>${name} on TikTok</h2><p>A short vertical video from a real traveller — playing right here on the page.</p></div>
        ${slot}
      </div></section>`;
    }


    /* ===== On-the-map section removed (former AMap street map) ===== */
    function onMapHTML(k){ return ""; }
    function initCityAmap(k){ }

    function renderCity(k) {
      const g = cityGuides[k];
      const c = CC[k] || {};
      document.title = `${g.cityEn} | China Travel Co`;
      const kicker = (g.region || "").split(" · ")[0];
      const explore = (c.exploreMore && c.exploreMore.length) ? c.exploreMore.filter((x) => cityGuides[x]) : cityOrder.filter((x) => x !== k).slice(0, 4);
      const recoKeys = explore.slice(0, 2);

      const sum = [{ i: "🏯", b: "Must-See", s: `${g.attractions.length} top sights`, h: "#spots" }];
      if (c.itinerary) sum.push({ i: "🗺️", b: "Route", s: `${c.itinerary.length}-day itinerary`, h: "#route" });
      if (c.food) sum.push({ i: "🥢", b: "Food", s: `${c.food.length} local picks`, h: "#food" });
      if (c.stay) sum.push({ i: "🛏️", b: "Stay", s: "Where to base", h: "#stay" });
      if (c.pitfalls) sum.push({ i: "💡", b: "Tips", s: "Booking & pitfalls", h: "#tips" });

      let h = "";
      // HERO
      h += `<header class="hero" style="background-image:url('${draw(k)}')"><div class="hero-inner"><p class="kicker">${kicker}</p><h1>${g.cityEn}</h1><p class="tagline">${g.tagline}</p></div></header>`;
      // SUMMARY
      h += `<section class="summary"><div class="wrap"><div class="summary-card">` +
        sum.map((x) => `<a class="sum-item" href="${x.h}"><span class="sum-ic">${x.i}</span><span class="sum-tx"><b>${x.b}</b><span>${x.s}</span></span></a>`).join("") +
        `</div></div></section>`;
      // INTRO + RECO
      h += `<section class="section"><div class="wrap intro-grid"><div class="intro-body"><h2 class="intro-lead">${c.lead || g.tagline}</h2><p>${g.intro}</p>`;
      if (c.getThere) {
        h += `<h2>How to Get There</h2><p>${c.getThere.short}</p>`;
        if (c.getThere.more) h += `<details class="more"><summary><span class="ic"></span> Show More Information</summary><div class="more-body"><p>${c.getThere.more}</p></div></details>`;
      }
      h += `</div><aside class="reco"><h3>Recommended for You</h3>${recoKeys.map(reco).join("")}</aside></div></section>`;
      // DON'T MISS
      if (typeof dontMiss !== "undefined" && dontMiss[k]) {
        h += `<section class="section" style="padding-top:0"><div class="wrap"><div class="dontmiss"><h2>Don't Miss</h2><ul>${dontMiss[k].map((d) => `<li>${d}</li>`).join("")}</ul></div></div></section>`;
      }
      // MUST-SEE
      h += `<section class="section" id="spots" style="padding-top:0"><div class="wrap"><h2 class="section-title">Must-See Attractions</h2><p class="section-sub">${g.cityEn}'s essential sights${c.tips ? " — with a practical tip for each" : ""}.</p><div class="spot-grid">` +
        g.attractions.map((a, i) => {
          const tip = (c.tips && c.tips[i]) ? `<div class="tip"><b>Tip:</b> ${c.tips[i]}</div>` : "";
          return `<article class="spot"><div class="img"><img src="images/attractions/${k}-${i}.jpg" alt="${a.name}" loading="lazy" onerror="this.closest('.spot').classList.add('noimg');this.remove()"></div><div class="body"><h3>${a.name}</h3><p>${a.blurb}</p>${tip}</div></article>`;
        }).join("") +
        `</div></div></section>`;
      // ROUTE
      if (c.itinerary) {
        h += `<section class="section" id="route" style="padding-top:0"><div class="wrap"><h2 class="section-title">A ${c.itinerary.length}-Day ${g.cityEn} Route</h2><p class="section-sub">An efficient first-timer's loop, grouped by theme and split into morning, afternoon and evening.</p><div class="itin">` +
          c.itinerary.map((d) => `<div class="day"><div class="day-head"><span class="day-badge">${d.day}</span><h3>${d.theme}</h3><span class="path">${d.path}</span></div>` +
            d.slots.map((s) => `<div class="slot"><div class="when">${s.when}</div><div class="what">${s.what}</div></div>`).join("") + `</div>`).join("") +
          `</div></div></section>`;
      } else if (g.routes && g.routes.length) {
        h += `<section class="section" id="route" style="padding-top:0"><div class="wrap"><h2 class="section-title">Suggested Routes</h2><div class="route-fallback">` +
          g.routes.map((r) => `<div class="day"><div class="day-head"><span class="day-badge">Route ${r.no}</span><h3>${r.theme}</h3><span class="path">${r.stops.join(" → ")}</span></div><div class="slot"><div class="when">${r.days}</div><div class="what">${r.note}</div></div></div>`).join("") +
          `</div></div></section>`;
      }
      // (Per-city Watch removed — all city videos live in the carousel on the Destinations hub)
      // FOOD
      if (c.food) {
        h += `<section class="section" id="food" style="padding-top:0"><div class="wrap"><h2 class="section-title">Where to Eat</h2><p class="section-sub">Well-loved ${g.cityEn} tables — popular spots, so reserve ahead or expect a wait at peak times.</p><div class="food-grid">` +
          c.food.map((f, i) => `<article class="food"><div class="fimg" data-zh="${f.zh}" style="background:${FOOD_COLORS[i % FOOD_COLORS.length]}"><img src="images/food/${k}-${i}.jpg" alt="${f.name}" loading="lazy" onerror="this.parentNode.classList.add('mono');this.remove()"></div><div><h3>${f.name} <span class="tag">${f.tag}</span></h3><p>${f.blurb}</p></div></article>`).join("") +
          `</div></div></section>`;
      }
      // STAY
      if (c.stay) {
        h += `<section class="section" id="stay" style="padding-top:0"><div class="wrap"><h2 class="section-title">Where to Stay</h2><div class="stay-grid">` +
          c.stay.map((s) => `<article class="stay"><span class="lvl">${s.level}</span><h3>${s.name}</h3><p>${s.blurb}</p></article>`).join("") +
          `</div></div></section>`;
      }
      // TIPS / PITFALLS
      if (c.pitfalls) {
        h += `<section class="section" id="tips" style="padding-top:0"><div class="wrap"><h2 class="section-title">Tips &amp; Pitfalls</h2><div class="tips-grid">` +
          c.pitfalls.map((p) => `<article class="tipcard"><h3><span class="e">${p.emoji}</span> ${p.title}</h3><p>${p.text}</p></article>`).join("") +
          `</div></div></section>`;
      }
      // SEASONAL or BEST TIME
      if (c.seasonal === true && c.seasons) {
        h += `<section class="section" style="padding-top:0"><div class="wrap"><h2 class="section-title">Seasonal Highlights</h2><div class="season-grid">` +
          c.seasons.map((se, i) => {
            const slug = SEASON_SLUGS[i] || ("s" + i);
            return `<article class="season"><div class="thumb" data-label="${se.name}"><img src="images/seasons/${k}-${slug}.jpg" alt="${g.cityEn} ${se.name}" loading="lazy" onerror="var p=this.parentNode;p.classList.add('ph');p.innerHTML='<span>'+p.dataset.label+'</span>'"></div><div><h3>${se.name}</h3><p>${se.note}</p></div></article>`;
          }).join("") +
          `</div></div></section>`;
      } else if (c.bestTime) {
        h += `<section class="section" style="padding-top:0"><div class="wrap"><div class="besttime"><h2>Best Time to Visit</h2><p class="lead">${c.bestTime.lead}</p><div class="bt-grid">` +
          c.bestTime.seasons.map((se) => `<div class="bt-season${se.best ? " best" : ""}"><span class="s">${se.name}</span><span class="d">${se.note}</span></div>`).join("") +
          `</div></div></div></section>`;
      }
      // SPECIALTIES
      if (c.specialties) {
        h += `<section class="section" style="padding-top:0"><div class="wrap"><h2 class="section-title">Local Specialties</h2><div class="spec-grid">` +
          c.specialties.map((sp, i) => `<article class="spec"><div class="ph" data-zh="${sp.zh}" style="background:${SPEC_COLORS[i % SPEC_COLORS.length]}"><img src="images/specialties/${k}-${i}.jpg" alt="${sp.name}" loading="lazy" onerror="this.parentNode.classList.add('mono');this.remove()"></div><div><h3>${sp.name}</h3><p>${sp.blurb}</p></div></article>`).join("") +
          `</div></div></section>`;
      }
      // EXPLORE MORE
      h += `<section class="section" style="padding-top:0"><div class="wrap"><h2 class="section-title">Explore More Destinations</h2><div class="more-grid">${explore.map(moreCard).join("")}</div></div></section>`;

      h += onMapHTML(k);
      h += videoCarouselHTML();
      root.innerHTML = h;
      initCityAmap(k);
      if (root.querySelector('.tiktok-embed')) {
        if (window.tiktokEmbed && window.tiktokEmbed.lib && window.tiktokEmbed.lib.render) {
          try { window.tiktokEmbed.lib.render(root.querySelectorAll('.tiktok-embed')); } catch (e) {}
        } else {
          var ts = document.createElement('script'); ts.async = true; ts.src = 'https://www.tiktok.com/embed.js'; document.body.appendChild(ts);
        }
      }
    }

    const FEAT = {beijing:"北京",shanghai:"上海",xian:"西安",chengdu:"成都",chongqing:"重庆",guilin:"桂林",zhangjiajie:"张家界",hangzhou:"杭州",harbin:"哈尔滨",xiamen:"厦门",lijiang:"丽江",guangzhou:"广州",lhasa:"拉萨",kunming:"昆明",nanjing:"南京",kashgar:"喀什",suzhou:"苏州",changsha:"长沙",datong:"大同",shenzhen:"深圳"};
    const featHref = (k) => `city.html?city=${k}`;  /* 左图右卡特色页只在地图里出现；其他入口一律进 city.html */
    const magCard = (k, feat, rcls = "") => { const g = cityGuides[k]; if (!g) return ""; return `<a class="magcard${feat ? " feat" : ""}${rcls ? " " + rcls : ""}" href="${featHref(k)}"><img src="images/draw/${k}.jpg" alt="${g.cityEn}" loading="lazy"><span class="bar"></span><div class="t"><p class="eb">${g.region || ""}</p><h3>${g.cityEn}</h3>${g.tagline ? `<p>${g.tagline}</p>` : ""}</div></a>`; };

    const REGIONS = [
      { en: "North & Northeast", zh: "华北 · 东北", cls: "r-north", keys: ["beijing", "datong", "harbin"] },
      { en: "East China", zh: "华东", cls: "r-east", keys: ["shanghai", "suzhou", "hangzhou", "nanjing"] },
      { en: "Central China", zh: "华中", cls: "r-central", keys: ["wuhan", "changsha", "zhangjiajie"] },
      { en: "South China", zh: "华南", cls: "r-south", keys: ["guangzhou", "shenzhen", "xiamen", "guilin"] },
      { en: "Southwest", zh: "西南", cls: "r-sw", keys: ["chengdu", "chongqing", "kunming", "lijiang", "shangrila", "lhasa"] },
      { en: "Northwest", zh: "西北", cls: "r-nw", keys: ["xian", "kashgar"] },
    ];
    function regionSection(r) {
      const keys = r.keys.filter((k) => cityGuides[k]);
      const cards = keys.map((k, i) => magCard(k, keys.length >= 3 && i === 0, r.cls || "")).join("");
      if (!cards) return "";
      return `<div class="region-block"><div class="region-head"><h2>${r.en}</h2><span class="region-zh">${r.zh} · ${keys.length}</span></div><div class="maggrid">${cards}</div></div>`;
    }
    function videoCarouselHTML(){
      const VG=["linear-gradient(155deg,#b5462f,#7d2c1d)","linear-gradient(155deg,#1f6f78,#0e3f49)","linear-gradient(155deg,#7a3b86,#3f2350)","linear-gradient(155deg,#c0853a,#7c5220)","linear-gradient(155deg,#3f7a4a,#234d2c)","linear-gradient(155deg,#3a6ea5,#22436a)"];
      const slides=Object.keys(VIDEOS).map((k,i)=>{const g=cityGuides[k];const name=g?g.cityEn:k;const v=VIDEOS[k];
        return `<div class="vslide" data-id="${v[0]}" data-cite="${v[1]}" data-city="${name}"><button class="vslide-ph" style="background-image:url('images/draw/${k}.jpg')" aria-label="Play ${name} video"><span class="vcity">${name}</span><span class="vplay">▶ Play</span></button></div>`;}).join("");
      return `<section class="section vcar-sec" style="padding-top:0"><div class="wrap"><p class="eyebrow">Watch</p><h2 class="section-title" style="margin-bottom:6px">Other cities, on TikTok</h2><p class="section-sub">Real traveller clips from across China — swipe through.</p><div class="vcar"><button class="vcar-nav prev" aria-label="Previous">\u2039</button><div class="vcar-track" id="vcarTrack">${slides}</div><button class="vcar-nav next" aria-label="Next">\u203a</button></div></div></section>`;
    }
    function initVideoCarousel(){
      const track=document.getElementById('vcarTrack'); if(!track) return;
      function src(id){ return 'https://www.tiktok.com/player/v1/'+id+'?autoplay=1&controls=1&progress_bar=1&play_button=1&volume_control=1&rel=0&description=0&music_info=0&fullscreen_button=1&native_context_menu=0'; }
      function mount(sl){ if(sl.dataset.mounted) return; sl.dataset.mounted='1';
        sl.innerHTML='<iframe src="'+src(sl.dataset.id)+'" allow="autoplay; fullscreen; encrypted-media" frameborder="0" title="'+(sl.dataset.city||'')+' on TikTok" style="width:100%;height:100%;border:0;border-radius:16px;display:block;"></iframe>';
      }
      track.querySelectorAll('.vslide').forEach(sl=>{ const ph=sl.querySelector('.vslide-ph'); if(ph) ph.addEventListener('click',()=>mount(sl)); });
      const wrap=track.closest('.vcar'); const step=()=>Math.max(280, track.clientWidth*0.85);
      wrap.querySelector('.prev').addEventListener('click',()=>track.scrollBy({left:-step(),behavior:'smooth'}));
      wrap.querySelector('.next').addEventListener('click',()=>track.scrollBy({left: step(),behavior:'smooth'}));
    }
    function renderHub() {
      document.title = "Destinations | China Travel Co";
      const seen = new Set(REGIONS.flatMap((r) => r.keys));
      const extras = cityOrder.filter((k) => cityGuides[k] && !seen.has(k));
      const blocks = REGIONS.map(regionSection).join("") +
        (extras.length ? regionSection({ en: "More", zh: "更多", keys: extras }) : "");
      root.innerHTML = `<header class="hero" style="background-image:url('images/draw/beijing.jpg')"><div class="hero-inner"><p class="kicker">China Travel Co</p><h1>Destinations</h1><p class="tagline">Pick a city to begin</p><a class="map-cta" href="map.html">Open the full map →</a></div></header>
        <section class="section"><div class="wrap dest-hub"><p class="eyebrow">Explore China · by region</p><h2 class="section-title" style="margin-top:0;margin-bottom:6px">Where will you begin?</h2><p class="section-sub" style="margin-bottom:4px">Six regions, ${seen.size} cities — pick a feeling and a place.</p>${blocks}</div></section>${videoCarouselHTML()}`;
    }

    if (key && cityGuides[key]) renderCity(key); else renderHub();
    initVideoCarousel();
  