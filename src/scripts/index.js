const navToggle = () => {
  var e = document.getElementById("burger"),
    t = document.querySelector(".dropdown-content"),
    n = "images/burger.svg";
  e.addEventListener("click", () => {
    t.classList.toggle("dropdown-content-active"),
      e.src === n ? (e.src = "images/collapse.svg") : (e.src = n);
  });
};
navToggle();
