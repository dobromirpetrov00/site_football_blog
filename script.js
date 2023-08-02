// navigation menu
var navButton = document.querySelector(".navigation-menu-button img");
if (navButton.addEventListener) {
   navButton.addEventListener("click", function() {
      var nav = document.querySelector(".sitenavigation ul");
      if (nav.style.display === "block") {
         nav.style.display = "";
      } else {
         nav.style.display = "block";
      }
   }, false);
} else if (navButton.attachEvent) {
   navButton.attachEvent("onclick", function() {
      var nav = document.querySelector(".sitenavigation ul");
      if (nav.style.display === "block") {
         nav.style.display = "";
      } else {
         nav.style.display = "block";
      }
   });
}

// clock
function clock() {
   const deg = 6;
   const hour = document.querySelector(".hour-hand");
   const minute = document.querySelector(".minute-hand");
   const second = document.querySelector(".second-hand");

   let day = new Date();
   let hh = day.getHours() * 30;
   let mm = day.getMinutes() * deg;
   let ss = day.getSeconds() * deg;

   hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
   minute.style.transform = `rotateZ(${mm}deg)`;
   second.style.transform = `rotateZ(${ss}deg)`;
}
 
setInterval(clock, 1000);
