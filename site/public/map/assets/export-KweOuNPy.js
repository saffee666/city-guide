import{C as e,D as t,O as n,S as r,_ as i,b as a,c as o,g as s,l as c,p as l,v as u}from"./index-D6kSuYYP.js";var d=`/*\r
 * 地图的卡片效果：和 UI 卡片同款的硬投影（偏移 3px/5px、不模糊）。页面与导出图共用（export.js 以 ?raw 引入）。\r
 * 偏移写成「屏幕像素 × --k」，--k 为当前视图每像素对应的 viewBox 单位（map.js 的 setScale 维护），\r
 * 这样无论放大多少倍，投影在屏幕上都保持同样的距离。\r
 */\r
svg { --k: 1; }\r
.map-shadow, .inset-shadow {\r
  fill: rgba(0, 0, 0, .12); stroke: none; pointer-events: none;\r
  transform: translate(calc(var(--k) * 3px), calc(var(--k) * 5px));\r
}\r
`,f=2,p=`'CityEx Sans','PingFang SC','Hiragino Sans GB','Microsoft YaHei','Noto Sans CJK SC',sans-serif`,m=`#f3efe6`,h={outer:`#fff`,ink:`#222`,shadow:`rgba(0,0,0,.13)`,margin:22,radius:22,border:4,dx:5,dy:7},g=`
.sea{fill:${m}}
.unit{fill:#fff;stroke:#fff;stroke-width:.35;stroke-linejoin:round}
${t.filter(e=>e.value).map(e=>`.unit[data-level="${e.value}"]{fill:${e.color};stroke:${e.color}}`).join(``)}
.line-province{fill:none;stroke:#222;stroke-width:.55;stroke-linejoin:round}
.line-country{fill:none;stroke:#222;stroke-width:1.1;stroke-linejoin:round}
.inset-bg{fill:#fbf9f4}
.inset-frame{fill:none;stroke:#222;stroke-width:1.1}
.inset-title{font-size:10px;text-anchor:end;fill:#6b665c}
.inset .unit{stroke-width:.2}
.inset .line-province{stroke-width:.35}
.inset .line-country{stroke-width:.55}
.inset .sansha{stroke:#222;stroke-width:.7}
.jd{fill:#222;stroke:#222;stroke-width:1.2;stroke-linecap:round}
text{font-family:${p};fill:#222}
`,_=e=>{let t=document.createElement(`div`);t.style.cssText=`position:fixed;left:-99999px;top:0;visibility:hidden;pointer-events:none`,t.innerHTML=e,document.body.append(t);try{let e=t.firstElementChild,n=[];for(let t of e.querySelectorAll(`text`)){let e=getComputedStyle(t);if(e.display===`none`)continue;let r=t.getCTM(),i=e=>{let t=getComputedStyle(e);return{size:parseFloat(t.fontSize),family:t.fontFamily,weight:t.fontWeight,fill:t.fill}},a=[...t.childNodes].map(e=>({text:e.textContent,...e.nodeType===1?i(e):i(t)})).filter(e=>e.text);n.push({m:[r.a,r.b,r.c,r.d,r.e,r.f],x:t.x.baseVal[0]?.value??0,y:t.y.baseVal[0]?.value??0,anchor:e.textAnchor,central:e.dominantBaseline===`central`||e.dominantBaseline===`middle`,stroke:e.stroke===`none`?null:e.stroke,strokeWidth:parseFloat(e.strokeWidth)||0,runs:a}),t.remove()}return{svg:e.outerHTML,ops:n,chars:n.flatMap(e=>e.runs.map(e=>e.text)).join(``)}}finally{t.remove()}},v=(e,t,n,r=0,i=0)=>{let a=e=>e&&e!==`none`?e:`#222`;for(let o of t){let[t,s,c,l,u,d]=o.m;e.setTransform(t*n,s*n,c*n,l*n,u*n+r,d*n+i),e.textBaseline=o.central?`middle`:`alphabetic`,e.textAlign=`left`;let f=e=>`${e.weight} ${e.size}px ${e.family}`,p=o.runs.map(t=>(e.font=f(t),e.measureText(t.text).width)),m=p.reduce((e,t)=>e+t,0),h=o.x-(o.anchor===`middle`?m/2:o.anchor===`end`?m:0),g=p.map(e=>{let t=h;return h+=e,t});o.stroke&&o.strokeWidth&&(e.lineJoin=`round`,e.lineWidth=o.strokeWidth,e.strokeStyle=o.stroke,o.runs.forEach((t,n)=>{e.font=f(t),e.strokeText(t.text,g[n],o.y)})),o.runs.forEach((t,n)=>{e.font=f(t),e.fillStyle=a(t.fill),e.fillText(t.text,g[n],o.y)})}e.setTransform(1,0,0,1,0,0)},y=(e,t,n,r,i,a)=>{e.beginPath(),e.moveTo(t+a,n),e.arcTo(t+r,n,t+r,n+i,a),e.arcTo(t+r,n+i,t,n+i,a),e.arcTo(t,n+i,t,n,a),e.arcTo(t,n,t+r,n,a),e.closePath()},b=async(e,t,n,r,i,{padding:a=0}={})=>{let{svg:s,ops:l,chars:u}=_(e);await document.fonts.load(`16px 'CityEx Sans'`,u);let d=new Image,f=URL.createObjectURL(new Blob([s],{type:`image/svg+xml`}));await new Promise((e,t)=>{d.onload=e,d.onerror=t,d.src=f});let p=document.createElement(`canvas`),g=p.width=t*r,b=p.height=n*r,x=p.getContext(`2d`),[S,C,w,T,E]=[h.margin,h.radius,h.dx,h.dy,a].map(e=>e*r),D=g-S*2-w,O=b-S*2-T,k=Math.min((D-E*2)/g,(O-E*2)/b),A=S+(D-g*k)/2,j=S+(O-b*k)/2;x.fillStyle=h.outer,x.fillRect(0,0,g,b),x.fillStyle=h.shadow,y(x,S+w,S+T,D,O,C),x.fill(),x.save(),y(x,S,S,D,O,C),x.clip(),x.fillStyle=m,x.fillRect(S,S,D,O),x.drawImage(d,A,j,g*k,b*k),v(x,l,r*k,A,j),x.restore(),x.lineWidth=h.border*r,x.strokeStyle=h.ink,y(x,S,S,D,O,C),x.stroke(),URL.revokeObjectURL(f);let M=await new Promise(e=>p.toBlob(e,`image/png`)),N=URL.createObjectURL(M);return o()&&c(N,i),N},x=async o=>{let c=document.createElementNS(`http://www.w3.org/2000/svg`,`svg`);i(c,{withLabels:!1}),u()&&r(c,`fine`);for(let[e,t]of Object.entries(o))a(c,e,t);let{counts:p,score:m,visited:h}=n(o,e),[,,_,v]=s,y=`<text x="28" y="62" font-size="44" font-weight="bold">城市制霸</text>
<text x="30" y="98" font-size="20">${h} / ${e.length} 城 · ${m} 分</text>`;return t.filter(e=>e.value).forEach((e,n)=>{let r=v-30-(t.length-2-n)*26;y+=`<rect x="30" y="${r-15}" width="30" height="18" rx="3" fill="${e.color}" stroke="#222" stroke-width="1"/>
<text x="70" y="${r}" font-size="17">${l(e.name)}  ${p[e.value]}</text>`}),b(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${s.join(` `)}" width="${_}" height="${v}" style="--k:${1/f}"><style>${g}${d}</style>${c.innerHTML}${y}</svg>`,_,v,f,`城市制霸.png`,{padding:16})};export{p as FONT,x as exportImage,b as rasterize};