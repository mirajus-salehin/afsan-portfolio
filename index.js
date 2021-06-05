const button = document.querySelector("div.button");
const menu = document.querySelector("div.mobile-menu");

button.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});

