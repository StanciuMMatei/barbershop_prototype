const burger = document.getElementById("burger-menu");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-active");

  burger.classList.toggle("toggle");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (nav.classList.contains("nav-active")) {
      nav.classList.remove("nav-active");
    }
  });
});
