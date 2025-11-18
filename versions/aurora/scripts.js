const header = document.querySelector('.site-header');
const toggle = document.querySelector('.nav-toggle');

toggle?.addEventListener('click', () => {
  header?.classList.toggle('open');
});

const form = document.querySelector('.cta__form');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const button = form.querySelector('button');
  if (!button) return;
  button.textContent = 'Заявка отправлена';
  button.disabled = true;
  button.classList.add('ghost');
});
