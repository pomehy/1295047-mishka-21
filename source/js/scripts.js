let mainNavToggle = document.querySelector('.main-nav__toggle');
let mainNav = document.querySelector('.main-nav');

mainNavToggle.addEventListener('click', function(evt) {
  evt.preventDefault();
  mainNav.classList.toggle('main-nav--active');
  console.log('dfdfdf');
})
