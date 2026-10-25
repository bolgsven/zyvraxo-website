/* ZYVRAXO — simple, dependency-free interactions. */
(() => {
  'use strict';

  // Once the actual Day 02 YouTube video link is available, paste it here.
  // Examples: 'https://youtu.be/VIDEO_ID' or 'https://www.youtube.com/watch?v=VIDEO_ID'
  const DAY_02_YOUTUBE_URL = '';

  const nav = document.getElementById('primary-nav');
  const languageCode = document.documentElement.lang.split('-')[0];
  const interfaceText = {
    en: {menuOpen:'Open navigation',menuClose:'Close navigation',fxOn:'Turn visual effects on',fxOff:'Turn visual effects off',on:'ON',off:'OFF'},
    es: {menuOpen:'Abrir menú',menuClose:'Cerrar menú',fxOn:'Activar efectos visuales',fxOff:'Desactivar efectos visuales',on:'SÍ',off:'NO'},
    zh: {menuOpen:'打开导航',menuClose:'关闭导航',fxOn:'开启视觉效果',fxOff:'关闭视觉效果',on:'开',off:'关'},
    ur: {menuOpen:'مینو کھولیں',menuClose:'مینو بند کریں',fxOn:'بصری اثرات آن کریں',fxOff:'بصری اثرات بند کریں',on:'آن',off:'آف'}
  };
  const ui = interfaceText[languageCode] || interfaceText.en;
  const languagePicker = document.getElementById('language-picker');
  if (languagePicker) {
    document.addEventListener('click', (event) => { if (!languagePicker.contains(event.target)) languagePicker.open = false; });
    document.addEventListener('keydown', (event) => { if (event.key === 'Escape') languagePicker.open = false; });
  }

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
    menu.setAttribute('aria-label', open ? ui.menuClose : ui.menuOpen);
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
      fxButton.setAttribute('aria-label', ui.fxOn);
      const state = fxButton.querySelector('.fx-status');
      if (state) state.textContent = ui.off;
    }
    fxButton.addEventListener('click', () => {
      const nowOff = document.body.classList.toggle('effects-off');
      fxButton.setAttribute('aria-pressed', String(!nowOff));
      fxButton.setAttribute('aria-label', nowOff ? ui.fxOn : ui.fxOff);
      const state = fxButton.querySelector('.fx-status');
      if (state) state.textContent = nowOff ? ui.off : ui.on;
    });
  }

  // Day 01 is already confirmed; load YouTube only on user interaction.
  if (playButton && videoArea) {
    playButton.addEventListener('click', () => {
      if (videoArea.classList.contains('is-playing')) return;
      const iframe = document.createElement('iframe');
      iframe.src = 'https://www.youtube-nocookie.com/embed/WBRhlwIuE2M?autoplay=1&rel=0';
      iframe.title = {
        en:'Zyvraxo Day 01 — full Fortnite match (YouTube)',
        es:'Zyvraxo Día 01 — partida completa de Fortnite (YouTube)',
        zh:'Zyvraxo 第 01 天 — Fortnite 完整对局 (YouTube)',
        ur:'Zyvraxo دن 01 — Fortnite کا مکمل میچ (YouTube)'
      }[languageCode] || 'Zyvraxo Day 01 — full Fortnite match (YouTube)';
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
      dayTwoLink.textContent = {
        en:'WATCH DAY 02 ON YOUTUBE', es:'VER EL DÍA 02 EN YOUTUBE',
        zh:'在 YOUTUBE 观看第 02 天',ur:'دن 02 کی ویڈیو YOUTUBE پر دیکھیں'
      }[languageCode] || 'WATCH DAY 02 ON YOUTUBE';
      if (dayTwoNote) dayTwoNote.hidden = true;
    }
  }
})();
