document.addEventListener("DOMContentLoaded", () => {
    // burger
    const idBurger = document.getElementById("burger");
    const headerMenu = document.querySelector(".header-menu");
    const body = document.querySelector("body")
    idBurger.addEventListener("click", () => {
        headerMenu.classList.toggle("open");
        body.classList.toggle("lock");
    })


})