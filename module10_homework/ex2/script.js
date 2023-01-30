const btn = document.querySelector('.button-size');

btn.addEventListener('click', () => {
  alert("Размер экрана равен: " + window.screen.width + " x " + window.screen.height);
});