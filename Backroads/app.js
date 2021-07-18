/* Variables */
const date = (document.getElementById("date").innerHTML =
  new Date().getFullYear());
const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");
const scrollLinks = document.querySelectorAll(".scroll-link");

/* Event Listeners */
navBtn.addEventListener("click", () => {
  links.classList.toggle("show-links");
}); // Show/hide nav links

// Add Event Listener for all scrollLinks
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    // Show/hide nav links
    links.classList.remove("show-links");

    // Get link ID
    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    let position = element.offsetTop - 62;

    // Smooth scroll - https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
    window.scrollTo({
      left: 0,
      // top: element.offsetTop,
      top: position,
      behavior: "smooth",
    });
  });
});
