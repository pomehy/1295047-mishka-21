let mainNavToggle = document.querySelector('.main-nav__toggle');
let mainNav = document.querySelector('.main-nav');

mainNavToggle.addEventListener('click', function(evt) {
  evt.preventDefault();
  mainNav.classList.toggle('main-nav--active');
})

mainNav.classList.remove('main-nav--nojs');
mainNav.classList.remove('main-nav--active');
