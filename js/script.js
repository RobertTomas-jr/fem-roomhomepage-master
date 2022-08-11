const hamburgerBtn = document.querySelector('.hamburger');
const navigation= document.querySelector('.navigation');
const menu = document.querySelector('.menu');
const bodyOverlay = document.querySelector('body');
const sliderBtn = document.querySelectorAll('.previous-next');
const slides = document.querySelectorAll('.slide');

//for hamburger open close
hamburgerBtn.addEventListener('click', () => {
  if(hamburgerBtn.classList.contains('show')) {
    navigation.classList.remove('show');
    hamburgerBtn.classList.remove('show');
    menu.classList.remove('show')
    bodyOverlay.classList.remove('show');
  } else {
    navigation.classList.add('show');
    hamburgerBtn.classList.add('show');
    menu.classList.add('show');
    bodyOverlay.classList.add('show');
  }
});

//for banner slider
let i = 0;
sliderBtn.forEach(slider => {
  slider.addEventListener('click', (e) => {
    if (e.target.class === 'previous') {
      i--;
      if (i < 0) {
        i = slides.length - 1;
      }
      displaySlides();
    } else {
      i++;
      if (i > slides.length - 1) {
        i = 0;
      }
      displaySlides();
    }
  });
});
function displaySlides() {
  slides.forEach(slide => {
    slide.style.display = 'none';
  });
  slides[i].style.display = 'flex';
};