const buttons=[...document.querySelectorAll('.open-photo')];
const box=document.querySelector('.lightbox');
const pic=document.querySelector('.lightbox-img');
const count=document.querySelector('.count');
const imgs=buttons.map(b=>{const i=b.querySelector('img');return{src:i.src,alt:i.alt}});
let n=0,sx=0;
function render(){pic.src=imgs[n].src;pic.alt=imgs[n].alt;count.textContent=`${n+1} / ${imgs.length}`}
function open(i){n=i;render();box.classList.add('show');box.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}
function close(){box.classList.remove('show');box.setAttribute('aria-hidden','true');document.body.style.overflow=''}
function prev(){n=(n-1+imgs.length)%imgs.length;render()}
function next(){n=(n+1)%imgs.length;render()}
buttons.forEach((b,i)=>b.addEventListener('click',()=>open(i)));
document.querySelector('.close').onclick=close;
document.querySelector('.prev').onclick=prev;
document.querySelector('.next').onclick=next;
box.onclick=e=>{if(e.target===box)close()};
document.addEventListener('keydown',e=>{if(!box.classList.contains('show'))return;if(e.key==='Escape')close();if(e.key==='ArrowLeft')prev();if(e.key==='ArrowRight')next()});
box.addEventListener('touchstart',e=>sx=e.changedTouches[0].screenX,{passive:true});
box.addEventListener('touchend',e=>{const d=e.changedTouches[0].screenX-sx;if(Math.abs(d)>50)(d>0?prev:next)()},{passive:true});