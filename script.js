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


  // Highlight the navigation tab for the section currently in view.
  const sectionLinks = [...nav.querySelectorAll('a[href^="#"]')];
  const sections = sectionLinks.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          sectionLinks.forEach(link => {
            const active = link.getAttribute('href') === `#${entry.target.id}`;
            link.classList.toggle('is-current', active);
            if (active) link.setAttribute('aria-current', 'location');
            else link.removeAttribute('aria-current');
          });
        }
      });
    }, { rootMargin: '-25% 0px -60% 0px', threshold: 0 });
    sections.forEach(section => sectionObserver.observe(section));
  }

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const pageSections = document.querySelectorAll('main > section');
  if ('IntersectionObserver' in window && !reduceMotion) {
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        entry.target.classList.toggle('is-in-view', entry.isIntersecting);
      });
    }, { threshold: 0.06 });
    pageSections.forEach(section => sectionObserver.observe(section));
  } else {
    pageSections.forEach(section => section.classList.add('is-in-view'));
  }

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        entry.target.classList.toggle('is-visible', entry.isIntersecting);
      });
    }, { threshold: 0.08 });
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add('is-visible'));
  }

  if (!reduceMotion) {
    sectionLinks.forEach(link => link.addEventListener('click', event => {
      const section = document.querySelector(link.getAttribute('href'));
      if (!section) return;
      event.preventDefault();
      history.pushState(null, '', link.getAttribute('href'));
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      const cards = section.querySelectorAll('.stat-card, .project-card, .skill-list>div, .education-list article, .hero-art, .hero-copy, .tools-panel, .contact-main, .contact-bottom');
      window.setTimeout(() => {
        cards.forEach((card, index) => card.animate([
          { translate: '0 0' },
          { translate: '-3px 1px' },
          { translate: '3px -1px' },
          { translate: '-2px 0' },
          { translate: '2px 0' },
          { translate: '0 0' }
        ], { duration: 460, delay: Math.min(index * 38, 260), easing: 'ease-in-out' }));
      }, 650);
    }));
  }

  const imageLightbox = document.querySelector('.image-lightbox');
  const lightboxImage = imageLightbox?.querySelector('.image-lightbox-image');
  const lightboxCaption = imageLightbox?.querySelector('.image-lightbox-caption');
  document.querySelectorAll('.booth-photo-preview').forEach(button => {
    button.addEventListener('click', () => {
      if (!imageLightbox || !lightboxImage) return;
      lightboxImage.src = button.dataset.fullImage;
      lightboxImage.alt = button.dataset.imageTitle || '';
      if (lightboxCaption) lightboxCaption.textContent = button.dataset.imageTitle || '';
      imageLightbox.showModal();
    });
  });
  imageLightbox?.querySelector('.image-lightbox-close')?.addEventListener('click', () => imageLightbox.close());
  imageLightbox?.addEventListener('click', event => {
    if (event.target === imageLightbox) imageLightbox.close();
  });

  const filters = document.querySelectorAll('.filter-chip');
  const projects = document.querySelectorAll('.project-card');
  filters.forEach(button => button.addEventListener('click', () => {
    filters.forEach(item => item.classList.toggle('active', item === button));
    const filter = button.dataset.filter;
    projects.forEach(card => {
      card.hidden = filter !== 'all' && card.dataset.category !== filter;
    });
  }));

})();
