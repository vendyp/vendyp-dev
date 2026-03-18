const navbar = document.getElementById("navbar");
const navMenu = document.getElementById("nav-menu");
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const fixedSection = document.querySelector(".bg-circle-top");

if (navbar) {
  window.addEventListener("scroll", () => {
    const isScrolled = window.scrollY > 50;
    navbar.classList.toggle("navbar-scrolled", isScrolled);
    navbar.classList.toggle("bg-transparent", !isScrolled);
  });
}

if (mobileMenuBtn && navMenu) {
  let menuOpen = false;
  const navLinks = navMenu.querySelectorAll("a");

  mobileMenuBtn.addEventListener("click", () => {
    menuOpen = !menuOpen;
    navMenu.classList.toggle("max-h-screen", menuOpen);
    navMenu.classList.toggle("max-h-0", !menuOpen);
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuOpen = false;
      navMenu.classList.remove("max-h-screen");
      navMenu.classList.add("max-h-0");
    });
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.1,
    rootMargin: "-100px 0px",
  },
);

document.querySelectorAll(".fade-in").forEach((element) => {
  observer.observe(element);
});

const yearElement = document.getElementById("year-text");
if (yearElement) {
  yearElement.textContent = `© ${new Date().getFullYear()} Dwi Vendy. All rights reserved.`;
}

document.querySelectorAll("a[href^='http']").forEach((link) => {
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noopener noreferrer");
});

document.querySelectorAll("[data-loading-button]").forEach((button) => {
  const text = button.querySelector("[data-button-text]");
  const spinner = button.querySelector("[data-button-spinner]");

  button.addEventListener("click", () => {
    spinner?.classList.remove("hidden");
    text?.classList.add("hidden");

    setTimeout(() => {
      spinner?.classList.add("hidden");
      text?.classList.remove("hidden");
    }, 1200);
  });
});

if (fixedSection) {
  window.addEventListener("scroll", () => {
    fixedSection.style.display = window.scrollY >= 50 ? "none" : "block";
  });
}
