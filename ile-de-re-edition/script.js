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
    title: 'Land, stretch your legs, keep dinner simple.',
    summary: 'Ferry, drive, check in. After that, one harbour walk and an easy dinner is enough.',
    bullets: ['Walk the Vieux-Port at dusk', 'Aquarium de La Rochelle if it rains', 'Seafood near the harbour or Marché Central'],
    cta: 'Open St Malo → La Rochelle route',
    href: 'https://www.google.com/maps/dir/?api=1&origin=Gare+Maritime+du+Naye+Saint-Malo&destination=Novotel+La+Rochelle+Centre&travelmode=driving',
    key: 'ferry'
  },
  {
    city: 'Île de Ré',
    day: 'Sat 5 Sep',
    title: 'Cross the bridge, then use the island properly.',
    summary: 'Take the Pont de l’Île de Ré from La Rochelle, then bike, lunch, and beach.',
    bullets: ['Cross early via the bridge and avoid making it a project', 'Pick one village loop: Saint-Martin, La Flotte, or Ars-en-Ré', 'Finish with oysters or a long lunch'],
    cta: 'Open Île de Ré bridge route',
    href: 'https://www.google.com/maps/dir/?api=1&origin=La+Rochelle&destination=Rivedoux-Plage&travelmode=driving',
    key: 'island'
  },
  {
    city: 'Bilbao',
    day: 'Sun 6 Sep',
    title: 'Drive south, unpack, pick an easy first evening.',
    summary: 'The drive is the task. Bilbao can stay light until you land.',
    bullets: ['Leave La Rochelle early', 'Lunch in Bayonne, then keep rolling south', 'Choose pintxos, a river walk, or an early night'],
    cta: 'Open La Rochelle → Bilbao route',
    href: 'https://www.google.com/maps/dir/?api=1&origin=Novotel+La+Rochelle+Centre&destination=Jose+Luis+Goioaga+Etorbidea+22+Altzaga&travelmode=driving',
    secondaryCta: 'Open Bayonne lunch stop',
    secondaryHref: 'https://www.google.com/maps/dir/?api=1&origin=Novotel+La+Rochelle+Centre&destination=Bayonne&travelmode=driving',
    key: 'road'
  },
  {
    city: 'Bilbao',
    day: 'Mon 7 Sep',
    title: 'Give the Guggenheim the morning.',
    summary: 'Start there, then let the river or lunch decide the rest.',
    bullets: ['Guggenheim in the morning', 'Riverfront or Abandoibarra after', 'Coffee, lunch, or an early dinner in the centre'],
    cta: 'Open Guggenheim map',
    href: 'https://www.google.com/maps/search/?api=1&query=Guggenheim+Museum+Bilbao',
    key: 'city',
    featured: true
  },
  {
    city: 'Bilbao',
    day: 'Tue 8 Sep',
    title: 'Use the coast for a change of pace.',
    summary: 'Keep it easy: one coastal stop, one lunch, one walk, then back to Bilbao.',
    bullets: ['Pick Getxo, Ereaga, Plentzia, or Sopelana', 'Lunch by the water', 'Return to Bilbao for a relaxed evening'],
    cta: 'Open beach ideas',
    href: 'https://www.google.com/maps/search/?api=1&query=Bilbao+beach+day+Getxo+Plentzia+Sopelana',
    key: 'road',
    featured: true
  },
  {
    city: 'Bilbao',
    day: 'Wed 9 Sep',
    title: 'Let Casco Viejo do the work.',
    summary: 'Pintxos, the market, a slow wander. That is enough for the day.',
    bullets: ['Long pintxos lunch or Mercado de la Ribera', 'Wander Casco Viejo without a route', 'Book dinner only if you still want it'],
    cta: 'Open Casco Viejo',
    href: 'https://www.google.com/maps/search/?api=1&query=Casco+Viejo+Bilbao+pintxos',
    key: 'ferry',
    featured: true
  },
  {
    city: 'Bilbao',
    day: 'Thu 10 Sep',
    title: 'Keep one day loose on purpose.',
    summary: 'This is the buffer. Sleep in, do one outing, or leave it wide open.',
    bullets: ['Sleep in if needed', 'Choose one small outing or viewpoint', 'Leave room for dinner or a second plan'],
    cta: 'Open funicular ideas',
    href: 'https://www.google.com/maps/search/?api=1&query=Bilbao+funicular',
    key: 'city',
    featured: true
  },
  {
    city: 'Bilbao',
    day: 'Fri 11 Sep',
    title: 'Repeat the best bits, then leave space.',
    summary: 'One last river walk, one last lunch, and no pressure to squeeze more in.',
    bullets: ['Revisit your favourite spot', 'Leave the afternoon open', 'Finish with a proper dinner if it feels right'],
    cta: 'Open riverfront walk',
    href: 'https://www.google.com/maps/search/?api=1&query=Bilbao+riverfront+walk',
    key: 'road',
    featured: true
  },
  {
    city: 'Bordeaux',
    day: 'Sat 12 Sep',
    title: 'Drive into Bordeaux, then keep the day light.',
    summary: 'This is the shorter hop after Bilbao: one clean drive, park once, and let Bordeaux stay walkable.',
    bullets: ['Leave Bilbao after breakfast', 'Arrive in Bordeaux in the afternoon', 'Choose a river walk, market browse, or easy evening'],
    cta: 'Open Bilbao → Bordeaux route',
    href: 'https://www.google.com/maps/dir/?api=1&origin=Jose+Luis+Goioaga+Etorbidea+22+Altzaga&destination=Novotel+Bordeaux+Centre+Ville&travelmode=driving',
    key: 'city'
  },
  {
    city: 'Home',
    day: 'Sun 13 Sep',
    title: 'Get back to Jersey with margin.',
    summary: 'Drive to St Malo with time in hand, then make the ferry the last easy step.',
    bullets: ['Leave Bordeaux after breakfast', 'Drive to St Malo in about 4h45', 'Ferry home at 18:00'],
    cta: 'Open St Malo route',
    href: 'https://www.google.com/maps/dir/?api=1&origin=Novotel+Bordeaux+Centre+Ville&destination=Gare+Maritime+du+Naye+Saint-Malo&travelmode=driving',
    key: 'ferry'
  }
];

