const menuBtn = document.querySelector('.menu');
const header = document.querySelector('.quantum-header');
menuBtn?.addEventListener('click', () => {
  header?.classList.toggle('open');
  const nav = header?.querySelector('nav');
  nav?.classList.toggle('visible');
});

const form = document.querySelector('.cta form');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const button = form.querySelector('button');
  if (!button) return;
  button.textContent = 'Отчёт отправлен';
  button.disabled = true;
});

const filters = document.querySelectorAll('.filters button');
filters.forEach((btn) => btn.addEventListener('click', () => btn.classList.toggle('active')));
