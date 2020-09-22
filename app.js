// selecting the elements

const burger = document.querySelector("#burger");
const navLinks = document.querySelector("#navlinks");
const cross = document.querySelector("#cross");


// all eventlisterns

burger.addEventListener("click", () => {
    navLinks.classList.add("active");
})

cross.addEventListener("click", () => {
    navLinks.classList.remove("active")
})