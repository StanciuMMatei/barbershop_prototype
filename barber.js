const burger = document.getElementById("burger-menu");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");

burger.addEventListener("click", () => {
  // Deschide/Inchide meniul
  nav.classList.toggle("nav-active");

  // Animație pentru butonul burger (transformare in X)
  burger.classList.toggle("toggle");
});

// Inchide meniul automat dupa ce dai click pe un link (pe mobil)
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (nav.classList.contains("nav-active")) {
      nav.classList.remove("nav-active");
    }
  });
});
