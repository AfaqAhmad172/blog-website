// Navbar color inverter

let image = document.getElementById("image");
let currentSrc = image.getAttribute("src");
let hamburger = document.querySelector("#ham-link");
let searchBar = document.querySelector("#search-bar");
let hero = document.querySelector("#my-hero");

window.addEventListener("scroll", function () {
  let navbar = document.querySelector("#nav-wrapper");
  if (window.scrollY > navbar.offsetHeight) {
    navbar.classList.add("scrolled", "nav-color", "shadow", "z-3");
    image.setAttribute("src", "assets/images/logo-black.png");
    hamburger.style.top = "13%";
    searchBar.classList.add("scroll-search");
    hero.classList.add("hero-transition");
  } else {
    navbar.classList.remove("scrolled", "nav-color", "shadow");
    image.setAttribute("src", "assets/images/logo.png");
    searchBar.classList.remove("scroll-search");
    hero.classList.remove("hero-transition");
  }
});

// Incrementer

document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll("#counter");
  // console.log(counters);

  counters.forEach((counter) => {
    startCounting(counter);
  });

  function startCounting(element) {
    const target = parseInt(element.dataset.target);
    let count = 0;
    const increment = Math.ceil(target / 100); // Increment based on 100 steps
    const interval = setInterval(() => {
      count += increment;
      if (count >= target) {
        count = target;
        clearInterval(interval);
      }
      element.textContent = count + " ";

      // element.textContent = count + " " + element.textContent.split(" ")[1];
    }, 150); // Interval for smoother animation, adjust as needed
  }
});

//  -------Scroll Button-------------------

// Show scroll-to-top button on scroll
window.addEventListener("scroll", function () {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (window.scrollY > 0 || document.documentElement.scrollTop > 0) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});

// Smooth scroll to top when button is clicked
document
  .getElementById("scrollToTopBtn")
  .addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    // console.log("clicked");
  });

//  -----------media query class implementation-------

// It can return Boolean value either the query match or not
function checkMediaQuery(query) {
  return window.matchMedia(query).matches;
}

// Function to toggle class based on media query
function toggleClassByMediaQuery(query, element, className) {
  if (checkMediaQuery(query)) {
    element.classList.add(className);
  } else {
    element.classList.remove(className);
  }
}
// There are 3 parameters
//  toggleClassByMediaQuery("Query", 'element where apply', "current class of element which can toggle")
window.addEventListener("resize", function () {
  toggleClassByMediaQuery("max-width: 575px", scrollToTopBtn, "show");
});

// -------Scroll Done------

// Logos Scroll infinite animation

const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });


  });
}
