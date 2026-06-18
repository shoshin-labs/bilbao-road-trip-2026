document.documentElement.classList.add('js');

const assets = {
  ferry: 'assets/ferry.svg',
  road: 'assets/road.svg',
  city: 'assets/city.svg',
  island: 'assets/island.svg',
};

const photoCards = [
  {
    image: assets.island,
    title: 'Île de Ré day',
    text: 'Bike the island, stop in Saint-Martin-de-Ré or La Flotte, and leave room for oysters or a beach lunch.',
    cta: 'Open Île de Ré map',
    href: 'https://www.google.com/maps/search/?api=1&query=%C3%8Ele+de+R%C3%A9'
  },
  {
    image: 'assets/guggenheim.svg',
    title: 'Guggenheim day',
    text: 'Do the museum properly, then stay by the river for coffee, lunch, or a slow wander.',
    cta: 'Open Guggenheim map',
    href: 'https://www.google.com/maps/search/?api=1&query=Guggenheim+Museum+Bilbao'
  },
  {
    image: 'assets/beach.svg',
    title: 'Beach day',
    text: 'Head to Getxo, Plentzia, Sopelana, or San Juan de Gaztelugatxe if you want a fuller coastal day.',
    cta: 'Open beach ideas',
    href: 'https://www.google.com/maps/search/?api=1&query=Bilbao+beach+day+Getxo+Plentzia+Sopelana'
  },
  {
    image: 'assets/pintxos.svg',
    title: 'Old town pintxos',
    text: 'Use Casco Viejo for a roaming lunch, bar hop, and a low-pressure evening with food and drinks.',
    cta: 'Open Casco Viejo',
    href: 'https://www.google.com/maps/search/?api=1&query=Casco+Viejo+Bilbao+pintxos'
  },
  {
    image: 'assets/riverwalk.svg',
    title: 'Riverfront walk',
    text: 'The river path links the city together and is ideal for an easy morning or after-dinner walk.',
    cta: 'Open riverfront walk',
    href: 'https://www.google.com/maps/search/?api=1&query=Bilbao+riverfront+walk'
  },
  {
    image: 'assets/restaurant.svg',
    title: 'Nice restaurant night',
    text: 'Book one good dinner in Bilbao — pintxos, tasting menu, or a long relaxed sit-down meal.',
    cta: 'Find restaurants',
    href: 'https://www.google.com/maps/search/?api=1&query=restaurants+Bilbao'
  },
  {
    image: 'assets/funicular.svg',
    title: 'Flex day option',
    text: 'Leave one day open for a market, a funicular, a lookout, or a half-day inland run.',
    cta: 'Open funicular ideas',
    href: 'https://www.google.com/maps/search/?api=1&query=Bilbao+funicular'
  }
];

for (const img of document.querySelectorAll('[data-photo]')) {
  const key = img.dataset.photo;
  if (assets[key]) img.src = assets[key];
}

const grid = document.getElementById('photoGrid');
if (grid) {
  grid.innerHTML = photoCards.map((card) => `
    <article class="photo-card reveal">
      <div class="art"><img src="${card.image}" alt="${card.title}" loading="lazy"></div>
      <div class="caption">
        <p class="label">Bilbao idea</p>
        <h3>${card.title}</h3>
        <p>${card.text}</p>
        <div class="action-row">
          <a class="button light" href="${card.href}" target="_blank" rel="noreferrer">${card.cta}</a>
        </div>
      </div>
    </article>
  `).join('');
}

const revealTargets = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }
  }
}, { threshold: 0.16 });

revealTargets.forEach((el) => io.observe(el));

window.addEventListener('load', () => {
  requestAnimationFrame(() => revealTargets.forEach((el) => el.classList.add('is-visible')));
});
