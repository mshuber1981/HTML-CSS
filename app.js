/* Variables */
const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");

// Set year
date.innerHTML = new Date().getFullYear();

/* Event Listeners */
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
}); // Fixed Navbar

navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
}); // Show Sidebar

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
}); // Close Sidebar
