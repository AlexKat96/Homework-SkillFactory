const btn = document.querySelector('.button-change-svg');
const svg_first = document.querySelector(".svg-button-first");
const svg_second = document.querySelector(".svg-button-second");

btn.addEventListener('click', () => {
  svg_first.classList.toggle('svg-button-second');
  svg_second.classList.toggle('svg-block');
});