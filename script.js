// const fname = "Muhammed embarak";
// const h1= document.querySelector(".heading-primary")
// console.log(fname);
// console.log(h1);
// h1.textContent = fname;
// h1.style.backgroundColor = "red";
// h1.style.padding = "2REM";
// h1.addEventListener("click", function () {
//   h1.textContent= myName;
//   h1.style.backgroundColor = "blue";
//   h1.style.padding = "335rem";
// });


////////////////////////
//set current year
const yearEL = document.querySelector(".year");
const currentYear = new Date().getFullYear();
///////////////////////////////////////////

// Make mobile navigation work
const btnnavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnnavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

////////////////////////////////////////
///smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    //scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const secionEL = document.querySelector(href);
      secionEL.scrollIntoView({ behavior: "smooth" });}
      //close mobile navigation
      if (link.classList.contains("main-nav-link"))
        headerEL.classList.toggle("nav-open");
    
  });
});

//0make mobile navgition work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEL = document.querySelector(".header");
btnNavEl.addEventListener("click", function () {
  headerEL.classList.toggle("nav-open");
});
/////////////////////////////////////////////////
//sticky navigiton
const sectionheroEL = document.querySelector(".section-hero")
const  obs = new IntersectionObserver(function (entries) {
  const ent = entries[0];



if (ent.isIntersecting === false) {
document.body.classList.add("sticky");
}
if (ent.isIntersecting === true) {
document.body.classList.remove("sticky");
}
},
 {
  //in the viewport
  root: null,
  threshold: 0,
  // rootMargin: "-8px",
 }
);
obs.observe(sectionheroEL);










///////////////////////////////////////////////////////////
//  Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

