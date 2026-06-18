document.documentElement.classList.add('js');

const assets = {
  ferry: 'assets/ferry.svg',
  road: 'assets/road.svg',
  city: 'assets/city.svg',
};

const cardData = [
  {
    key: 'ferry',
    title: 'Leaving Jersey',
    text: 'A dawn crossing mood: the route starts at sea, then turns into the long southbound drive.'
  },
  {
    key: 'road',
    title: 'The road south',
    text: 'The middle of the trip is built around one proper drive day and a clean arrival in Bilbao.'
  },
  {
    key: 'city',
    title: 'City finish',
    text: 'Bilbao and Bordeaux give the trip its final shape: city nights after the road.'
  }
];

for (const img of document.querySelectorAll('[data-photo]')) {
  const key = img.dataset.photo;
  if (assets[key]) img.src = assets[key];
}

const grid = document.getElementById('photoGrid');
if (grid) {
  grid.innerHTML = cardData.map((card) => `
    <article class="photo-card reveal">
      <div class="art"><img src="${assets[card.key]}" alt="${card.title}" loading="lazy"></div>
      <div class="caption">
        <h3>${card.title}</h3>
        <p>${card.text}</p>
      </div>
    </article>
  `).join('');
}

const revealTargets = document.querySelectorAll('.route-stage, .drive-card, .drive-note, .photo-card, .base-card');
revealTargets.forEach((el) => el.classList.add('reveal'));

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
  requestAnimationFrame(() => {
    revealTargets.forEach((el) => el.classList.add('is-visible'));
  });
});
