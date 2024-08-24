const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentSlide = 0;

prevButton.addEventListener('click', () => {
  currentSlide--;
  slider.classList.add('animate');
  setTimeout(() => {
    slider.classList.remove('animate');
  }, 500);
});

nextButton.addEventListener('click', () => {
  currentSlide++;
  slider.classList.add('animate');
  setTimeout(() => {
    slider.classList.remove('animate');
  }, 500);
});