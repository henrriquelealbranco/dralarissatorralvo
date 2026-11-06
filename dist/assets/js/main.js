const menuButton = document.querySelector('[data-menu-button]');
const nav = document.querySelector('[data-menu]');
const header = document.querySelector('[data-header]');
const heroVideo = document.querySelector('[data-hero-video]');
const videoToggle = document.querySelector('[data-video-toggle]');

function setMenu(open) {
  if (!menuButton || !nav) return;
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  nav.dataset.open = String(open);
  nav.style.visibility = open ? 'visible' : '';
  nav.style.opacity = open ? '1' : '';
  nav.style.transform = open ? 'none' : '';
  document.body.classList.toggle('menu-open', open);
  header?.classList.toggle('menu-open-state', open);
  if (header) {
    header.style.height = open ? '100dvh' : '';
    header.style.background = open ? 'var(--ink)' : '';
    header.style.backdropFilter = open ? 'none' : '';
  }
}

menuButton?.addEventListener('click', () => {
  setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenu(false));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenu(false);
});

document.addEventListener('click', (event) => {
  if (window.matchMedia('(min-width: 821px)').matches) return;
  if (nav?.dataset.open !== 'true') return;
  if (!nav.contains(event.target) && !menuButton?.contains(event.target)) setMenu(false);
});

window.addEventListener('resize', () => {
  if (window.matchMedia('(min-width: 821px)').matches) setMenu(false);
}, { passive: true });

function updateHeader() {
  header?.classList.toggle('is-scrolled', window.scrollY > 18);
}

window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

document.querySelector('[data-year]')?.replaceChildren(String(new Date().getFullYear()));

function setVideoState(playing) {
  if (!heroVideo || !videoToggle) return;
  if (playing) {
    heroVideo.play().catch(() => {});
  } else {
    heroVideo.pause();
  }
  videoToggle.dataset.paused = String(!playing);
  videoToggle.setAttribute('aria-label', playing ? 'Pausar vídeo' : 'Reproduzir vídeo');
}

videoToggle?.addEventListener('click', () => setVideoState(heroVideo?.paused));

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  setVideoState(false);
}

