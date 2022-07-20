//add Class navbarDark on navbar scroll
const header = document.querySelector(".navbar");
const themeSwitch = document.querySelector("input");

themeSwitch.addEventListener("change", () => {
  document.body.classList.toggle("dark-theme");
});

window.onscroll = function () {
  var top = window.scrollY;
  if (top >= 100) {
    header.classList.add("navbarDark");
  } else {
    header.classList.remove(".navbarDark");
  }
};

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
