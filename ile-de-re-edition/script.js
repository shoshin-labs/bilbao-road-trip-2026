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
    summary: 'This is not the day to overplan: ferry, drive, check in, then a harbour walk, a drink, or a seafood dinner if everyone still has energy.',
    bullets: ['Old port walk or tower lookout', 'Market / aquarium / rain backup', 'Simple dinner near the harbour'],
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
    summary: 'The transfer is the job; the rest is easy: arrive with daylight left, settle into Altzaga, then decide whether the first evening is a stroll, pintxos, or something quieter.',
    bullets: ['Leave La Rochelle early', 'One proper lunch stop on the road', 'Choose between Casco Viejo, a river walk, or an early night'],
    cta: 'Open Bilbao map',
    href: 'https://www.google.com/maps/search/?api=1&query=Jose+Luis+Goioaga+Etorbidea+22+Altzaga',
    key: 'road'
  },
  {
    city: 'Bilbao',
    day: 'Mon 7 Sep',
    title: 'Give the museum and river the morning.',
    summary: 'A Bilbao day does not need a rigid script. Start with the Guggenheim, then let the river path, lunch, or a coffee stop decide the rest of the afternoon.',
    bullets: ['Guggenheim in the morning', 'Riverfront walk or Abandoibarra after', 'One lunch stop, one easy evening'],
    cta: 'Open Guggenheim map',
    href: 'https://www.google.com/maps/search/?api=1&query=Guggenheim+Museum+Bilbao',
    key: 'city',
    featured: true
  },
  {
    city: 'Bilbao',
    day: 'Tue 8 Sep',
    title: 'Use the coast for a change of pace.',
    summary: 'This day can be as simple as a seaside lunch and a walk, or as full as a proper beach run to Getxo, Plentzia, Sopelana, or Gaztelugatxe.',
    bullets: ['Pick one beach base or coastal town', 'Keep lunch by the water', 'Return to Bilbao for a relaxed evening'],
    cta: 'Open beach ideas',
    href: 'https://www.google.com/maps/search/?api=1&query=Bilbao+beach+day+Getxo+Plentzia+Sopelana',
    key: 'road',
    featured: true
  },
  {
    city: 'Bilbao',
    day: 'Wed 9 Sep',
    title: 'Let Casco Viejo do the heavy lifting.',
    summary: 'Wander, snack, sit down, stand back up, repeat. The old town is perfect for food drifting, a market stop, and a low-pressure evening that can stretch or shrink as needed.',
    bullets: ['Long pintxos lunch or roaming bar hop', 'Casual wandering through the old town', 'Book a dinner only if you still want one'],
    cta: 'Open Casco Viejo',
    href: 'https://www.google.com/maps/search/?api=1&query=Casco+Viejo+Bilbao+pintxos',
    key: 'ferry',
    featured: true
  },
  {
    city: 'Bilbao',
    day: 'Thu 10 Sep',
    title: 'Keep one day loose on purpose.',
    summary: 'This is the built-in buffer: sleep in, do one small outing, or use the day for a funicular, lookout, market, or even just a second coffee and a long lunch.',
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
    summary: 'The final Bilbao day is for the favourites: one last walk, one last lunch, one last look at anything you skipped, and then a good dinner without packing the afternoon solid.',
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
    summary: 'By now the trip should be in cruise mode: drive in, park once, and keep the rest of the day to a river walk, a market stop, or one last meal in the centre.',
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
    summary: 'This stop only needs to do a few things well: give you an easy first night, a good walk around the old port, and a calm reset before the island day.',
    bullets: ['Old Port promenade and towers', 'Aquarium or market if the weather turns', 'Seafood lunch or apéro before bed'],
    cta: 'Open La Rochelle map',
    href: 'https://www.google.com/maps/search/?api=1&query=La+Rochelle+Old+Port'
  },
  {
    city: 'Île de Ré',
    day: 'Island day',
    title: 'Pick two or three things and leave the rest loose.',
    summary: 'The island works best when it feels unrushed: ride between villages, stop for a swim or a beach walk, and treat lunch as part of the outing rather than a break from it.',
    bullets: ['Village loop: Saint-Martin-de-Ré, La Flotte, or Ars-en-Ré', 'Beach stop or salt-marsh detour', 'Oyster hut / long lunch / coffee by the water'],
    cta: 'Open Île de Ré map',
    href: 'https://www.google.com/maps/search/?api=1&query=%C3%8Ele+de+R%C3%A9'
  },
  {
    city: 'Bordeaux',
    day: 'Final stop',
    title: 'Keep the last city walkable and simple.',
    summary: 'Bordeaux does not need a big plan. It can be the river quays, a wine bar, a market browse, or a slow dinner that turns the final night into something pleasant rather than logistical.',
    bullets: ['Riverfront walk and Pont de Pierre', 'Chartrons or a wine bar if you still have energy', 'Quick market / bakery stop before the ferry day'],
    cta: 'Open Bordeaux map',
    href: 'https://www.google.com/maps/search/?api=1&query=Bordeaux+quays'
  },
];

const photoCards = [
  {
    image: '../assets/island.svg',
    title: 'Île de Ré day',
    text: 'Bike the island, stop in Saint-Martin-de-Ré or La Flotte, and leave room for oysters or a beach lunch.',
    cta: 'Open Île de Ré map',
    href: 'https://www.google.com/maps/search/?api=1&query=%C3%8Ele+de+R%C3%A9'
  },
  {
    image: '../assets/guggenheim.svg',
    title: 'Guggenheim day',
    text: 'Do the museum properly, then stay by the river for coffee, lunch, or a slow wander.',
    cta: 'Open Guggenheim map',
    href: 'https://www.google.com/maps/search/?api=1&query=Guggenheim+Museum+Bilbao'
  },
  {
    image: '../assets/beach.svg',
    title: 'Beach day',
    text: 'Head to Getxo, Plentzia, Sopelana, or San Juan de Gaztelugatxe if you want a fuller coastal day.',
    cta: 'Open beach ideas',
    href: 'https://www.google.com/maps/search/?api=1&query=Bilbao+beach+day+Getxo+Plentzia+Sopelana'
  },
  {
    image: '../assets/pintxos.svg',
    title: 'Old town pintxos',
    text: 'Use Casco Viejo for a roaming lunch, bar hop, and a low-pressure evening with food and drinks.',
    cta: 'Open Casco Viejo',
    href: 'https://www.google.com/maps/search/?api=1&query=Casco+Viejo+Bilbao+pintxos'
  },
  {
    image: '../assets/riverwalk.svg',
    title: 'Riverfront walk',
    text: 'The river path links the city together and is ideal for an easy morning or after-dinner walk.',
    cta: 'Open riverfront walk',
    href: 'https://www.google.com/maps/search/?api=1&query=Bilbao+riverfront+walk'
  },
  {
    image: '../assets/restaurant.svg',
    title: 'Nice dinner + walk',
    text: 'Book one good dinner in Bilbao and pair it with a river walk or a slow drink so the evening feels like a proper outing.',
    cta: 'Find restaurants',
    href: 'https://www.google.com/maps/search/?api=1&query=restaurants+Bilbao'
  },
  {
    image: '../assets/funicular.svg',
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
