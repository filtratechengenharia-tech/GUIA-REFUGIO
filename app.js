/* ===========================================================
   Refúgio Atrás da Pedra — render + comportamento
   Lê window.GUIDE (data.js) e monta as seções.
   =========================================================== */

/* >>> TROQUE pelo WhatsApp do anfitrião (só dígitos, com DDI 55).
   Deixe vazio ('') para o botão abrir o anúncio do Airbnb. <<< */
const HOST_WHATSAPP = '';
const AIRBNB_URL = 'https://www.airbnb.com.br/rooms/930623258944055665';

/* ---------- ícones ---------- */
const I = {
  pin:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
  phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/></svg>',
  insta:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="2.5" width="19" height="19" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none"/></svg>',
  web:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9.5"/><path d="M2.5 12h19M12 2.5c2.6 2.6 4 6 4 9.5s-1.4 6.9-4 9.5c-2.6-2.6-4-6-4-9.5s1.4-6.9 4-9.5Z"/></svg>',
  clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9.5"/><path d="M12 7v5l3.5 2"/></svg>',
  pack: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8V6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v2"/><rect x="4" y="8" width="16" height="13" rx="2.5"/><path d="M9 8v-.5M15 8v-.5M4 13h16"/></svg>',
  warn: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.8 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.8a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4M12 17h.01"/></svg>',
  wa:   '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M.06 24l1.69-6.16a11.86 11.86 0 0 1-1.6-5.95C.15 5.32 5.5 0 12.07 0a11.82 11.82 0 0 1 8.41 3.49 11.76 11.76 0 0 1 3.48 8.4c0 6.56-5.35 11.9-11.9 11.9a12 12 0 0 1-5.7-1.45L.06 24zM6.6 20.2c1.68 1 3.27 1.6 5.46 1.6 5.45 0 9.9-4.43 9.9-9.9a9.82 9.82 0 0 0-9.88-9.9c-5.46 0-9.9 4.44-9.9 9.9 0 2.3.67 4.02 1.8 5.82l-1 3.65 3.62-.97zM17.9 14.6c-.07-.12-.27-.2-.57-.34-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37s-1.04 1.01-1.04 2.47 1.06 2.87 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.69.25-1.28.18-1.41z"/></svg>',
  chev: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
  fb:   '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94z"/></svg>'
};

/* ---------- helpers ---------- */
function badges(arr) {
  if (!arr || !arr.length) return '';
  return arr.map(b => `<span class="badge badge-${b.c}">${b.t}</span>`).join('');
}

function telHref(phone) {
  const digits = phone.replace(/\D/g, '');
  return 'tel:+55' + digits;
}

function contacts(c) {
  const out = [];
  if (c.phone) out.push(`<a class="contact-btn phone" href="${telHref(c.phone)}">${I.phone}${c.phone}</a>`);
  if (c.insta) out.push(`<a class="contact-btn insta" href="https://instagram.com/${c.insta}" target="_blank" rel="noopener">${I.insta}@${c.insta}</a>`);
  if (c.web)   out.push(`<a class="contact-btn web" href="https://${c.web}" target="_blank" rel="noopener">${I.web}${c.web}</a>`);
  if (c.fb)    out.push(`<a class="contact-btn fb" href="https://facebook.com/${c.fb}" target="_blank" rel="noopener">${I.fb}Facebook</a>`);
  if (c.hours) out.push(`<span class="contact-btn hours">${I.clock}${c.hours}</span>`);
  if (!out.length) return '';
  return `<div class="card-actions">${out.join('')}</div>`;
}

function meta(arr) {
  if (!arr || !arr.length) return '';
  const rows = arr.map(m =>
    `<div class="meta-row"><span class="meta-label">${m.l}</span><span>${m.v}</span></div>`
  ).join('');
  return `<div class="card-meta">${rows}</div>`;
}

function card(c, accent) {
  const acc = accent ? ` accent-${accent}` : (c.accent ? ` accent-${c.accent}` : '');
  const loc = c.loc ? `<div class="card-loc">${I.pin}<span>${c.loc}</span></div>` : '';
  return `
    <article class="card${acc} reveal">
      <h3 class="card-title">${c.title} ${badges(c.badges)}</h3>
      ${loc}
      <p class="card-desc">${c.desc || ''}</p>
      ${meta(c.meta)}
      ${contacts(c)}
    </article>`;
}