const stopCards = [
  {
    city: 'La Rochelle',
    day: 'Arrival base',
    title: 'Use it for harbour time, not errands.',
    summary: 'It only needs to give you an easy first night and a calm reset.',
    bullets: ['Walk the Vieux-Port and harbour towers', 'Aquarium de La Rochelle if you want an indoor stop', 'Dinner near Marché Central or the old port'],
    cta: 'Open La Rochelle map',
    href: 'https://www.google.com/maps/search/?api=1&query=Vieux-Port,+La+Rochelle'
  },
  {
    city: 'Île de Ré',
    day: 'Island day',
    title: 'Pick two or three things and leave the rest loose.',
    summary: 'The island works best when it feels unrushed: ride, swim, eat, repeat.',
    bullets: ['Village loop: Saint-Martin-de-Ré, La Flotte, or Ars-en-Ré', 'Beach stop at Plage des Gollandières or Conche des Baleines', 'Oyster hut, market, or long lunch by the water'],
    cta: 'Open Île de Ré map',
    href: 'https://www.google.com/maps/search/?api=1&query=%C3%8Ele+de+R%C3%A9'
  },
  {
    city: 'Bordeaux',
    day: 'Final stop',
    title: 'Keep the last city walkable and simple.',
    summary: 'Bordeaux does not need a big plan. Stay on the quays and keep the night easy.',
    bullets: ['Riverfront walk and Pont de Pierre', 'Place de la Bourse + Miroir d’Eau', 'Chartrons, Cité du Vin, or Marché des Capucins if you have time'],
    cta: 'Open Bordeaux map',
    href: 'https://www.google.com/maps/search/?api=1&query=Bordeaux+quays'
  },
];

