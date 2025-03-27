// Dynamic Typing Effect
document.addEventListener("DOMContentLoaded", function () {
  const jobTitlesContainer = document.querySelector(
    ".hero-title span:last-child"
  );
  const jobTitles = ["Web Developer", "Programmer", "Problem Solver"];
  let currentTitleIndex = 0;
  let currentCharIndex = 0;
  let isDeleting = false;

  function typeWriter() {
    const currentTitle = jobTitles[currentTitleIndex];
    const textElement = jobTitlesContainer;

    if (!isDeleting && currentCharIndex <= currentTitle.length) {
      textElement.textContent = currentTitle.slice(0, currentCharIndex + 1);
      currentCharIndex++;
    }

    if (isDeleting && currentCharIndex > 0) {
      textElement.textContent = currentTitle.slice(0, currentCharIndex - 1);
      currentCharIndex--;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && currentCharIndex === currentTitle.length) {
      typeSpeed = 2000;
      isDeleting = true;
    }

    if (isDeleting && currentCharIndex === 0) {
      isDeleting = false;
      currentTitleIndex = (currentTitleIndex + 1) % jobTitles.length;
    }

    setTimeout(typeWriter, typeSpeed);
  }

  typeWriter();

  // Existing portfolio script code (from previous artifact)
  /****************************************/
  /* FOOTER YEAR TO CHANGE DYNAMICALLY**/
  /****************************************/

  const yearEl = document.querySelector(".year");
  const yearClass = new Date().getFullYear();
  yearEl.textContent = yearClass;

  /****************************************/
  /************** STICKY NAV **************/
  /****************************************/

  const sectionHero = document.querySelector(".section-hero");
  const obs = new IntersectionObserver(
    function (entries) {
      const ent = entries[0];
      if (!ent.isIntersecting) {
        document.body.classList.add("sticky");
      }
      if (ent.isIntersecting) {
        document.body.classList.remove("sticky");
      }
    },
    {
      root: null,
      threshold: 0,
      rootMargin: "-82px",
    }
  );
  obs.observe(sectionHero);

  /****************************************/
  /************ MOBILE NAVIGATION *********/
  /****************************************/

  const header = document.querySelector(".header");
  const btnMobileNav = document.querySelector(".btn-mobile-nav");
  const navList = document.querySelector(".nav-list");

  btnMobileNav.addEventListener("click", function () {
    header.classList.toggle("nav-open");
  });

  navList.addEventListener("click", function (e) {
    if (e.target.classList.contains("nav-item")) {
      header.classList.remove("nav-open");
    }
  });

  // Add hover effect to skill cards
  const skillCards = document.querySelectorAll(".skill-card");
  skillCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-10px)";
      card.style.boxShadow = "0 1rem 2rem rgba(14, 255, 255, 0.1)";
      card.style.transition = "all 0.3s ease";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
      card.style.boxShadow = "none";
    });
  });
});
