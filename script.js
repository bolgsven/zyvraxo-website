'use strict';

// Zyvraxo website — no trackers, analytics, accounts or network calls required.
const chapters = [
  {
    number: '01 / 04', counter: 'CH.01 / ZYVRAXO ARCHIVE', title: 'THE FIRST VICTORY',
    description: 'One brand-new account, one first Fortnite match, and an unexpected Victory Royale. The original highlight is now published on TikTok.',
    image: 'assets/fortnite-victory.webp', alt: "Fortnite Victory Royale moment from Zyvraxo's first match",
    status: 'PUBLISHED · 19 OCT 2026', published: true
  },
  {
    number: '02 / 04', counter: 'CH.02 / THE JOURNEY · PART 01', title: 'NEW ACCOUNT. FIRST DROP.',
    description: 'The journey begins with a fast-cut gameplay montage: from the lobby through the first jump. Fifteen seconds, music and no continuous commentary.',
    image: 'assets/journey-part01.webp', alt: 'First drop toward the Fortnite island from Zyvraxo gameplay',
    status: 'PUBLISHED · 23 OCT 2026', published: true
  },
  {
    number: '03 / 04', counter: 'CH.03 / THE JOURNEY · PART 02', title: 'THE JOURNEY CONTINUES.',
    description: 'Part 02 is live with another short edited sequence from the original gameplay recording. The series continues in small, energetic chapters.',
    image: 'assets/journey-part02.webp', alt: 'Captured Fortnite gameplay from the first-match archive',
    status: 'PUBLISHED · 23 OCT 2026', published: true
  },
  {
    number: '04 / 04', counter: 'CH.04 / NEXT UP', title: 'THE NEXT DROP',
    description: 'The next chapter has not been published yet. More of the first match, new cuts and fresh gameplay will join the archive as they are ready.',
    image: 'assets/fortnite-mode.webp', alt: 'Fortnite Battle Royale game selection artwork',
    status: 'COMING UP · NOT PUBLISHED', published: false
  }
];

const chapterButtons = [...document.querySelectorAll('.chapter-tab[data-chapter]')];
const chapterElements = {
  image: document.querySelector('#chapter-image'),
  imageCounter: document.querySelector('#chapter-image-counter'),
  number: document.querySelector('#chapter-display-num'),
  title: document.querySelector('#chapter-title'),
  description: document.querySelector('#chapter-description'),
  status: document.querySelector('#chapter-status-label'),
  statusDot: document.querySelector('#chapter-status-dot'),
  cta: document.querySelector('#chapter-cta'),
  footnote: document.querySelector('#chapter-footnote')
};

function showChapter(index) {
  const chapter = chapters[index];
  if (!chapter) return;
  chapterButtons.forEach(item => {
    const selected = Number(item.dataset.chapter) === index;
    item.classList.toggle('is-active', selected);
    item.setAttribute('aria-pressed', String(selected));
  });
  chapterElements.image.src = chapter.image;
  chapterElements.image.alt = chapter.alt;
  chapterElements.imageCounter.textContent = chapter.counter;
  chapterElements.number.textContent = chapter.number;
  chapterElements.title.textContent = chapter.title;
  chapterElements.description.textContent = chapter.description;
  chapterElements.status.textContent = chapter.status;
  chapterElements.statusDot.classList.toggle('upcoming', !chapter.published);
  chapterElements.cta.firstChild.textContent = chapter.published ? 'FIND IT ON TIKTOK ' : 'FOLLOW FOR THE NEXT PART ';
  chapterElements.footnote.textContent = chapter.published
    ? 'Opens the Zyvraxo profile. A direct link to this post will be added when available.'
    : 'This chapter is planned, not yet live. Follow @zyvraxo.gg for updates.';
}

