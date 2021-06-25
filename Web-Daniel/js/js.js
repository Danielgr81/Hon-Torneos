const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".btn-abrir");
const closeMenuBtn = document.querySelector(".btn-cerrar");

function toggleMenu() {
    menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);