const photoCards = [
  {
    image: '../assets/island.svg',
    title: 'Île de Ré day',
    text: 'Bike village to village, then choose between the Phare des Baleines, a beach, or a long oyster lunch.',
    cta: 'Open Île de Ré map',
    href: 'https://www.google.com/maps/search/?api=1&query=%C3%8Ele+de+R%C3%A9'
  },
  {
    image: '../assets/guggenheim.svg',
    title: 'Guggenheim day',
    text: 'Start with the museum, then stay on the Abandoibarra riverfront for coffee, lunch, or a slow wander.',
    cta: 'Open Guggenheim map',
    href: 'https://www.google.com/maps/search/?api=1&query=Guggenheim+Museum+Bilbao'
  },
  {
    image: '../assets/city.svg',
    title: 'Gallery loop',
    text: 'Museo de Bellas Artes, Azkuna Zentroa, and Rekalde give Bilbao a slower art day.',
    cta: 'Find Bilbao galleries',
    href: 'https://www.google.com/maps/search/?api=1&query=Museo+de+Bellas+Artes+de+Bilbao+Azkuna+Zentroa+Rekalde'
  },
  {
    image: '../assets/beach.svg',
    title: 'Coast day',
    text: 'Getxo, Ereaga, Plentzia, or Sopelana all work for an easy seaside lunch and walk.',
    cta: 'Open beach ideas',
    href: 'https://www.google.com/maps/search/?api=1&query=Bilbao+beach+day+Getxo+Plentzia+Sopelana'
  },
  {
    image: '../assets/pintxos.svg',
    title: 'Old town pintxos',
    text: 'Casco Viejo and Mercado de la Ribera work for a roaming lunch, a few bar stops, and an evening that can stretch.',
    cta: 'Open Casco Viejo',
    href: 'https://www.google.com/maps/search/?api=1&query=Casco+Viejo+Bilbao+pintxos'
  },
  {
    image: '../assets/riverwalk.svg',
    title: 'Riverfront walk',
    text: 'The river path links the city together: Abandoibarra, the Guggenheim, and the centre all connect on foot.',
    cta: 'Open riverfront walk',
    href: 'https://www.google.com/maps/search/?api=1&query=Bilbao+riverfront+walk'
  },
  {
    image: '../assets/restaurant.svg',
    title: 'Nice dinner + walk',
    text: 'Book one proper dinner in Bilbao and pair it with a river walk or a slow drink near the centre.',
    cta: 'Find restaurants',
    href: 'https://www.google.com/maps/search/?api=1&query=restaurants+Bilbao'
  },
  {
    image: '../assets/funicular.svg',
    title: 'Flex day option',
    text: 'Leave one day open for the Funicular de Artxanda, Azkuna Zentroa, Mercado de la Ribera, or a half-day inland run.',
    cta: 'Open funicular ideas',
    href: 'https://www.google.com/maps/search/?api=1&query=Bilbao+funicular'
  }
];


const cardExtras = {
  'La Rochelle|Fri 4 Sep': {
    oneThing: 'Walk the Vieux-Port at dusk and call it a win.',
    food: 'Seafood by the old port or a low-key dinner near Marché Central.',
    rainy: 'Aquarium de La Rochelle, café time, or a covered market stop.'
  },
  'Île de Ré|Sat 5 Sep': {
    oneThing: 'Bike between Saint-Martin-de-Ré and La Flotte, then stop for oysters.',
    food: 'Oyster huts, beach cafés, or a long lunch in La Flotte or Saint-Martin.',
    rainy: 'Market villages, salt marsh roads, and a slower coffee-and-lunch island loop.'
  },
  'Bilbao|Sun 6 Sep': {
    oneThing: 'Do Casco Viejo for pintxos and nothing more.',
    food: 'Pintxos in Casco Viejo or a calm dinner near the river if you want to keep it simple.',
    rainy: 'A river café, an early dinner, or just head straight for bed and reset.'
  },
  'Bilbao|Mon 7 Sep': {
    oneThing: 'Do the Guggenheim properly and linger by the river after.',
    food: 'Lunch around Abandoibarra, then a coffee stop before you drift onward.',
    rainy: 'The Guggenheim, museum cafés, and a sheltered riverfront wander still work well.'
  },
  'Bilbao|Tue 8 Sep': {
    oneThing: 'Get to the coast and have a long lunch by the water.',
    food: 'Fish lunch in Getxo or Ereaga, or a terrace lunch in Plentzia if the weather is good.',
    rainy: 'Swap the beach for the promenade, Portugalete, or an indoor café-and-walk day.'
  },
  'Bilbao|Wed 9 Sep': {
    oneThing: 'Do a proper pintxos drift through Casco Viejo and the market.',
    food: 'Pintxos bars in Casco Viejo and a market lunch at Mercado de la Ribera.',
    rainy: 'The covered market, churches, cafés, and bar-hopping still make sense in bad weather.'
  },
  'Bilbao|Thu 10 Sep': {
    oneThing: 'Take the funicular up to Artxanda and look back over the city.',
    food: 'A long lunch, a market nibble, or a hilltop drink if you go up to Artxanda.',
    rainy: 'Azkuna Zentroa, Mercado de la Ribera, and a café crawl are your rainy-day safety net.'
  },
  'Bilbao|Fri 11 Sep': {
    oneThing: 'Do one last slow walk by the river and keep the rest open.',
    food: 'Book the dinner you actually want instead of squeezing in a random one.',
    rainy: 'If the weather turns, repeat the Guggenheim / café combo or drift to a market lunch.'
  },
  'Bordeaux|Sat 12 Sep': {
    oneThing: 'Walk Place de la Bourse and the Miroir d’Eau at sunset.',
    food: 'Chartrons wine bars, a simple bistro, or a canelé stop if you want something classic.',
    rainy: 'Cité du Vin, Marché des Capucins, and tram-linked café stops keep the day easy.'
  },
  'Home|Sun 13 Sep': {
    oneThing: 'Keep the drive efficient so the ferry stays easy.',
    food: 'Coffee, bakery stops, and one last roadside lunch if needed.',
    rainy: 'Nothing fancy — just use the buffer and avoid pressure.'
  },
};

