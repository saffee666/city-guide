import{C as e,D as t,O as n,T as r,h as i,m as a,p as o,w as s,x as c,y as l}from"./index-D6kSuYYP.js";import{FONT as u,rasterize as d}from"./export-KweOuNPy.js";var f=1080,p=1440,m=64,h=2,g=`#222`,_=`#6b665c`,v=`#f3efe6`,y=`#fbf9f4`,b=`460300`,x={x:m,y:330,w:952,h:900},S={w:84,h:200},C=250,w=Object.fromEntries(t.map(e=>[e.value,e.value?e.color:`#fff`])),T=e=>{let[t,n,r,i]=e.bbox,a=r-t,o=i-n,s=Math.min(x.w*.86/a,x.h*.86/o),c=x.w/s,l=x.h/s;return{bw:a,bh:o,k:s,vw:c,vh:l,vx:t+a/2-c/2,vy:n+o/2-l/2}},E=(e,t)=>{let n=s(e).filter(e=>e.d),r=T(c.get(e)),i=Math.max(22,Math.min(34,Math.sqrt(r.bw*r.bh*r.k*r.k/n.length)*.16));return{view:r,...a({units:n,pathOf:e=>t.units[e],view:r,base:i,bounds:{x0:8,y0:8,x1:x.w-8,y1:x.h-8}})}},D=(a,l,d)=>{let h=c.get(a),T=s(a),D=T.filter(e=>e.d),O=n(l,T),k=O.visited===O.total,A=Math.round(O.visited/O.total*100),{view:{k:j,vw:M,vh:N,vx:P,vy:F},labels:I}=E(a,d),L=e.filter(e=>e.province!==a&&e.d),R=`
<svg x="${x.x}" y="${x.y}" width="${x.w}" height="${x.h}" viewBox="${P} ${F} ${M} ${N}">
  <g fill="#f5f2eb" stroke="#e7e2d7" stroke-width="${1/j}">${L.map(e=>`<path d="${d.units[e.code]}"/>`).join(``)}</g>
  <g transform="translate(${4/j} ${6/j})" fill="rgba(0,0,0,.13)">${D.map(e=>`<path d="${d.units[e.code]}"/>`).join(``)}</g>
  <g stroke="#cfc8b8" stroke-width="${1.4/j}" stroke-linejoin="round">
    ${D.map(e=>`<path d="${d.units[e.code]}" fill="${w[l[e.code]??0]}"/>`).join(``)}
  </g>
  <path d="${d.lines.province}" fill="none" stroke="${g}" stroke-width="${2.4/j}" stroke-linejoin="round"/>
  <path d="${d.lines.country}" fill="none" stroke="${g}" stroke-width="${3.2/j}" stroke-linejoin="round"/>
</svg>`,z=I.filter(e=>e.leader).map(e=>{let[t,n]=e.leader,[r,a]=i(e);return`<line x1="${x.x+t}" y1="${x.y+n}" x2="${x.x+r}" y2="${x.y+a}" stroke="${g}" stroke-width="2"/>
<circle cx="${x.x+t}" cy="${x.y+n}" r="5" fill="#fff" stroke="${g}" stroke-width="2.5"/>`}).join(``)+I.map(({u:e,x:t,y:n,s:r})=>`<text x="${x.x+t}" y="${x.y+n}" font-size="${r}" text-anchor="middle" dominant-baseline="central"
  stroke="rgba(255,255,255,.85)" stroke-width="${r*.22}" stroke-linejoin="round" paint-order="stroke">${o(e.short)}</text>`).join(``),B=`
<g id="mini">
  <svg id="mini-svg" height="${C}" viewBox="0 0 1000 1300" overflow="visible">
    <path d="${r.outline}" fill="#fff" stroke="${g}" stroke-width="10" stroke-linejoin="round"/>
    ${D.map(e=>`<path d="${e.d}" fill="${g}" stroke="${g}" stroke-width="4"/>`).join(``)}
    <path d="${r.jd}" fill="${g}" stroke="${g}" stroke-width="14" stroke-linecap="round"/>
  </svg>
</g>`,V=`
<rect x="${m}" y="${m}" width="132" height="44" rx="10" fill="${g}"/>
<text x="130" y="87" font-size="26" fill="#fff" text-anchor="middle" dominant-baseline="central">城市制霸</text>
<text id="title" x="60" y="214" font-size="92">${o(h.short)}制霸</text>
<text id="stats" x="${m}" y="286" font-size="38" fill="${_}"><tspan fill="${g}" font-size="46">${O.visited}</tspan> / ${O.total} 城 · ${O.score} 分 · 点亮 <tspan fill="${g}" font-size="46">${A}%</tspan></text>`,H=k?`
<g id="stamp">
  <rect x="${-S.w/2}" y="${-S.h/2}" width="${S.w}" height="${S.h}" rx="12" fill="#FF7E7E" stroke="${g}" stroke-width="6"/>
  <rect x="${-S.w/2+9}" y="${-S.h/2+9}" width="${S.w-18}" height="${S.h-18}" rx="6" fill="none" stroke="${g}" stroke-width="2.5" stroke-dasharray="6 7"/>
  ${[`全`,`制`,`霸`].map((e,t)=>`<text y="${(t-1)*52}" font-size="48" text-anchor="middle" dominant-baseline="central">${e}</text>`).join(``)}
</g>`:``,U=``;if(T.some(e=>e.code===b)){let[e,t,n,i]=r.inset.box,a=190*i/n,o=x.x+x.w-190-24,s=x.y+x.h-a-24,c=w[l[b]??0];U=`
<g transform="translate(${o} ${s})">
  <clipPath id="sansha-clip"><rect width="190" height="${a}" rx="14"/></clipPath>
  <rect width="190" height="${a}" rx="14" fill="${y}"/>
  <g clip-path="url(#sansha-clip)"><svg width="190" height="${a}" viewBox="${e} ${t} ${n} ${i}">
    ${r.inset.units.map(e=>e.code===b?`<path d="${e.d}" fill="${c}" stroke="${g}" stroke-width="1.2"/>`:`<path d="${e.d}" fill="#f5f2eb" stroke="#e7e2d7" stroke-width="0.4"/>`).join(``)}
    <path d="${r.inset.jd}" fill="${g}" stroke="${g}" stroke-width="0.6"/>
  </svg></g>
  <rect width="190" height="${a}" rx="14" fill="none" stroke="${g}" stroke-width="3"/>
  <rect x="59" y="${a*.52}" width="72" height="34" rx="8" fill="${c}" stroke="${g}" stroke-width="2.5"/>
  <text x="95" y="${a*.52+17}" font-size="24" text-anchor="middle" dominant-baseline="central">三沙</text>
  <text x="180" y="${a-10}" font-size="16" text-anchor="end" fill="${_}">南海诸岛</text>
</g>`}let W=t.filter(e=>e.value),G=952/W.length,K=W.map((e,t)=>`
<g transform="translate(${m+t*G} ${x.y+x.h+58})">
  <rect width="34" height="34" rx="8" fill="${e.color}" stroke="${g}" stroke-width="3"/>
  <text x="46" y="18" font-size="30" dominant-baseline="central">${o(e.name)} ${O.counts[e.value]}</text>
</g>`).join(``);return`<svg xmlns="http://www.w3.org/2000/svg" width="${f}" height="${p}" viewBox="0 0 ${f} ${p}" fill="${g}">
  <style>text{font-family:${u}}</style>
  <rect width="${f}" height="${p}" fill="${v}"/>
  ${V}
  ${B}
  <clipPath id="card"><rect x="${x.x}" y="${x.y}" width="${x.w}" height="${x.h}" rx="26"/></clipPath>
  <rect x="${x.x}" y="${x.y}" width="${x.w}" height="${x.h}" rx="26" fill="${y}"/>
  <g clip-path="url(#card)">${R}${z}</g>
  <rect x="${x.x}" y="${x.y}" width="${x.w}" height="${x.h}" rx="26" fill="none" stroke="${g}" stroke-width="5"/>
  ${U}
  ${H}
  ${K}
</svg>`},O=e=>{let t=document.createElement(`div`);t.style.cssText=`position:fixed;left:-99999px;top:0;visibility:hidden;pointer-events:none`,t.innerHTML=e,document.body.append(t);try{let e=t.firstElementChild,n=t=>e.querySelector(`#${t}`),r=n(`stamp`);if(r){let e=e=>{let t=n(e).getBBox();return t.x+t.width},t=Math.max(e(`title`),e(`stats`))+S.w/2+36;r.setAttribute(`transform`,`translate(${t} 194) rotate(-8)`)}let i=n(`mini-svg`),a=i.getBBox();i.setAttribute(`viewBox`,`${a.x-12} ${a.y-12} ${a.width+24} ${a.height+24}`);let o=C*(a.width+24)/(a.height+24);return i.setAttribute(`width`,o),n(`mini`).setAttribute(`transform`,`translate(${1016-o} 56)`),e.outerHTML}finally{t.remove()}},k=async(e,t)=>{let n=await l(),r=c.get(e);await document.fonts.load(`92px 'CityEx Sans'`,`${r.short}制霸全`);let i=O(D(e,t,n));return d(i,f,p,h,`城市制霸-${r.short}.png`)};export{k as exportProvinceImage};