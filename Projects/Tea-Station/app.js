/* Variables */
const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");
const date = (document.getElementById("date").innerHTML =
  new Date().getFullYear());

/* Functions */
function scrollTo() {
  document.querySelector("#target").scrollIntoView({ behavior: "smooth" });
} // Smooth scroll to #ID

/* Event Listeners */
navBtn.addEventListener("click", () => {
  navbar.classList.add("showNav");
}); // Show nav

navClose.addEventListener("click", () => {
  navbar.classList.remove("showNav");
}); // close nav
