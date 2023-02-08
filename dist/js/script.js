const toggler = document.querySelector('.header__burger-toggler');
console.log("toggler");
const menuMobile = document.querySelector('.header__nav-menu-mobile');
toggler.addEventListener('click', evt => {
  menuMobile.classList.toggle('active');
});
