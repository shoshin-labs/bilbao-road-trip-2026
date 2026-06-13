
const cards = document.getElementById('cards');
const data = window.ACCOMMODATIONS || [];
const stopLabels = {"la-rochelle":"La Rochelle", bilbao:"Bilbao", bordeaux:"Bordeaux"};
function render(filter='all'){
  cards.innerHTML='';
  data.filter(x=>filter==='all'||x.stop===filter).forEach((item, idx)=>{
    const el=document.createElement('article');
    el.className='accom-card';
    el.dataset.stop=item.stop;
    const links=Object.entries(item.links||{}).map(([label,url])=>`<a href="${url}" target="_blank" rel="noreferrer">${label}</a>`).join('');
    el.innerHTML=`
      <div class="card-top"><div><div class="city">${stopLabels[item.stop]} · ${item.area}</div><h3>${item.name}</h3></div><span class="rank">${item.rank}</span></div>
      <div class="meta"><span>${item.type}</span><span>${item.score}</span></div>
      <p>${item.fit}</p>
      <div class="signal"><b>Terrace / outdoor</b>${item.outdoor}</div>
      <div class="signal"><b>Parking</b>${item.parking}</div>
      <button class="toggle" aria-expanded="false">Show concern + links</button>
      <div class="details hidden"><p><strong>Check before booking:</strong> ${item.concern}</p><div class="card-actions">${links}</div></div>`;
    el.querySelector('.toggle').addEventListener('click', e=>{
      const d=el.querySelector('.details'); const open=d.classList.toggle('hidden')===false;
      e.currentTarget.textContent=open?'Hide details':'Show concern + links';
      e.currentTarget.setAttribute('aria-expanded', String(open));
    });
    cards.appendChild(el);
  });
}
render();
document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  render(btn.dataset.filter);
}));
const checks=document.querySelectorAll('[data-check]');
checks.forEach(input=>{
  const key='bilbao-trip-check-'+input.dataset.check;
  input.checked=localStorage.getItem(key)==='1';
  input.addEventListener('change',()=>localStorage.setItem(key,input.checked?'1':'0'));
});
document.querySelectorAll('[data-copy]').forEach(btn=>btn.addEventListener('click',async()=>{
  await navigator.clipboard.writeText(btn.dataset.copy);
  const old=btn.textContent; btn.textContent='Copied'; setTimeout(()=>btn.textContent=old,1200);
}));


function linkButtons(links){ return Object.entries(links||{}).map(([label,url])=>`<a href="${url}" target="_blank" rel="noreferrer">${label}</a>`).join(''); }
function renderSimpleCards(){
  const ex=document.getElementById('exhibitionCards');
  if(ex) ex.innerHTML=(window.EXHIBITIONS||[]).map(x=>`<article class="mini-card"><span>${x.dates}</span><h3>${x.title}</h3><p>${x.note}</p><a href="${x.link}" target="_blank" rel="noreferrer">Official exhibition</a></article>`).join('');
  const food=document.getElementById('restaurantCards');
  if(food) food.innerHTML=(window.RESTAURANTS||[]).map(x=>`<article class="mini-card"><span>${x.cat} · ${x.area}</span><h3>${x.name}</h3><p><strong>${x.style}</strong></p><p>${x.why}</p><p><b>Booking:</b> ${x.booking}</p><div class="card-actions">${linkButtons(x.links)}</div></article>`).join('');
  const clusters=document.getElementById('clusterCards');
  if(clusters) clusters.innerHTML=(window.CLUSTERS||[]).map(x=>`<article class="mini-card map-card"><span>Map cluster</span><h3>${x.title}</h3><p>${x.logic}</p><p>${x.fits}</p><a href="${x.map}" target="_blank" rel="noreferrer">Open map route</a></article>`).join('');
  const acts=document.getElementById('activityCards');
  if(acts) acts.innerHTML=(window.ACTIVITIES||[]).map(x=>`<article class="accom-card"><div class="city">Week idea</div><h3>${x.title}</h3><p>${x.why}</p><div class="meta"><span>${x.time}</span></div><div class="signal"><b>Watch out</b>${x.caution}</div><div class="card-actions"><a href="${x.map}" target="_blank" rel="noreferrer">Open map</a></div></article>`).join('');
}
renderSimpleCards();
