const toggler = document.querySelector('.header__burger-toggler');
const menuMobile = document.querySelector('.header__nav-menu-mobile');
toggler.addEventListener('click', evt => {
  menuMobile.classList.toggle('active');
  toggler.classList.toggle('active');
});
