/*  Group Name: The Average Joes
//  Group Members: Bruce Li (Leader), Matt Irby, Wesley Nguyen, Zachary Gay
//  File Name: fifteen.js
//  Purpose: This is the javascript file fifteen.html's puzzle piece movement.
*/

document.getElementsByClassName("tileSection").addEventListener;

document.getElementById("one").style.backgroundPosition = "0px 0px";
document.getElementById("one").style.left = "0px";
document.getElementById("one").style.top = "0px";
document.getElementById("one").onclick = move;

document.getElementById("two").style.backgroundPosition = "-100px 0px";
document.getElementById("two").style.left = "100px";
document.getElementById("two").style.top = "0px";
document.getElementById("two").onclick = move;

document.getElementById("three").style.backgroundPosition = "-200px 0px";
document.getElementById("three").style.left = "200px";
document.getElementById("three").style.top = "0px";
document.getElementById("three").onclick = move;

document.getElementById("four").style.backgroundPosition = "-300px 0px";
document.getElementById("four").style.left = "300px";
document.getElementById("four").style.top = "0px";
document.getElementById("four").onclick = move;

document.getElementById("five").style.backgroundPosition = "0px -100px";
document.getElementById("five").style.left = "0px";
document.getElementById("five").style.top = "100px";
document.getElementById("five").onclick = move;

document.getElementById("six").style.backgroundPosition = "-100px -100px";
document.getElementById("six").style.left = "100px";
document.getElementById("six").style.top = "100px";
document.getElementById("six").onclick = move;

document.getElementById("seven").style.backgroundPosition = "-200px -100px";
document.getElementById("seven").style.left = "200px";
document.getElementById("seven").style.top = "100px";
document.getElementById("seven").onclick = move;

document.getElementById("eight").style.backgroundPosition = "-300px -100px";
document.getElementById("eight").style.left = "300px";
document.getElementById("eight").style.top = "100px";
document.getElementById("eight").onclick = move;

document.getElementById("nine").style.backgroundPosition = "0px -200px";
document.getElementById("nine").style.left = "0px";
document.getElementById("nine").style.top = "200px";
document.getElementById("nine").onclick = move;

document.getElementById("ten").style.backgroundPosition = "-100px -200px";
document.getElementById("ten").style.left = "100px";
document.getElementById("ten").style.top = "200px";
document.getElementById("ten").onclick = move;

document.getElementById("eleven").style.backgroundPosition = "-200px -200px";
document.getElementById("eleven").style.left = "200px";
document.getElementById("eleven").style.top = "200px";
document.getElementById("eleven").onclick = move;

document.getElementById("twelve").style.backgroundPosition = "-300px -200px";
document.getElementById("twelve").style.left = "300px";
document.getElementById("twelve").style.top = "200px";
document.getElementById("twelve").onclick = move;

document.getElementById("thirteen").style.backgroundPosition = "0px -300px";
document.getElementById("thirteen").style.left = "0px";
document.getElementById("thirteen").style.top = "300px";
document.getElementById("thirteen").onclick = move;

document.getElementById("fourteen").style.backgroundPosition = "-100px -300px";
document.getElementById("fourteen").style.left = "100px";
document.getElementById("fourteen").style.top = "300px";
document.getElementById("fourteen").onclick = move;

document.getElementById("fifteen").style.backgroundPosition = "-200px -300px";
document.getElementById("fifteen").style.left = "200px";
document.getElementById("fifteen").style.top = "300px";
document.getElementById("fifteen").onclick = move;

function moveTileRight() {
    var x = document.getElementById("fifteen");
    var left = parseInt(x.style.left) + 100;
    x.style.left = left + "px";
}

function moveTileLeft() {
    var x = document.getElementById("fifteen");
    var left = parseInt(x.style.left) - 100;
    x.style.left = left + "px";
}

function moveTileUp() {
    var x = document.getElementById("fifteen");
    var top = parseInt(x.style.top) - 100;
    x.style.top = top + "px";
}

function moveTileDown() {
    var x = document.getElementById("twelve");
    var top = parseInt(x.style.top) + 100;
    x.style.top = top + "px";
}

