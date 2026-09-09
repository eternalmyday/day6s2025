const buttons=[...document.querySelectorAll('.open-photo')],box=document.querySelector('.lightbox'),img=document.querySelector('.viewer-img'),count=document.querySelector('.count');
const photos=buttons.map(b=>{const i=b.querySelector('img');return{src:i.src,alt:i.alt}});let n=0,sx=0;
function draw(){img.src=photos[n].src;img.alt=photos[n].alt;count.textContent=`${n+1} / ${photos.length}`}
function open(i){n=i;draw();box.classList.add('show');box.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}
function close(){box.classList.remove('show');box.setAttribute('aria-hidden','true');document.body.style.overflow=''}
function prev(){n=(n-1+photos.length)%photos.length;draw()}function next(){n=(n+1)%photos.length;draw()}
buttons.forEach((b,i)=>b.onclick=()=>open(i));document.querySelector('.close').onclick=close;document.querySelector('.prev').onclick=prev;document.querySelector('.next').onclick=next;
box.onclick=e=>{if(e.target===box)close()};document.onkeydown=e=>{if(!box.classList.contains('show'))return;if(e.key==='Escape')close();if(e.key==='ArrowLeft')prev();if(e.key==='ArrowRight')next()};
box.addEventListener('touchstart',e=>sx=e.changedTouches[0].screenX,{passive:true});box.addEventListener('touchend',e=>{let d=e.changedTouches[0].screenX-sx;if(Math.abs(d)>50)(d>0?prev:next)()},{passive:true});