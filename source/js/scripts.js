let mainNavToggle = document.querySelector('.main-nav__toggle');
let mainNav = document.querySelector('.main-nav');

let slider = document.querySelector('.slider');
let sliderItems = document.querySelectorAll('.slider__item');

let sliderTogglePrev = document.querySelector('.slider__toggle--prev');
let sliderToggleNext = document.querySelector('.slider__toggle--next');

mainNavToggle.addEventListener('click', function(evt) {
  evt.preventDefault();
  mainNav.classList.toggle('main-nav--active');
})

mainNav.classList.remove('main-nav--nojs');
mainNav.classList.remove('main-nav--active');

if (slider) {
  /* Устанавливаем индекс слайда по умолчанию */
  let slideIndex = 1;
  showSlides(slideIndex);

  /* Увеличиваем индекс на 1 — показываем следующий слайд*/
  sliderToggleNext.addEventListener('click', function nextSlide() {
    showSlides(slideIndex += 1);
  });

  /* Уменьшает индекс на 1 — показываем предыдущий слайд*/
  sliderTogglePrev.addEventListener('click', function previousSlide() {
    showSlides(slideIndex -= 1);
  });

  /* Функция перелистывания */
  function showSlides(n) {
    if (n > sliderItems.length) {
      slideIndex = 1
    }
    if (n < 1) {
      slideIndex = sliderItems.length
    }

    /* Проходим по каждому слайду в цикле for */
    for (let slide of sliderItems) {
      slide.classList.remove('slider__item--active');
    }
    sliderItems[slideIndex - 1].classList.add('slider__item--active');
  }

}
