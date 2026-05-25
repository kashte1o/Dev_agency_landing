document.querySelector('.form').addEventListener('submit', function(e) {
  e.preventDefault();
  const btn = this.querySelector('.btn');
  btn.textContent = 'Отправлено!';
  btn.style.background = '#22c55e';
  this.reset();
  setTimeout(() => {
    btn.textContent = 'Отправить';
    btn.style.background = '';
  }, 3000);
});
