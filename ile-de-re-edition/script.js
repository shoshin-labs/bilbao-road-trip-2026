document.documentElement.classList.add('js');

const assets = {
  ferry: '../assets/ferry.svg',
  road: '../assets/road.svg',
  city: '../assets/city.svg',
  island: '../assets/island.svg',
};

const dayCards = [
  {
    city: 'La Rochelle',
    day: 'Fri 4 Sep',
    title: 'Arrive, check in, keep it easy.',
    summary: 'The only job is to get off the ferry, make the drive, and settle beside the harbour without overdoing the first night.',
    bullets: ['Ferry from Jersey at 09:40', 'Easy dinner near the old port', 'Sleep early'],
    cta: 'Open La Rochelle map',
    href: 'https://www.google.com/maps/search/?api=1&query=Novotel+La+Rochelle+Centre',
    key: 'ferry'
  },
  {
    city: 'Île de Ré',
    day: 'Sat 5 Sep',
    title: 'Bike the island properly.',
    summary: 'Use the extra night to do the island at a gentle pace: villages, beach, oysters, and a long lunch are the point.',
    bullets: ['Start after breakfast', 'Ride Saint-Martin-de-Ré or La Flotte', 'Finish with a beach stop or oyster lunch'],
    cta: 'Open Île de Ré map',
    href: 'https://www.google.com/maps/search/?api=1&query=%C3%8Ele+de+R%C3%A9',
    key: 'island'
  },
  {
    city: 'Bilbao',
    day: 'Sun 6 Sep',
    title: 'Drive south and make Bilbao the base.',
    summary: 'Take the long transfer day, arrive with enough daylight to unpack, then finish with pintxos in Casco Viejo.',
    bullets: ['Leave La Rochelle early', 'One lunch stop on the road', 'Casco Viejo for the first evening'],
    cta: 'Open Bilbao map',
    href: 'https://www.google.com/maps/search/?api=1&query=Jose+Luis+Goioaga+Etorbidea+22+Altzaga',
    key: 'road'
  },
  {
    city: 'Bilbao',
    day: 'Mon 7 Sep',
    title: 'Do the Guggenheim day.',
    summary: 'This is the obvious first Bilbao move: the museum, the river, and one good lunch or coffee stop nearby.',
    bullets: ['Guggenheim in the morning', 'Riverfront walk after', 'Dinner somewhere simple but good'],
    cta: 'Open Guggenheim map',
    href: 'https://www.google.com/maps/search/?api=1&query=Guggenheim+Museum+Bilbao',
    key: 'city',
    featured: true
  },
  {
    city: 'Bilbao',
    day: 'Tue 8 Sep',
    title: 'Take the coast day.',
    summary: 'Get out to the sea for a change of pace — Getxo, Plentzia, Sopelana, or even Gaztelugatxe if you want the longer version.',
    bullets: ['Pick one beach base', 'Keep lunch by the water', 'Return for a relaxed evening'],
    cta: 'Open beach ideas',
    href: 'https://www.google.com/maps/search/?api=1&query=Bilbao+beach+day+Getxo+Plentzia+Sopelana',
    key: 'road',
    featured: true
  },
  {
    city: 'Bilbao',
    day: 'Wed 9 Sep',
    title: 'Use the old town for food.',
    summary: 'This is the day for wandering bars, eating slowly, and letting Casco Viejo do the work rather than chasing a strict itinerary.',
    bullets: ['Long pintxos lunch', 'Casual wandering in the old town', 'Book one nice dinner if you want it'],
    cta: 'Open Casco Viejo',
    href: 'https://www.google.com/maps/search/?api=1&query=Casco+Viejo+Bilbao+pintxos',
    key: 'ferry',
    featured: true
  },
  {
    city: 'Bilbao',
    day: 'Thu 10 Sep',
    title: 'Keep one flex day open.',
    summary: 'This is the buffer day: market, lookout, funicular, or just a slower morning followed by a late lunch.',
    bullets: ['Sleep in if needed', 'Pick one small outing', 'Leave room for a better dinner'],
    cta: 'Open funicular ideas',
    href: 'https://www.google.com/maps/search/?api=1&query=Bilbao+funicular',
    key: 'city',
    featured: true
  },
  {
    city: 'Bilbao',
    day: 'Fri 11 Sep',
    title: 'Use the last Bilbao day well.',
    summary: 'Repeat the best bits: a river walk, one last lunch, and any place you missed earlier in the week.',
    bullets: ['Revisit your favourite spot', 'Leave the afternoon loose', 'Finish with a proper dinner'],
    cta: 'Open riverfront walk',
    href: 'https://www.google.com/maps/search/?api=1&query=Bilbao+riverfront+walk',
    key: 'road',
    featured: true
  },
  {
    city: 'Bordeaux',
    day: 'Sat 12 Sep',
    title: 'Drive to Bordeaux and keep it light.',
    summary: 'A shorter hop now: leave Bilbao in the morning, check in, and save the city for the evening.',
    bullets: ['Breakfast and pack once', 'Arrive in the afternoon', 'Simple evening on foot'],
    cta: 'Open Bordeaux map',
    href: 'https://www.google.com/maps/search/?api=1&query=Novotel+Bordeaux+Centre+Ville',
    key: 'city'
  },
  {
    city: 'Home',
    day: 'Sun 13 Sep',
    title: 'Get back to Jersey with margin.',
    summary: 'Keep the final day calm so the ferry feels like the end of the trip, not another task.',
    bullets: ['Leave Bordeaux early', 'Arrive in St Malo with a buffer', 'Ferry home at 18:00'],
    cta: 'Back to top',
    href: '#top',
    key: 'ferry'
  }
];