function notice(n) {
  if (!n) return '';
  const icon = I[n.icon] || I.warn;
  return `<div class="notice reveal">${icon}<span>${n.html}</span></div>`;
}

function grid(cards, accent, cols2) {
  return `<div class="grid${cols2 ? ' cols-2' : ''}">${cards.map(c => card(c, accent)).join('')}</div>`;
}

function groups(grupos, accent) {
  return grupos.map(g => `
    <div class="subhead reveal"><span class="subhead-label">${g.label}</span><span class="subhead-line"></span></div>
    ${grid(g.cards, accent)}
  `).join('');
}

/* ---------- feature cards (Na Propriedade) ---------- */
function feature(items) {
  return `<div class="feature">${items.map(it => `
    <div class="feature-card${it.tall ? ' tall' : ''} reveal">
      <img src="${it.img}" alt="${it.title}" loading="lazy">
      <div class="feature-body">
        ${it.badge ? `<span class="badge badge-${it.badge.c}">${it.badge.t}</span>` : ''}
        <h3>${it.title}</h3>
        <p>${it.desc}</p>
      </div>
    </div>`).join('')}</div>`;
}

/* ---------- souvenirs ---------- */
function souvenirs(items) {
  return `<div class="souvenir-grid">${items.map(s => `
    <div class="souvenir reveal">
      <span class="emoji">${s.e}</span>
      <div class="souvenir-name">${s.n}</div>
      ${s.note ? `<div class="souvenir-note">${s.note}</div>` : ''}
    </div>`).join('')}</div>`;
}

/* ===========================================================
   MONTAGEM
   =========================================================== */
function set(id, html) {
  const node = document.getElementById(id);
  if (node) node.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {
  const G = window.GUIDE;

  set('mount-propriedade', feature(G.propriedade));

  set('mount-cachoeiras', notice(G.cachoeiras.notice) + groups(G.cachoeiras.grupos, 'water'));
  set('mount-trilhas',    notice(G.trilhas.notice) + groups(G.trilhas.grupos, 'trail'));
  set('mount-gastronomia',notice(G.gastronomia.notice) + groups(G.gastronomia.grupos, 'food'));
  set('mount-cervejarias',notice(G.cervejarias.notice) + grid(G.cervejarias.cards, 'beer'));
  set('mount-cavalo',     notice(G.cavalo.notice) + grid(G.cavalo.cards, null, true));
  set('mount-offroad',    notice(G.offroad.notice) + groups(G.offroad.grupos, null));
  set('mount-cultura',    notice(G.cultura.notice) + grid(G.cultura.cards, 'culture'));

  set('mount-souvenirs',
    souvenirs(G.souvenirs) +
    `<div class="subhead reveal"><span class="subhead-label">🛍️ Onde comprar</span><span class="subhead-line"></span></div>` +
    grid(G.lojas, 'food', true)
  );

  /* WhatsApp float target */
  const waHref = HOST_WHATSAPP
    ? `https://wa.me/${HOST_WHATSAPP}?text=${encodeURIComponent('Olá! Sou hóspede do Refúgio Atrás da Pedra e tenho uma dúvida.')}`
    : AIRBNB_URL;
  document.querySelectorAll('[data-wa]').forEach(a => { a.href = waHref; a.target = '_blank'; a.rel = 'noopener'; });

  initBehavior();
});

/* ===========================================================
   COMPORTAMENTO: nav scroll, menu mobile, scrollspy, reveal
   =========================================================== */
function initBehavior() {
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav-toggle');
  const links = [...document.querySelectorAll('.nav-links a')];

  /* nav background on scroll */
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* mobile menu */
  toggle?.addEventListener('click', () => nav.classList.toggle('open'));
  links.forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

  /* scrollspy */
  const sections = links
    .map(a => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);
  const spy = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const id = '#' + e.target.id;
        links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === id));
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
  sections.forEach(s => spy.observe(s));

  /* reveal on scroll */
  const reveal = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); reveal.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
  document.querySelectorAll('.reveal').forEach(el => reveal.observe(el));
}
