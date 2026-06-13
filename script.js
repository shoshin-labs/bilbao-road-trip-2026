
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