const photoCards = [
  {
    key: 'island',
    title: 'Île de Ré day',
    text: 'Bike the island, stop in Saint-Martin-de-Ré or La Flotte, and leave room for oysters or a beach lunch.',
    cta: 'Open Île de Ré map',
    href: 'https://www.google.com/maps/search/?api=1&query=%C3%8Ele+de+R%C3%A9'
  },
  {
    key: 'ferry',
    title: 'Guggenheim day',
    text: 'Do the museum properly, then stay by the river for coffee, lunch, or a slow wander.',
    cta: 'Open Guggenheim map',
    href: 'https://www.google.com/maps/search/?api=1&query=Guggenheim+Museum+Bilbao'
  },
  {
    key: 'road',
    title: 'Beach day',
    text: 'Head to Getxo, Plentzia, Sopelana, or San Juan de Gaztelugatxe if you want a fuller coastal day.',
    cta: 'Open beach ideas',
    href: 'https://www.google.com/maps/search/?api=1&query=Bilbao+beach+day+Getxo+Plentzia+Sopelana'
  },
  {
    key: 'city',
    title: 'Nice restaurant night',
    text: 'Book one good dinner in Bilbao — pintxos, tasting menu, or a long relaxed sit-down meal.',
    cta: 'Find restaurants',
    href: 'https://www.google.com/maps/search/?api=1&query=restaurants+Bilbao'
  },
  {
    key: 'ferry',
    title: 'Old town pintxos',
    text: 'Use Casco Viejo for a roaming lunch, bar hop, and a low-pressure evening with food and drinks.',
    cta: 'Open Casco Viejo',
    href: 'https://www.google.com/maps/search/?api=1&query=Casco+Viejo+Bilbao+pintxos'
  },
  {
    key: 'road',
    title: 'Riverfront walk',
    text: 'The river path links the city together and is ideal for an easy morning or after-dinner walk.',
    cta: 'Open riverfront walk',
    href: 'https://www.google.com/maps/search/?api=1&query=Bilbao+riverfront+walk'
  },
  {
    key: 'city',
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
      <div class="art"><img src="${assets[card.key]}" alt="${card.title}" loading="lazy"></div>
      <div class="caption">
        <p class="label">Trip idea</p>
        <h3>${card.title}</h3>
        <p>${card.text}</p>
        <div class="action-row">
          <a class="button light" href="${card.href}" target="_blank" rel="noreferrer">${card.cta}</a>
        </div>
      </div>
    </article>
  `).join('');
}

const dayGrid = document.getElementById('dayGrid');
if (dayGrid) {
  dayGrid.innerHTML = dayCards.map((card) => `
    <article class="plan-card reveal ${card.featured ? 'featured' : ''}">
      <div class="plan-topline">
        <span class="day">${card.day}</span>
        <span class="city">${card.city}</span>
      </div>
      <h3>${card.title}</h3>
      <p>${card.summary}</p>
      <ul class="plan-list">
        ${card.bullets.map((item) => `<li>${item}</li>`).join('')}
      </ul>
      <div class="action-row">
        <a class="button light" href="${card.href}" ${card.href.startsWith('http') ? 'target="_blank" rel="noreferrer"' : ''}>${card.cta}</a>
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
