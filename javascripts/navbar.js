var menu = document.getElementById("menu");
var vinh = document.getElementById("vinh");
var nav = document.getElementById("nav");
var hide = document.getElementById("hide");
var wrapper = document.getElementById("wrapper");
var blog = document.getElementById("blog");
var projects = document.getElementById("projects");
var resume = document.getElementById("resume");
var contact = document.getElementById("contact");
var navMenu = document.getElementById("nav-menu");
var navList = document.getElementById("nav-list");
var projSlider = document.getElementsByClassName("project-slides");
var resumeContainer = document.getElementById("resume-container");
var contactContainer = document.getElementById("contact-container");

menu.addEventListener("click", function(e) {
  menu.style.display = "none";
  nav.style.width = "400px";
  window.setTimeout(function() {
    nav.className = "nav-expand";
    vinh.className = "vinh-expand";
  }, 1000);
  window.setTimeout(function() {
    hide.style.display = "block";
    hide.style.float = "none";
  }, 1250);
  window.setTimeout(function() {
    blog.style.display = "block";
  }, 1550);
  window.setTimeout(function() {
    projects.style.display = "block";
  }, 1600);
  window.setTimeout(function() {
    resume.style.display = "block";
  }, 1650);
  window.setTimeout(function() {
    contact.style.display = "block";
  }, 1700);
});

hide.addEventListener("click", function(e) {
  if (document.documentElement.clientWidth < 600) {
    nav.className = "nav-down";
  } else {
    nav.className = "nav-up";
  }
  window.setTimeout(function() {
    contact.style.display = "none";
  }, 300);
  window.setTimeout(function() {
    resume.style.display = "none";
  }, 350);
  window.setTimeout(function() {
    projects.style.display = "none";
  }, 400);
  window.setTimeout(function() {
    blog.style.display = "none";
  }, 450);
  window.setTimeout(function() {
    hide.style.display = "none";
  }, 750);
  window.setTimeout(function() {
    menu.style.display = "inline-block";
  }, 1500);
  window.setTimeout(function() {
    nav.style.width = "100%";
  if (document.documentElement.clientWidth < 600) {
    vinh.className = "vinh-down";
  } else {
    vinh.className = "vinh-up";
  }
  }, 1000);
});

projects.addEventListener("click", function(e) {
  nav.style.width = "100%";
  navMenu.style.display = "none";
  navList.style.display = "none";
  window.setTimeout(function() {
    projSlider[0].style.display = "block";
  }, 1000);
});

resume.addEventListener("click", function(e) {
  nav.style.width = "100%";
  navMenu.style.display = "none";
  navList.style.display = "none";
  window.setTimeout(function() {
    resumeContainer.style.display = "block";
  }, 1000);
});

resumeContainer.addEventListener("click", function(e) {
  if (e.target.className === "back") {
    resumeContainer.style.display = "none";
    nav.style.width = "400px";
    window.setTimeout(function() {
      navMenu.style.display = "block";
      navList.style.display = "block";
    }, 1000);
  }
});

contact.addEventListener("click", function(e) {
  nav.style.width = "100%";
  navMenu.style.display = "none";
  navList.style.display = "none";
  window.setTimeout(function() {
    contactContainer.style.display = "block";
  }, 1000);
});

contactContainer.addEventListener("click", function(e) {
  if (e.target.className === "back") {
    contactContainer.style.display = "none";
    nav.style.width = "400px";
    window.setTimeout(function() {
      navMenu.style.display = "block";
      navList.style.display = "block";
    }, 1000);
  }
});
