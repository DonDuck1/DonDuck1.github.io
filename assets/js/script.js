setTimeout( function() { imgremoval1(); }, 250);
setTimeout( function() { imgremoval2(); }, 250);
function imgremoval1() {
	var imgremove1 = document.getElementById("animationfixjs");
	imgremove1.classList.remove("animationfix");
}
function imgremoval2() {
	var imgremove2 = document.getElementById("animationfixjs");
	imgremove2.classList.add("animationfixnodisplay");
}
setTimeout(function () { imgremoval3(); }, 250);
setTimeout(function () { imgremoval4(); }, 250);
function imgremoval3() {
	var imgremove3 = document.getElementById("animationfixdivjs");
	imgremove3.classList.remove("animationfixdiv");
}
function imgremoval4() {
	var imgremove4 = document.getElementById("animationfixdivjs");
	imgremove4.classList.add("animationfixdivnodisplay");
}

setTimeout(function () { animationSpeedFix(); }, 250);
function animationSpeedFix() {
	var animationSpeedFixVar = document.getElementById("nav_bar_3");
	animationSpeedFixVar.style.animationDuration = "250ms";
}