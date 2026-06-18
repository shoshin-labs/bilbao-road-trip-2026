document.documentElement.classList.add('js');

const assets = {
  ferry: 'assets/ferry.svg',
  road: 'assets/road.svg',
  city: 'assets/city.svg',
};

const photoCards = [
  {
    key: 'ferry',
    title: 'Bilbao museum day',
    text: 'Do the Guggenheim and riverfront, then keep the rest of the day open.'
  },
  {
    key: 'road',
    title: 'Coast day',
    text: 'Head to Getxo or Portugalete for sea air, walks, and an easy lunch.'
  },
  {
    key: 'city',
    title: 'Wandering day',
    text: 'Use the flex day for food, markets, cafés, or an inland run if the weather is good.'
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
        <p class="label">Travel mood</p>
        <h3>${card.title}</h3>
        <p>${card.text}</p>
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
