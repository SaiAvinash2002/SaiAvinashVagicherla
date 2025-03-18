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
    console.log(entries);
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // root: null ante in the viewport ani
    root: null,
    // It means threshold 0% viewport lo vunte
    threshold: 0,
    // to add the sticky class 80px before the section has crossed
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

// Toggle mobile navigation
btnMobileNav.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

// Close mobile navigation when clicking on a link
navList.addEventListener("click", function (e) {
  if (e.target.classList.contains("nav-item")) {
    header.classList.remove("nav-open");
  }
});
