const navToggle = () => {
  var e = document.getElementById("burger"),
    t = document.querySelector(".dropdown-content"),
    n = "/src/images/burger.svg";
  e.addEventListener("click", () => {
    t.classList.toggle("dropdown-content-active");
      e.src === n ? (e.src = "/src/images/collapse.svg") : (e.src = n);
  });
};
navToggle();

var preloader = document.querySelector('.preloader');

window.addEventListener('load', function(){
  preloader.style.display= 'none';
  console.log(`%c   ______  _____   _____   _   _____   _____  
  |___  / | ____| /  ___| | | |  _  | | ____| 
     / /  | |__   | |     | | | | | | | |__   
    / /   |  __|  | |     | | | | | | |  __|  
   / /__  | |___  | |___  | | | |_| | | |___  
  /_____| |_____| |_____| |_| |_____/ |_____| 

       
  
         _(____)_
  ___ooO_(_o__o_)_Ooo___
  

Well hello there...
Don’t you have a curious mind, taking a little peek under the hood.
It just so happens we’re always eager to meet curious minds like yours.
Interested in poking into Zecide projects in a MORE in-depth way?
Interested in getting paid for it?

Get in touch with us to know about the opening for our team:
*Insert Email Address*`, "font-family:monospace")
})
