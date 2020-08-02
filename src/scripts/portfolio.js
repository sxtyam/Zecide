const myHeaders = new Headers();
var token = getCookie('token');
myHeaders.append('authorization', 'Token ' + token);


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


$(".chosen-select").chosen();