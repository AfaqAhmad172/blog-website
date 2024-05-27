
// Navbar color inverter 

let image = document.getElementById('image');
let currentSrc = image.getAttribute('src');
let hamburger = document.querySelector("#ham-link");
let searchBar = document.querySelector("#search-bar");
let hero = document.querySelector("#my-hero");


window.addEventListener('scroll', function() {
let navbar = document.querySelector('#nav-wrapper');
if (window.scrollY > navbar.offsetHeight) {
  navbar.classList.add('scrolled','nav-color','shadow','z-3');
  image.setAttribute('src', 'assets/images/logo-black.png');
  hamburger.style.top = "13%";
  searchBar.classList.add("scroll-search");
  hero.classList.add("hero-transition");
} else {
  navbar.classList.remove('scrolled','nav-color','shadow');
  image.setAttribute('src', 'assets/images/logo.png');
  searchBar.classList.remove("scroll-search");
  hero.classList.remove("hero-transition");
}
});



//  -------Scroll Button-------------------


// Show scroll-to-top button on scroll
window.addEventListener('scroll', function() {
  var scrollToTopBtn = document.getElementById('scrollToTopBtn');
  if (window.scrollY > 0 || document.documentElement.scrollTop > 0) {
    scrollToTopBtn.classList.add('show');
  } else {
    scrollToTopBtn.classList.remove('show');
  }
});

// Smooth scroll to top when button is clicked
document.getElementById('scrollToTopBtn').addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
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
  window.addEventListener("resize", function(){
    toggleClassByMediaQuery("max-width: 575px", scrollToTopBtn, "show");
  })
  
        // -------Scroll Done------ 
  
