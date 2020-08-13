var q1 = document.querySelector(".q1");
var q2 = document.querySelector(".q2");
var q3 = document.querySelector(".q3");
var q4 = document.querySelector(".q4");
var q1i = document.querySelector(".q1-img");
var q2i = document.querySelector(".q2-img");
var q3i = document.querySelector(".q3-img");
var q4i = document.querySelector(".q4-img");

function showQ2() {
  q1.style.display = "none";
  q2.style.display = "block";
  q1i.style.display = "none";
  q2i.style.display = "block";
}

function showQ3() {
    q2.style.display = "none";
    q3.style.display = "block";
    q2i.style.display = "none";
    q3i.style.display = "block";
}

function showQ4() {
    q3.style.display = "none";
    q4.style.display = "block";
    q3i.style.display = "none";
    q4i.style.display = "block";
}

function changeColor(){
    btn
}

const navToggle = () => {
    var e = document.getElementById("burger"),
      t = document.querySelector(".dropdown-content"),
      n = "/src/images/dropdown-button.svg";
    e.addEventListener("click", () => {
      t.classList.toggle("dropdown-content-active");
      e.src === n ? (e.src = "/src/images/dropdown-button.svg") : (e.src = n);
    });
  };
  navToggle();

  
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
    }
  
  function getUsername(){
    var userName = document.getElementById('user-name');
    userName.innerHTML = getCookie("UserName");
  }
  
  getUsername();
  
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
*Insert Email Address*`, "font-family:monospace");
})