const renderExtras = (card) => {
  const extra = cardExtras[`${card.city}|${card.day}`];
  if (!extra) return '';
  return `
    <div class="card-extras">
      <div class="extra-block">
        <p class="extra-label">If you only do one thing</p>
        <p class="extra-copy">${extra.oneThing}</p>
      </div>
      <div class="extra-block">
        <p class="extra-label">Good food</p>
        <p class="extra-copy">${extra.food}</p>
      </div>
      <div class="extra-block">
        <p class="extra-label">Rainy-day backup</p>
        <p class="extra-copy">${extra.rainy}</p>
      </div>
    </div>
  `;
};

const renderDayStack = (label) => {
  const match = label.match(/^([A-Za-z]{3})\s+(\d{1,2})(?:\s+([A-Za-z]{3}))?$/);
  if (!match) return `<span>${label}</span>`;
  const [, dow, day, mon = ''] = match;
  return `<span class="day-stack" aria-label="${label}"><span class="day-dow">${dow}</span><span class="day-day">${day}</span><span class="day-mon">${mon}</span></span>`;
};

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

const stopGrid = document.getElementById('stopGrid');
if (stopGrid) {
  stopGrid.innerHTML = stopCards.map((card) => `
    <article class="plan-card reveal">
      <div class="plan-topline">
        <span class="day">${card.day}</span>
        <span class="city">${card.city}</span>
      </div>
      <h3>${card.title}</h3>
      <p>${card.summary}</p>
      <ul class="plan-list">
        ${card.bullets.map((item) => `<li>${item}</li>`).join('')}
      </ul>
      <div class="card-extras">${renderExtras(card)}</div>
      <div class="action-row">
        <a class="button light" href="${card.href}" target="_blank" rel="noreferrer">${card.cta}</a>
      </div>
    </article>
  `).join('');
}

const dayGrid = document.getElementById('dayGrid');
if (dayGrid) {
  dayGrid.innerHTML = dayCards.map((card) => `
    <article class="plan-card reveal ${card.featured ? 'featured' : ''}">
      <div class="plan-topline">
        <span class="plan-date">${renderDayStack(card.day)}</span>
        <span class="plan-city">${card.city}</span>
      </div>
      <h3>${card.title}</h3>
      <p>${card.summary}</p>
      <ul class="plan-list">
        ${card.bullets.map((item) => `<li>${item}</li>`).join('')}
      </ul>
      <div class="card-extras">${renderExtras(card)}</div>
      <div class="action-row">
        <a class="button light" href="${card.href}" ${card.href.startsWith('http') ? 'target="_blank" rel="noreferrer"' : ''}>${card.cta}</a>
        ${card.secondaryCta ? `<a class="button light" href="${card.secondaryHref}" target="_blank" rel="noreferrer">${card.secondaryCta}</a>` : ''}
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
