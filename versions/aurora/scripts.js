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
      note.textContent = `${model} ожидает подтверждения менеджера.`;
    }
  });
});
