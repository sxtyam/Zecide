var fname = document.querySelector(".fname");
var lname = document.querySelector(".lname");
var logbtn = document.querySelector(".log-btn");
var signbtn = document.querySelector(".sign-btn");
var submitbtn = document.querySelector(".submit-btn");
var heading1 = document.querySelector("h1");
var heading2 = document.querySelector("h2");

function logf() {
  fname.style.display = "none";
  lname.style.display = "none";
  submitbtn.setAttribute("value", "Log In");
  signbtn.style.borderBottom = "0px solid #ffffff";
  signbtn.style.fontWeight = "300";
  logbtn.style.borderBottom = "3px solid #ffffff";
  logbtn.style.fontWeight = "800";
  heading1.innerHTML = "Welcome Back!";
  heading2.innerHTML = "It’s good to see you again.";
}

function signf() {
  fname.style.display = "inline";
  lname.style.display = "inline";
  submitbtn.setAttribute("value", "Sign In");
  logbtn.style.borderBottom = "0px solid #ffffff";
  logbtn.style.fontWeight = "300";
  signbtn.style.borderBottom = "3px solid #ffffff";
  signbtn.style.fontWeight = "800";
  heading1.innerHTML = "Let’s Get Started!";
  heading2.innerHTML = "SIgn up and get access to all the features of Zecide.";
}

