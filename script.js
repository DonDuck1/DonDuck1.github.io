setTimeout( function() { imgremoval1(); }, 250);
setTimeout( function() { imgremoval2(); }, 250);
function imgremoval1() {
    var element = document.getElementById("animationfixjs");
    element.classList.remove("animationfix");
  } 
function imgremoval2() {
    var element = document.getElementById("animationfixjs");
    element.classList.add("animationfixnodisplay");
} 