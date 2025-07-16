const hamburgerMenu = document.getElementById("menu");
const nav = document.querySelector("header nav");

hamburgerMenu.addEventListener("click", () => {
  nav.classList.toggle("show");
});
