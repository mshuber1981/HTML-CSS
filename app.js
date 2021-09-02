/* Variables */
const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const scrollLinks = document.querySelectorAll(".scroll-link");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");
const section = document.querySelectorAll(".scroll-spy");
const sectionArray = Array.from(section);
const sections = {};

document.onload = sectionArray.forEach(function (e) {
  if (e.id === "home") {
    sections[e.id] = e.offsetTop - convertRemToPixels(6);
  } else if (e.id === "contact") {
    sections[e.id] = e.offsetTop - convertRemToPixels(9);
  } else {
    sections[e.id] = e.offsetTop - convertRemToPixels(6);
  }
}); // Set sections offsets

date.innerHTML = new Date().getFullYear(); // Set year

/* Functions */
function convertRemToPixels(rem) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
} // Covert Rem to pixels

/* Event Listeners */
window.addEventListener("resize", function () {
  let vh = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  );
  console.log(vh);

  if (vh <= 414) {
    sectionArray.forEach(function (e) {
      if (e.id === "home") {
        sections[e.id] = e.offsetTop - convertRemToPixels(6);
      } else if (e.id === "contact") {
        sections[e.id] = e.offsetTop + convertRemToPixels(6);
      } else {
        sections[e.id] = e.offsetTop + convertRemToPixels(2.5);
      }
      console.log(sections);
    });
  } else {
    sectionArray.forEach(function (e) {
      if (e.id === "home") {
        sections[e.id] = e.offsetTop - convertRemToPixels(6);
      } else if (e.id === "contact") {
        sections[e.id] = e.offsetTop - convertRemToPixels(9);
      } else {
        sections[e.id] = e.offsetTop - convertRemToPixels(6);
      }
      console.log(sections);
    });
  }
}); // Update sections offsets on window resize

window.addEventListener("scroll", function () {
  let scrollPosition =
    document.documentElement.scrollTop || document.body.scrollTop;

  if (window.pageYOffset > 80) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
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
}); // Fixed Navbar, update active links

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
