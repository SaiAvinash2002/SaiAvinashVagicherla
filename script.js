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
