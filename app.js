const html = document.querySelector("html");
const hamburger = document.querySelector(".navigation__hamburger");
const close = document.querySelector(".navigation__close");
const mobileNav = document.querySelector(".navigation__mobile");

hamburger.addEventListener("click", () => {
  mobileNav.style.display = "flex";
  html.style.background = "#e2e0dc";
});

close.addEventListener("click", () => {
  mobileNav.style.display = "";
  html.style.background = "";
});
