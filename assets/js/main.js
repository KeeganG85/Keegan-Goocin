(() => {
  document.getElementById('year').textContent = new Date().getFullYear();

  // Scroll reveal (per brand/07-uiux-design-direction.md — fade + rise 16px on scroll into view)
  const revealEls = document.querySelectorAll('.reveal');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    revealEls.forEach((el) => observer.observe(el));
  }

  // Sticky mobile "Book Now" bar — appears after Hero
  const stickyCta = document.getElementById('stickyCta');
  const hero = document.getElementById('hero');
  if (stickyCta && hero) {
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        stickyCta.classList.toggle('visible', !entry.isIntersecting);
      },
      { threshold: 0 }
    );
    heroObserver.observe(hero);
  }

  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      navLinks.classList.toggle('nav-links-open');
    });
    navLinks.querySelectorAll('a').forEach((link) =>
      link.addEventListener('click', () => {
        navToggle.setAttribute('aria-expanded', 'false');
        navLinks.classList.remove('nav-links-open');
      })
    );
  }

  // Before/After slider (drag + keyboard, per brand/07-uiux-design-direction.md)
  const slider = document.getElementById('baSlider');
  const before = document.getElementById('baBefore');
  const handle = document.getElementById('baHandle');

  function setSliderPosition(percent) {
    const clamped = Math.min(96, Math.max(4, percent));
    before.style.width = clamped + '%';
    handle.style.left = clamped + '%';
    handle.setAttribute('aria-valuenow', Math.round(clamped));
  }

  function positionFromEvent(clientX) {
    const rect = slider.getBoundingClientRect();
    const percent = ((clientX - rect.left) / rect.width) * 100;
    setSliderPosition(percent);
  }

  let dragging = false;
  slider.addEventListener('pointerdown', (e) => {
    dragging = true;
    positionFromEvent(e.clientX);
  });
  window.addEventListener('pointermove', (e) => {
    if (dragging) positionFromEvent(e.clientX);
  });
  window.addEventListener('pointerup', () => (dragging = false));

  handle.addEventListener('keydown', (e) => {
    const current = parseFloat(before.style.width) || 50;
    if (e.key === 'ArrowLeft') setSliderPosition(current - 5);
    if (e.key === 'ArrowRight') setSliderPosition(current + 5);
  });

  // Auto-reveal the comparison once on scroll into view (left → center over 600ms), then hand off to the user
  const sliderObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        if (prefersReducedMotion) {
          setSliderPosition(50);
        } else {
          setSliderPosition(0);
          requestAnimationFrame(() => {
            before.style.transition = 'width 600ms ease-out';
            handle.style.transition = 'left 600ms ease-out';
            setSliderPosition(50);
            setTimeout(() => {
              before.style.transition = '';
              handle.style.transition = '';
            }, 650);
          });
        }
        sliderObserver.unobserve(entry.target);
      }
    },
    { threshold: 0.4 }
  );
  sliderObserver.observe(slider);

  // Package selection from Services cards → pre-fill Booking form
  document.querySelectorAll('[data-package]').forEach((link) => {
    link.addEventListener('click', () => {
      const packageSelect = document.getElementById('package');
      if (packageSelect) {
        const value = link.getAttribute('data-package');
        [...packageSelect.options].forEach((opt) => {
          if (opt.text === value) packageSelect.value = value;
        });
      }
    });
  });

  // Booking form (front-end only — no backend wired up yet)
  const form = document.getElementById('bookingForm');
  const status = document.getElementById('formStatus');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      status.textContent = "Thanks — we'll confirm your appointment personally within two hours.";
      form.reset();
    });
  }
})();
