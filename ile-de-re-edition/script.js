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
    title: 'Arrive, stretch your legs, keep the first night light.',
    summary: 'This is not the day to overplan: ferry, drive, check in, then a harbour walk, the Aquarium, or a seafood dinner if everyone still has energy.',
    bullets: ['Walk the Vieux-Port and harbour towers', 'Aquarium de La Rochelle if you want an indoor stop', 'Simple dinner near the harbour or Marché Central area'],
    cta: 'Open La Rochelle map',
    href: 'https://www.google.com/maps/search/?api=1&query=Novotel+La+Rochelle+Centre',
    key: 'ferry'
  },
  {
    city: 'Île de Ré',
    day: 'Sat 5 Sep',
    title: 'Make the island a proper day out.',
    summary: 'The whole point of the extra night is to let Île de Ré breathe: bike between villages, stop for a long lunch, and leave room for beach time or oysters.',
    bullets: ['Village loop: Saint-Martin-de-Ré, La Flotte, or Ars-en-Ré', 'Beach stop when the pace starts to drag', 'Oyster hut or long lunch before heading back'],
    cta: 'Open Île de Ré map',
    href: 'https://www.google.com/maps/search/?api=1&query=%C3%8Ele+de+R%C3%A9',
    key: 'island'
  },
  {
    city: 'Bilbao',
    day: 'Sun 6 Sep',
    title: 'Drive south, unpack, and choose a first evening.',
    summary: 'The transfer is the job; the rest is easy: arrive with daylight left, settle into Altzaga, then decide whether the first evening is Casco Viejo pintxos, a river walk, or something quieter.',
    bullets: ['Leave La Rochelle early', 'Lunch somewhere on the drive south', 'Choose between Casco Viejo, Abandoibarra, or an early night'],
    cta: 'Open Bilbao map',
    href: 'https://www.google.com/maps/search/?api=1&query=Jose+Luis+Goioaga+Etorbidea+22+Altzaga',
    key: 'road'
  },
  {
    city: 'Bilbao',
    day: 'Mon 7 Sep',
    title: 'Give the museum and river the morning.',
    summary: 'Start with the Guggenheim, then let Abandoibarra, the river path, or a lunch stop decide the rest of the afternoon.',
    bullets: ['Guggenheim in the morning', 'Abandoibarra or the riverfront after', 'Coffee, lunch, or an early dinner in the centre'],
    cta: 'Open Guggenheim map',
    href: 'https://www.google.com/maps/search/?api=1&query=Guggenheim+Museum+Bilbao',
    key: 'city',
    featured: true
  },
  {
    city: 'Bilbao',
    day: 'Tue 8 Sep',
    title: 'Use the coast for a change of pace.',
    summary: 'This day can be as simple as a seaside lunch and a walk, or as full as a proper beach run to Getxo, Ereaga, Plentzia, or Sopelana.',
    bullets: ['Pick one beach base or coastal town', 'Lunch by the water in Getxo, Ereaga, or Plentzia', 'Return to Bilbao for a relaxed evening'],
    cta: 'Open beach ideas',
    href: 'https://www.google.com/maps/search/?api=1&query=Bilbao+beach+day+Getxo+Plentzia+Sopelana',
    key: 'road',
    featured: true
  },
  {
    city: 'Bilbao',
    day: 'Wed 9 Sep',
    title: 'Let Casco Viejo do the heavy lifting.',
    summary: 'Wander, snack, sit down, stand back up, repeat. The old town works for pintxos, Mercado de la Ribera, and an evening that can stretch or shrink as needed.',
    bullets: ['Long pintxos lunch or Mercado de la Ribera', 'Casual wandering through Casco Viejo', 'Book a dinner only if you still want one'],
    cta: 'Open Casco Viejo',
    href: 'https://www.google.com/maps/search/?api=1&query=Casco+Viejo+Bilbao+pintxos',
    key: 'ferry',
    featured: true
  },
  {
    city: 'Bilbao',
    day: 'Thu 10 Sep',
    title: 'Keep one day loose on purpose.',
    summary: 'This is the built-in buffer: sleep in, do one small outing, or use the day for the Funicular de Artxanda, Azkuna Zentroa, Mercado de la Ribera, or a second coffee and a long lunch.',
    bullets: ['Sleep in if needed', 'Choose one small outing or viewpoint', 'Leave room for a better dinner or a second plan'],
    cta: 'Open funicular ideas',
    href: 'https://www.google.com/maps/search/?api=1&query=Bilbao+funicular',
    key: 'city',
    featured: true
  },
  {
    city: 'Bilbao',
    day: 'Fri 11 Sep',
    title: 'Repeat the best bits, then leave space.',
    summary: 'The final Bilbao day is for the favourites: one last river walk, one last lunch, one last look at anything you skipped, and then a good dinner without packing the afternoon solid.',
    bullets: ['Revisit your favourite spot', 'Leave the afternoon open for a bonus excursion', 'Finish with a proper dinner if it feels right'],
    cta: 'Open riverfront walk',
    href: 'https://www.google.com/maps/search/?api=1&query=Bilbao+riverfront+walk',
    key: 'road',
    featured: true
  },
  {
    city: 'Bordeaux',
    day: 'Sat 12 Sep',
    title: 'Use Bordeaux as a gentle final stop.',
    summary: 'By now the trip should be in cruise mode: drive in, park once, and keep the rest of the day to Place de la Bourse, the Miroir d’Eau, a river walk, or one last meal in the centre.',
    bullets: ['Breakfast and pack once', 'Arrive in the afternoon', 'Choose a riverfront walk, market browse, or easy evening'],
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

const stopCards = [
  {
    city: 'La Rochelle',
    day: 'Arrival base',
    title: 'Use it for harbour time, not errands.',
    summary: 'This stop only needs to do a few things well: give you an easy first night, a walk around the Vieux-Port, and a calm reset before the island day.',
    bullets: ['Walk the Vieux-Port and harbour towers', 'Aquarium de La Rochelle if you want an indoor stop', 'Dinner near Marché Central or the old port'],
    cta: 'Open La Rochelle map',
    href: 'https://www.google.com/maps/search/?api=1&query=Vieux-Port,+La+Rochelle'
  },
  {
    city: 'Île de Ré',
    day: 'Island day',
    title: 'Pick two or three things and leave the rest loose.',
    summary: 'The island works best when it feels unrushed: ride between Saint-Martin-de-Ré, La Flotte, or Ars-en-Ré, then stop for a swim, a market browse, or a long oyster lunch.',
    bullets: ['Village loop: Saint-Martin-de-Ré, La Flotte, or Ars-en-Ré', 'Beach stop at Plage des Gollandières or Conche des Baleines', 'Oyster hut, market, or long lunch by the water'],
    cta: 'Open Île de Ré map',
    href: 'https://www.google.com/maps/search/?api=1&query=%C3%8Ele+de+R%C3%A9'
  },
  {
    city: 'Bordeaux',
    day: 'Final stop',
    title: 'Keep the last city walkable and simple.',
    summary: 'Bordeaux does not need a big plan. Keep to the quays, Place de la Bourse, the Miroir d’Eau, or a market / wine-bar evening and let the last night stay easy.',
    bullets: ['Riverfront walk and Pont de Pierre', 'Place de la Bourse + Miroir d’Eau', 'Chartrons, Cité du Vin, or Marché des Capucins if you have time'],
    cta: 'Open Bordeaux map',
    href: 'https://www.google.com/maps/search/?api=1&query=Bordeaux+quays'
  },
];

const photoCards = [
  {
    image: '../assets/island.svg',
    title: 'Île de Ré day',
    text: 'Bike from village to village, then choose between the Phare des Baleines, Plage des Gollandières, or a long oyster lunch.',
    cta: 'Open Île de Ré map',
    href: 'https://www.google.com/maps/search/?api=1&query=%C3%8Ele+de+R%C3%A9'
  },
  {
    image: '../assets/guggenheim.svg',
    title: 'Guggenheim day',
    text: 'Start with the museum, then stay on the Abandoibarra riverfront for coffee, a lunch stop, or a slow wander.',
    cta: 'Open Guggenheim map',
    href: 'https://www.google.com/maps/search/?api=1&query=Guggenheim+Museum+Bilbao'
  },
  {
    image: '../assets/beach.svg',
    title: 'Coast day',
    text: 'Use Getxo, Ereaga beach, Plentzia, or Sopelana for an easy seaside day and a lunch that becomes part of the outing.',
    cta: 'Open beach ideas',
    href: 'https://www.google.com/maps/search/?api=1&query=Bilbao+beach+day+Getxo+Plentzia+Sopelana'
  },
  {
    image: '../assets/pintxos.svg',
    title: 'Old town pintxos',
    text: 'Use Casco Viejo and Mercado de la Ribera for a roaming lunch, a few bar stops, and an evening that can stretch if it needs to.',
    cta: 'Open Casco Viejo',
    href: 'https://www.google.com/maps/search/?api=1&query=Casco+Viejo+Bilbao+pintxos'
  },
  {
    image: '../assets/riverwalk.svg',
    title: 'Riverfront walk',
    text: 'The river path links the city together — Abandoibarra, the Guggenheim, and the centre all connect cleanly on foot.',
    cta: 'Open riverfront walk',
    href: 'https://www.google.com/maps/search/?api=1&query=Bilbao+riverfront+walk'
  },
  {
    image: '../assets/restaurant.svg',
    title: 'Nice dinner + walk',
    text: 'Book one proper dinner in Bilbao and pair it with a walk by the river or a slow drink near the centre so it feels like a full evening.',
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
