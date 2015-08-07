
var sunset = document.getElementById("sunset");
var sky = document.getElementById("sky-pic");
var contaianer = document.getElementById("contaianer");
var windowWidth = 255/window.screen.width;

document.documentElement.addEventListener("mousemove", function (e) {
  var colorX = parseInt(e.pageX*windowWidth);
  contaianer.style.background = "-webkit-gradient(radial, 50% 50%, 0, 80% 40%, 100, from(rgb(255," + colorX + ",0)), to(#fff))";
  contaianer.style.background = "-webkit-radial-gradient(50% 50%, closest-corner, rgb(255," + colorX + ",0), #fff)";
  contaianer.style.background = "-moz-radial-gradient(50% 50%, closest-corner, rgb(255," + colorX + ",0), #fff)";
  contaianer.style.background = "-ms-radial-gradient(50% 50%, closest-corner, rgb(255," + colorX + ",0), #fff)";

});
