const header = document.querySelector('.atelier-header');
const toggle = document.querySelector('.nav-toggle');

toggle?.addEventListener('click', () => {
  header?.classList.toggle('open');
});

const ctaForm = document.querySelector('.cta__form');
ctaForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const button = ctaForm.querySelector('button');
  if (!button) return;
  button.textContent = 'Запрос отправлен';
  button.disabled = true;
  button.classList.add('ghost-btn');
});

const reserveButtons = document.querySelectorAll('.reserve-btn');
reserveButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (btn.dataset.state === 'sent') return;
    btn.dataset.state = 'sent';
    btn.textContent = 'Бронь отправлена';
    btn.classList.add('success');
    btn.setAttribute('aria-pressed', 'true');
    const card = btn.closest('.product-card');
    const note = card?.querySelector('.product-note');
    const model = btn.dataset.model;
    if (note && model) {
      note.textContent = `${model} закреплён за вами на 48 часов.`;
    }
  });
});
