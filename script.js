(() => {
  const progress = document.querySelector('.scroll-progress');
  const updateProgress = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
  };
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  const tabs = [...document.querySelectorAll('.notebook-tab')];
  const pages = [...document.querySelectorAll('.tab-page')];
  const activateTab = (name, options = {}) => {
    const page = pages.find(item => item.dataset.page === name);
    if (!page) return;
    pages.forEach(item => { item.hidden = item !== page; });
    tabs.forEach(tab => {
      const selected = tab.dataset.tab === name;
      tab.classList.toggle('active', selected);
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
    });
    if (options.updateHash) history.replaceState(null, '', `#${name}`);
    if (options.scroll !== false) window.scrollTo({ top: 0, behavior: 'smooth' });
    revealItems.forEach(item => {
      if (page.contains(item)) item.classList.add('is-visible');
    });
  };
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activateTab(tab.dataset.tab, { updateHash: true }));
    tab.addEventListener('keydown', event => {
      if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1
        : (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
      tabs[next].focus();
      activateTab(tabs[next].dataset.tab, { updateHash: true });
    });
  });
  document.querySelectorAll('a[href^="#"]').forEach(link => link.addEventListener('click', event => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    const page = target.closest('.tab-page');
    if (!page) return;
    event.preventDefault();
    const wasHidden = page.hidden;
    activateTab(page.dataset.page, { updateHash: false, scroll: wasHidden });
    if (!wasHidden) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

  const initialPage = location.hash.slice(1);
  if (pages.some(page => page.dataset.page === initialPage)) activateTab(initialPage, { scroll: false });

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
