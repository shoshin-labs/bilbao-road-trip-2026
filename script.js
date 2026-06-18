const linkButtons = (links) => Object.entries(links || {})
  .map(([label, url]) => `<a href="${url}" target="_blank" rel="noreferrer">${label}</a>`)
  .join('');

function renderSimpleCards() {
  const ex = document.getElementById('exhibitionCards');
  if (ex) {
    ex.innerHTML = (window.EXHIBITIONS || [])
      .map((x) => `<article class="mini-card"><span>${x.dates}</span><h3>${x.title}</h3><p>${x.note}</p><a href="${x.link}" target="_blank" rel="noreferrer">Official exhibition</a></article>`)
      .join('');
  }

  const food = document.getElementById('restaurantCards');
  if (food) {
    food.innerHTML = (window.RESTAURANTS || [])
      .map((x) => `<article class="mini-card"><span>${x.cat} · ${x.area}</span><h3>${x.name}</h3><p><strong>${x.style}</strong></p><p>${x.why}</p><p><b>Booking:</b> ${x.booking}</p><div class="card-actions">${linkButtons(x.links)}</div></article>`)
      .join('');
  }

  const clusters = document.getElementById('clusterCards');
  if (clusters) {
    clusters.innerHTML = (window.CLUSTERS || [])
      .map((x) => `<article class="mini-card map-card"><span>Map cluster</span><h3>${x.title}</h3><p>${x.logic}</p><p>${x.fits}</p><a href="${x.map}" target="_blank" rel="noreferrer">Open map route</a></article>`)
      .join('');
  }

  const acts = document.getElementById('activityCards');
  if (acts) {
    acts.innerHTML = (window.ACTIVITIES || [])
      .map((x) => `<article class="accom-card"><div class="city">Week idea</div><h3>${x.title}</h3><p>${x.why}</p><div class="meta"><span>${x.time}</span></div><div class="signal"><b>Watch out</b>${x.caution}</div><div class="card-actions"><a href="${x.map}" target="_blank" rel="noreferrer">Open map</a></div></article>`)
      .join('');
  }
}

renderSimpleCards();


