/* ZYVRAXO — simple, dependency-free interactions. */
(() => {
  'use strict';

  // Once the actual Day 02 YouTube video link is available, paste it here.
  // Examples: 'https://youtu.be/VIDEO_ID' or 'https://www.youtube.com/watch?v=VIDEO_ID'
  const DAY_02_YOUTUBE_URL = '';

  const nav = document.getElementById('primary-nav');
  const menu = document.querySelector('.menu-toggle');
  const fxButton = document.querySelector('.fx-toggle');
  const year = document.getElementById('copyright-year');
  const playButton = document.getElementById('day01-play');
  const videoArea = document.getElementById('day01-player');

  if (year) year.textContent = String(new Date().getFullYear());

  function setMenu(open) {
    if (!nav || !menu) return;
    nav.classList.toggle('is-open', open);
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  }

  if (menu && nav) {
    menu.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => setMenu(false));
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') setMenu(false);
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 930) setMenu(false);
    });
  }

  if (fxButton) {
    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      document.body.classList.add('effects-off');
      fxButton.setAttribute('aria-pressed', 'false');
      fxButton.setAttribute('aria-label', 'Turn visual effects on');
      const state = fxButton.querySelector('.fx-status');
      if (state) state.textContent = 'OFF';
    }
    fxButton.addEventListener('click', () => {
      const nowOff = document.body.classList.toggle('effects-off');
      fxButton.setAttribute('aria-pressed', String(!nowOff));
      fxButton.setAttribute('aria-label', nowOff ? 'Turn visual effects on' : 'Turn visual effects off');
      const state = fxButton.querySelector('.fx-status');
      if (state) state.textContent = nowOff ? 'OFF' : 'ON';
    });
  }

  // Day 01 is already confirmed; load YouTube only on user interaction.
  if (playButton && videoArea) {
    playButton.addEventListener('click', () => {
      if (videoArea.classList.contains('is-playing')) return;
      const iframe = document.createElement('iframe');
      iframe.src = 'https://www.youtube-nocookie.com/embed/WBRhlwIuE2M?autoplay=1&rel=0';
      iframe.title = 'Zyvraxo Day 01 — full Fortnite match (YouTube)';
      iframe.allow = 'autoplay; encrypted-media; picture-in-picture; web-share';
      iframe.referrerPolicy = 'strict-origin-when-cross-origin';
      iframe.allowFullscreen = true;
      iframe.setAttribute('loading', 'eager');
      videoArea.classList.add('is-playing');
      videoArea.replaceChildren(iframe);
      iframe.focus();
    }, { once: true });
  }

  // Day 02 is not given an invented video ID. Activate the exact link when known.
  const dayTwoLink = document.getElementById('day02-link');
  const dayTwoNote = document.getElementById('day02-note');
  if (DAY_02_YOUTUBE_URL.trim() && dayTwoLink) {
    const match = DAY_02_YOUTUBE_URL.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|shorts\/|embed\/))([a-zA-Z0-9_-]{11})/);
    if (match) {
      dayTwoLink.href = `https://www.youtube.com/watch?v=${match[1]}`;
      dayTwoLink.innerHTML = 'WATCH DAY 02 ON YOUTUBE <span aria-hidden="true">↗</span>';
      if (dayTwoNote) dayTwoNote.hidden = true;
    }
  }
})();
