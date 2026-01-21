const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
smoothScrollLinks.forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Ενεργοποίηση/απενεργοποίηση mobile menu
document.addEventListener('DOMContentLoaded', function () {
  const toggleMenu = document.getElementById('mobile-menu');
  const navLinks = document.querySelector('.nav-links');

  if (toggleMenu && navLinks) {
    toggleMenu.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
});

