const filterButtons = document.querySelectorAll('.filters button');
filterButtons.forEach((btn) => {
  btn.addEventListener('click', () => btn.classList.toggle('active'));
});

const linkBtn = document.querySelector('.link-btn');
linkBtn?.addEventListener('click', () => {
  linkBtn.textContent = 'Запрос отправлен';
});
