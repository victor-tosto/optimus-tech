const btnHamburger = document.querySelector('.header__btn-hamburger');
const bodyPage = document.querySelector('body');
const overlay = document.querySelector('#overlay');
const navMobile = document.querySelector('.header__nav--mobile');

btnHamburger.addEventListener('click', () => {
    btnHamburger.classList.toggle('menu-open');
    bodyPage.classList.toggle('suppress-scroll');
    overlay.classList.toggle('menu-open');
    navMobile.classList.toggle('menu-open');
})

