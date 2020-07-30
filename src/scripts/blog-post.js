var preloader = document.querySelector('.preloader');

window.addEventListener('load', function(){
  preloader.style.display= 'none';
})

// Side navigation
function w3_open() {
    var x = document.getElementById("mySidebar");
    x.style.width = "100%";
    x.style.fontSize = "40px";
    x.style.paddingTop = "10%";
    x.style.display = "block";
  }
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
  }

//   const currentURL;  
//   function getURL() {
//     currentURL = window.location.href;
// }

// getURL();

// const fbshare = document.querySelector('.fb-share');
// const tshare = document.querySelector('.t-share');
// const lishare = document.querySelector('.li-share');

// fbshare.setAttribute('href', 'https://www.facebook.com/sharer/sharer.php?u='+currentURL);



  var md = document.getElementById('md');
  var mdcontent = md.innerHTML;
  console.log(mdcontent);


