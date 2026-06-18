document.documentElement.classList.add('js');

const assets = {
  ferry: 'assets/ferry.svg',
  road: 'assets/road.svg',
  city: 'assets/city.svg',
  island: 'assets/island.svg',
};

const photoCards = [
  {
    image: 'assets/island.svg',
    title: 'Île de Ré day',
    text: 'Cross the bridge from La Rochelle, then bike village to village and choose between the Phare des Baleines, a beach, or a long oyster lunch.',
    cta: 'Open Île de Ré bridge route',
    href: 'https://www.google.com/maps/dir/?api=1&origin=La+Rochelle&destination=Rivedoux-Plage&travelmode=driving'
  },
  {
    image: 'assets/guggenheim.svg',
    title: 'Guggenheim day',
    text: 'Start with the museum, then stay on the Abandoibarra riverfront for coffee, a lunch stop, or a slow wander.',
    cta: 'Open Guggenheim map',
    href: 'https://www.google.com/maps/search/?api=1&query=Guggenheim+Museum+Bilbao'
  },
  {
    image: 'assets/city.svg',
    title: 'Gallery loop',
    text: 'Use Museo de Bellas Artes, Azkuna Zentroa, and Rekalde for a slower art day between the Guggenheim and the river.',
    cta: 'Find Bilbao galleries',
    href: 'https://www.google.com/maps/search/?api=1&query=Museo+de+Bellas+Artes+de+Bilbao+Azkuna+Zentroa+Rekalde'
  },
  {
    image: 'assets/beach.svg',
    title: 'Coast day',
    text: 'Use Getxo, Ereaga beach, Plentzia, or Sopelana for an easy seaside day and a lunch that becomes part of the outing.',
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
