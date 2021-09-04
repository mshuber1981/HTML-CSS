/*
=============== 
Variables
===============
*/
const navbar = document.querySelector("#nav");
const navHeight = navbar.clientHeight;
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const scrollLinks = document.querySelectorAll(".scroll-link");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");
const section = document.querySelectorAll(".scroll-spy");
const sectionArray = Array.from(section);
const sections = {};
const smallOffsets = [-8, -4, -4, 2];
const landscapeOffsets = [-6, -3, -1, 5];
const desktopOffsets = [-6, -3.75, -3, -8];
let vh, vw;

/*
=============== 
Functions
===============
*/
function convertRemToPixels(rem) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
} // Covert Rem to pixels

function offsets(small, landscape, desktop) {
  vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  vh = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  );

  if (vw <= 414) {
    sectionArray.forEach(function (e) {
      if (e.id === "home") {
        sections[e.id] = e.offsetTop + convertRemToPixels(small[0]);
      } else if (e.id === "about") {
        sections[e.id] = e.offsetTop + convertRemToPixels(small[1]);
      } else if (e.id === "projects") {
        sections[e.id] = e.offsetTop + convertRemToPixels(small[2]);
      } else {
        sections[e.id] = e.offsetTop + convertRemToPixels(small[3]);
      }
    });
  } else if (vh <= 414) {
    sectionArray.forEach(function (e) {
      if (e.id === "home") {
        sections[e.id] = e.offsetTop + convertRemToPixels(landscape[0]);
      } else if (e.id === "about") {
        sections[e.id] = e.offsetTop + convertRemToPixels(landscape[1]);
      } else if (e.id === "projects") {
        sections[e.id] = e.offsetTop + convertRemToPixels(landscape[2]);
      } else {
        sections[e.id] = e.offsetTop + convertRemToPixels(landscape[3]);
      }
    });
  } else {
    sectionArray.forEach(function (e) {
      if (e.id === "home") {
        sections[e.id] = e.offsetTop + convertRemToPixels(desktop[0]);
      } else if (e.id === "about") {
        sections[e.id] = e.offsetTop + convertRemToPixels(desktop[1]);
      } else if (e.id === "projects") {
        sections[e.id] = e.offsetTop + convertRemToPixels(desktop[2]);
      } else {
        sections[e.id] = e.offsetTop + convertRemToPixels(desktop[3]);
      }
    });
  }
} // scrollTo offsets

/*
=============== 
Event Listeners
===============
*/
window.addEventListener("load", function () {
  offsets(smallOffsets, landscapeOffsets, desktopOffsets);
}); // Update sections offsets on window load

window.addEventListener("resize", function () {
  offsets(smallOffsets, landscapeOffsets, desktopOffsets);
}); // Update sections offsets on window resize

window.addEventListener("scroll", function () {
  let scrollPosition =
    document.documentElement.scrollTop || document.body.scrollTop;

  if (vw <= 768 || vh <= 414) {
    if (window.pageYOffset > navHeight) {
      navbar.classList.add("navbar-fixed");
    } else {
      navbar.classList.remove("navbar-fixed");
    }
  } else {
    if (window.pageYOffset > vh - 2 * navHeight) {
      navbar.classList.add("navbar-fixed");
    } else {
      navbar.classList.remove("navbar-fixed");
    }
  }

  for (const i in sections) {
    if (sections[i] <= scrollPosition) {
      document.querySelectorAll(".active").forEach((e) => {
        e.classList.remove("active");
      });
      document
        .querySelectorAll(`a[href*="#${i}"]`)
        .forEach((e) => e.classList.add("active"));
    }
  }
}); // Fixed Navbar after specified offsets, update active links

navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
}); // Show Sidebar

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
}); // Close Sidebar

scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element =
      e.currentTarget.parentElement.parentElement.classList.contains(
        "sidebar-links"
      );
    let position = sections[id];

    if (element) {
      sidebar.classList.remove("show-sidebar");
    }

    window.scrollTo({
      left: 0,
      top: position,
      behavior: "smooth",
    });
  });
}); // Smooth scroll

/*
=============== 
Script
===============
*/
date.innerHTML = new Date().getFullYear(); // Set year
