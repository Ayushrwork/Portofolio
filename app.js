// selecting the elements

const burger = document.querySelector("#burger");
const navLinks = document.querySelector("#navlinks");
const cross = document.querySelector("#cross");
const allLinks = document.querySelectorAll(".nav-links a");

// function

function remove() {
    navLinks.classList.remove("active");
}


// all eventlisterns

burger.addEventListener("click", () => {
    navLinks.classList.add("active");
})

cross.addEventListener("click", remove);

function messagePro() {
    alert("I am Working on it!! : )");
}