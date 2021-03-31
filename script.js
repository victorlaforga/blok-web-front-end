const hamburgerMenu = document.querySelector(".hamburger-menu");
const navigation = document.querySelector(".nav-container");

function toggleNav() {
    navigation.classList.toggle("visible");
    console.log("SII")
}
hamburgerMenu.addEventListener("click", toggleNav)