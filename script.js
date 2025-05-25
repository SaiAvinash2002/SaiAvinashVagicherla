/****************************************/
/* PROGRESS BAR**/
/****************************************/
const progressBar = document.querySelector(".nav-progress-bar");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;

  progressBar.style.width = scrollPercent + "%";
});

// Dynamic Typing Effect
document.addEventListener("DOMContentLoaded", function () {
  const jobTitlesContainer = document.querySelector(".typing-effect");
  const jobTitles = ["Web Developer.", "Programmer.", "Problem Solver."];

  let currentTitleIndex = 0;
  let index = 0;
  let isDeleting = false;

  function typeWriter() {
    const currentTitle = jobTitles[currentTitleIndex % jobTitles.length];

    if (isDeleting) {
      index--;
      jobTitlesContainer.textContent = currentTitle.substring(0, index);
    } else {
      index++;
      jobTitlesContainer.textContent = currentTitle.substring(0, index + 1);
    }

    let speed = isDeleting ? 100 : 150;

    // Index came to the end. So, need to start deleting
    if (!isDeleting && index == currentTitle.length) {
      isDeleting = true;
      speed = 1000; // wait 1s before deleting
    }
    // Deleting is done. Move to next title
    else if (isDeleting && index === 0) {
      // Move to next word
      isDeleting = false;
      currentTitleIndex++;
      speed = 300;
    }

    setTimeout(typeWriter, speed);
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

window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};

const cards = document.querySelectorAll(".skill-card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal");
        observer.unobserve(entry.target); // Animate only once
      }
    });
  },
  {
    threshold: 0.2,
  }
);

cards.forEach((card) => {
  observer.observe(card);
});
