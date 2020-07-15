const navToggle = () => {
  var e = document.getElementById("burger"),
    t = document.querySelector(".dropdown-content"),
    n = "/src/images/burger.svg";
  e.addEventListener("click", () => {
    t.classList.toggle("dropdown-content-active"),
      e.src === n ? (e.src = "/src/images/collapse.svg") : (e.src = n);
  });
};
navToggle();

var preloader = document.querySelector('.preloader');

window.addEventListener('load', function(){
  preloader.style.display= 'none';
})
