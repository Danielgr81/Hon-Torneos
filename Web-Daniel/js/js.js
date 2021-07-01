
const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".btn-abrir");
const closeMenuBtn = document.querySelector(".btn-cerrar");

function toggleMenu() {
    menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);


/*carusel*/

$('.post-wrapper').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: $('.next'),
    prevArrow: $('.next'),

});