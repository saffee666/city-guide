
(function(){
  var SEL='.magcard,.rc,.hub-card';
  if(window.matchMedia&&window.matchMedia('(max-width:768px)').matches)return; /* skip on mobile/touch */
  function ripple(el,e){var r=el.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;
    var md=Math.max(Math.hypot(x,y),Math.hypot(x-r.width,y),Math.hypot(x,y-r.height),Math.hypot(x-r.width,y-r.height));
    var d=document.createElement('span');d.className='fx-ripple';
    d.style.width=d.style.height=(md*2)+'px';d.style.left=(x-md)+'px';d.style.top=(y-md)+'px';
    el.appendChild(d);requestAnimationFrame(function(){d.style.transform='scale(1)';d.style.opacity='0';});
    setTimeout(function(){d.remove();},740);}
  function ensure(el){if(el.dataset.fx)return;el.dataset.fx='1';
    if(getComputedStyle(el).position==='static')el.style.position='relative';
    el.classList.add('cardfx');
    var h=document.createElement('span');h.className='fx-holo';el.appendChild(h);
    var g=document.createElement('span');g.className='fx-glow';el.appendChild(g);
    el.addEventListener('mousemove',function(e){var r=el.getBoundingClientRect();
      var px=(e.clientX-r.left)/r.width,py=(e.clientY-r.top)/r.height;
      el.style.setProperty('--px',(px*100).toFixed(1));el.style.setProperty('--py',(py*100).toFixed(1));
      el.style.setProperty('--gi','1');
      var ry=(px-0.5)*13,rx=-(py-0.5)*13;
      el.style.transform='perspective(900px) rotateX('+rx.toFixed(2)+'deg) rotateY('+ry.toFixed(2)+'deg) translateY(-4px)';});
    el.addEventListener('mouseleave',function(){el.style.transform='';el.style.setProperty('--gi','0');});
    el.addEventListener('click',function(e){ripple(el,e);});}
  function init(){document.querySelectorAll(SEL).forEach(ensure);}
  if(document.readyState!=='loading')init();else document.addEventListener('DOMContentLoaded',init);
  new MutationObserver(init).observe(document.documentElement,{childList:true,subtree:true});
})();
