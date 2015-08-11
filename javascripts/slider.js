
var counter = 0;
var slides = document.getElementById("slides");
var projSlides = document.getElementsByClassName("project-slides");
var nav = document.getElementById("nav");
var navMenu = document.getElementById("nav-menu");
var navList = document.getElementById("nav-list");

//project//

slides.addEventListener("click", function(e) {
  if (e.target.className === "fa fa-caret-right next") {
    projSlides[counter].style.display = "none";
    counter ++;
    if (counter === projSlides.length) {
      counter = 0;
    }
    projSlides[counter].style.display = "block";

  }
  if (e.target.className === "fa fa-caret-left prev") {
    projSlides[counter].style.display = "none";
    if (counter === 0) {
      counter = projSlides.length - 1;
    } else {
      counter --;
    }
    projSlides[counter].style.display = "block";

  }
  if (e.target.className === "back") {
    projSlides[counter].style.display = "none";
    counter = 0;
    nav.style.width = "400px";
    window.setTimeout(function() {
      navMenu.style.display = "block";
      navList.style.display = "block";
    }, 1000);
  }
});

// resume //


