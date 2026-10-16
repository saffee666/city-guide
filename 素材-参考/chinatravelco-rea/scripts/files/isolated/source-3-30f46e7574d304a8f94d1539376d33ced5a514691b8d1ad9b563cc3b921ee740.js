(function(){var p=(location.pathname.split('/').pop()||'index.html');
document.querySelectorAll('.nav-links>a').forEach(function(a){ if(a.getAttribute('href')===p) a.classList.add('on'); });
document.querySelectorAll('.nav-links .hasmega').forEach(function(w){
  var top=w.querySelector(':scope>a'); if(!top) return;
  if(top.getAttribute('href')===p){ top.classList.add('on'); return; }
  var hit=Array.prototype.some.call(w.querySelectorAll('.mega a[href]'),function(a){
    var h=a.getAttribute('href')||''; return h===p||h.indexOf(p+'?')===0; });
  if(hit) top.classList.add('on');
});})();