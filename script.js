// Highlight active menu link when clicked
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active")); // remove old active
    link.classList.add("active"); // add to clicked
  });
});

// Mobile hamburger toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
