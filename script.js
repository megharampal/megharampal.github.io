(() => {
  const progress = document.querySelector('.scroll-progress');
  const updateProgress = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
  };
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('open', open);
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add('is-visible'));
  }

  const filters = document.querySelectorAll('.filter-chip');
  const projects = document.querySelectorAll('.project-card');
  filters.forEach(button => button.addEventListener('click', () => {
    filters.forEach(item => item.classList.toggle('active', item === button));
    const filter = button.dataset.filter;
    projects.forEach(card => {
      card.hidden = filter !== 'all' && card.dataset.category !== filter;
    });
  }));

  document.querySelector('#year').textContent = new Date().getFullYear();
})();