chapterButtons.forEach(button => {
  button.addEventListener('click', () => showChapter(Number(button.dataset.chapter)));
});
for (const button of document.querySelectorAll('[data-show-chapter]')) {
  button.addEventListener('click', () => {
    const idx = Number(button.dataset.showChapter);
    showChapter(idx);
    document.querySelector('#chapter-feature').scrollIntoView({behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',block:'center'});
  });
}

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#primary-nav');
function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
  nav.classList.remove('is-open');
}
menuButton.addEventListener('click', () => {
  const willOpen = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(willOpen));
  menuButton.setAttribute('aria-label', willOpen ? 'Close navigation' : 'Open navigation');
  nav.classList.toggle('is-open', willOpen);
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
document.addEventListener('click', event => {
  if (!nav.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
});

const effectsButton = document.querySelector('.fx-toggle');
let effectsOn = true;
try { effectsOn = localStorage.getItem('zyvraxo-fx') !== 'off'; } catch (_) { /* Browsers may block storage. */ }
function updateEffects() {
  document.body.classList.toggle('effects-off', !effectsOn);
  effectsButton.setAttribute('aria-pressed', String(effectsOn));
  effectsButton.querySelector('.fx-state').textContent = effectsOn ? 'ON' : 'OFF';
}
updateEffects();
effectsButton.addEventListener('click', () => {
  effectsOn = !effectsOn;
  updateEffects();
  try { localStorage.setItem('zyvraxo-fx', effectsOn ? 'on' : 'off'); } catch (_) { /* Not critical. */ }
});

const year = document.getElementById('copyright-year');
if (year) year.textContent = String(Math.max(2026, new Date().getFullYear()));

// Simple entrance transitions, but the site remains fully legible without JS.
const revealElements = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }
  }, { threshold: 0.12, rootMargin: '0px 0px -24px 0px' });
  revealElements.forEach(element => observer.observe(element));
}


// Full match — paste the exact YouTube watch link or 11-character video ID after uploading.
// Example (format only): https://www.youtube.com/watch?v=XXXXXXXXXXX
// Leave blank until the recording is available on YouTube. No large video file is stored here.
const FULL_MATCH_YOUTUBE_URL = '';

function getYouTubeVideoId(input) {
  if (!input || !input.trim()) return null;
  const value = input.trim();
  const validId = /^[A-Za-z0-9_-]{11}$/;
  if (validId.test(value)) return value;
  try {
    const u = new URL(value);
    if (u.protocol !== 'https:' && u.protocol !== 'http:') return null;
    const host = u.hostname.toLowerCase();
    let id = null;
    if (['www.youtube.com', 'youtube.com', 'm.youtube.com'].includes(host)) {
      if (u.pathname === '/watch') id = u.searchParams.get('v');
      else if (/^\/(embed|live|shorts)\//.test(u.pathname)) id = u.pathname.split('/')[2];
    } else if (host === 'youtu.be' || host === 'www.youtu.be') {
      id = u.pathname.split('/')[1];
    }
    return id && validId.test(id) ? id : null;
  } catch (_) {
    return null;
  }
}

const fullVideoId = getYouTubeVideoId(FULL_MATCH_YOUTUBE_URL);
const fullPlayer = document.getElementById('full-player');
const fullPlayButton = document.getElementById('full-video-play');
if (fullPlayer && fullPlayButton && fullVideoId) {
  document.querySelector('.full-match-frame').classList.add('is-ready');
  fullPlayButton.hidden = false;
  document.getElementById('full-player-pending-symbol').hidden = true;
  document.getElementById('full-player-play-icon').hidden = false;
  document.getElementById('full-player-caption').textContent = 'READY TO WATCH';
  document.getElementById('full-header-status').textContent = 'FULL VIDEO AVAILABLE';
  document.querySelector('.full-coming-pin').style.background = 'var(--cyan)';
  document.getElementById('full-match-description').textContent = 'From the first moments in the lobby to a surprise Victory Royale. Watch the full 18-minute, 32-second recording of the first Fortnite match right here on the Zyvraxo website.';
  document.getElementById('full-match-status').lastChild.textContent = ' YOUTUBE PLAYER READY';
  fullPlayButton.addEventListener('click', () => {
    const frame = document.createElement('iframe');
    frame.title = 'Zyvraxo: full Fortnite first match, 18 minutes 32 seconds';
    frame.src = `https://www.youtube-nocookie.com/embed/${fullVideoId}?autoplay=1&rel=0`;
    frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    frame.allowFullscreen = true;
    frame.referrerPolicy = 'strict-origin-when-cross-origin';
    fullPlayer.replaceChildren(frame);
    fullPlayer.classList.add('is-playing');
    document.getElementById('full-match-status').lastChild.textContent = ' WATCHING THE FULL MATCH';
  }, {once:true});
}
