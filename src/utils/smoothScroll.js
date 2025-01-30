export function initializeSmoothScrolling() {
  // Handle click events on navbar links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = anchor.getAttribute("href").substring(1);
      scrollToSection(targetId);
    });
  });

  // Handle initial page load with hash URL
  if (window.location.hash) {
    scrollToSection(window.location.hash.substring(1));
  }
}

function scrollToSection(targetId) {
  const target = document.getElementById(targetId);
  if (!target) return;

  const navbar = document.querySelector("header, nav"); // Adjust selector
  const navbarHeight = navbar ? navbar.offsetHeight : 0;

  const offset =
    target.getBoundingClientRect().top + window.scrollY - navbarHeight;

  window.scrollTo({
    top: offset,
    behavior: "smooth",
  });
}
