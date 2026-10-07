// Table of contents (auto-built from article headings), scroll highlighting and reading progress.
(function(){
  var slug=function(t){return t.toLowerCase().replace(/^\d+\.\s*/,'').replace(/[’']/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');};
  document.querySelectorAll('[data-toc-auto]').forEach(function(nav){
    var hs=[].slice.call(document.querySelectorAll('.prose h2'));
    if(hs.length<2){nav.remove();return;}
    var ol=nav.querySelector('ol'),used={};
    hs.forEach(function(h){
      var id=h.id||slug(h.textContent)||'section';while(used[id])id+='-2';used[id]=1;h.id=id;
      var li=document.createElement('li'),a=document.createElement('a');
      a.href='#'+id;a.textContent=h.textContent.replace(/^\d+\.\s*/,'');a.setAttribute('data-toc-link','');
      li.appendChild(a);ol.appendChild(li);
    });
    nav.hidden=false;
  });
  var links=[].slice.call(document.querySelectorAll('[data-toc-link]'));
  var targets=links.map(function(a){return document.getElementById(decodeURIComponent(a.hash.slice(1)));});
  var bar=document.querySelector('[data-progress]'),ticking=false;
  function update(){
    ticking=false;var y=window.scrollY+140,cur=0;
    var tops=targets.map(function(t){return t?t.getBoundingClientRect().top+window.scrollY:Infinity;});
    if(tops.length&&y>=tops[0])tops.forEach(function(tp,i){if(tp<=y)cur=i;});
    links.forEach(function(a,i){i===cur?a.setAttribute('aria-current','location'):a.removeAttribute('aria-current');});
    if(bar){var h=document.documentElement.scrollHeight-window.innerHeight;bar.style.width=(h>0?Math.min(100,window.scrollY/h*100):0)+'%';}
  }
  window.addEventListener('scroll',function(){if(!ticking){ticking=true;requestAnimationFrame(update);}},{passive:true});
  update();
  window.addEventListener('load',update);
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(update);
})();
