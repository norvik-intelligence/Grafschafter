const topbar = document.querySelector('.topbar');
const toggle = document.querySelector('.menu-toggle');
toggle?.addEventListener('click', () => {
  const open = topbar.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.textContent = open ? 'Schließen' : 'Menü';
});
document.querySelectorAll('nav a').forEach((link) => link.addEventListener('click', () => {
  topbar.classList.remove('open'); toggle?.setAttribute('aria-expanded', 'false'); if (toggle) toggle.textContent = 'Menü';
}));
document.querySelector('#year').textContent = new Date().getFullYear();
