
const cards = document.getElementById('cards');
const data = window.ACCOMMODATIONS || [];
const stopLabels = {"la-rochelle":"La Rochelle", bilbao:"Bilbao", bordeaux:"Bordeaux"};
const state = { stop: 'all', provider: 'all', priceBand: 'all' };
function money(n){ return typeof n === 'number' ? `£${n.toLocaleString('en-GB')}` : 'Check live'; }
function priceMarkup(item){
  if(typeof item.priceNightGbp === 'number'){
    const total = typeof item.priceTotalGbp === 'number' ? `${money(item.priceTotalGbp)} total · ` : '';
    return `<div class="price"><b>${money(item.priceNightGbp)}/night</b><span>${total}${item.priceLabel || item.priceStatus || 'Price for our dates'}</span></div>`;
  }
  return `<div class="price muted"><b>Price for our dates: check live</b><span>${item.priceStatus || 'Open the provider link to confirm the live 2-guest price for our stay dates.'}</span></div>`;
}
function passesFilters(item){
  const stopOk = state.stop === 'all' || item.stop === state.stop;
  const providerOk = state.provider === 'all' || item.provider === state.provider || (state.provider === 'Official' && ['Official','Accor'].includes(item.provider));
  const priceOk = state.priceBand === 'all' || (typeof item.priceNightGbp === 'number' && item.priceNightGbp >= 100 && item.priceNightGbp <= 300);
  return stopOk && providerOk && priceOk;
}
function render(){
  cards.innerHTML='';
  const filtered = data.filter(passesFilters);
  const resultCount = document.getElementById('resultCount');
  if(resultCount){
    const priced = filtered.filter(x=>typeof x.priceNightGbp === 'number').length;
    resultCount.textContent = `${filtered.length} listing${filtered.length===1?'':'s'} shown · ${priced} priced for our dates`;
  }
  filtered.forEach((item)=>{
    const el=document.createElement('article');
    el.className='accom-card';
    el.dataset.stop=item.stop;
    el.dataset.provider=item.provider || 'Unknown';
    if(typeof item.priceNightGbp === 'number') el.dataset.priceNight=item.priceNightGbp;
    const links=Object.entries(item.links||{}).map(([label,url])=>`<a href="${url}" target="_blank" rel="noreferrer">${label}</a>`).join('');
    el.innerHTML=`
      <div class="card-top"><div><div class="city">${stopLabels[item.stop]} · ${item.area}</div><h3>${item.name}</h3></div><span class="rank">${item.rank}</span></div>
      <div class="meta"><span>${item.provider || 'Provider TBC'}</span><span>${item.type}</span><span>${item.score}</span></div>
      ${priceMarkup(item)}
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
  state.stop = btn.dataset.filter;
  render();
}));
document.querySelectorAll('.provider-filter').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.provider-filter').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  state.provider = btn.dataset.provider;
  render();
}));
document.querySelectorAll('.price-filter').forEach(btn=>btn.addEventListener('click',()=>{
  const active = btn.classList.toggle('active');
  state.priceBand = active ? btn.dataset.price : 'all';
  render();
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
