/*  Group Name: The Average Joes
//  Group Members: Bruce Li (Leader), Matt Irby, Wesley Nguyen, Zachary Gay
//  File Name: fifteen.js
//  Purpose: This is the javascript file fifteen.html's puzzle piece movement.
*/

//holds the top and left coordinate of the blank spot


var blankTop = 300;
var blankLeft = 300;

document.getElementById("one").style.backgroundPosition = "0px 0px";
document.getElementById("one").style.left = "0px";
document.getElementById("one").style.top = "0px";
document.getElementById("one").onmouseover = highlight;
document.getElementById("one").onmouseout = unhighlight;
document.getElementById("one").onclick = move;

document.getElementById("two").style.backgroundPosition = "-100px 0px";
document.getElementById("two").style.left = "100px";
document.getElementById("two").style.top = "0px";
document.getElementById("two").onmouseover = highlight;
document.getElementById("two").onmouseout = unhighlight;
document.getElementById("two").onclick = move;

document.getElementById("three").style.backgroundPosition = "-200px 0px";
document.getElementById("three").style.left = "200px";
document.getElementById("three").style.top = "0px";
document.getElementById("three").onmouseover = highlight;
document.getElementById("three").onmouseout = unhighlight;
document.getElementById("three").onclick = move;

document.getElementById("four").style.backgroundPosition = "-300px 0px";
document.getElementById("four").style.left = "300px";
document.getElementById("four").style.top = "0px";
document.getElementById("four").onmouseover = highlight;
document.getElementById("four").onmouseout = unhighlight;
document.getElementById("four").onclick = move;

document.getElementById("five").style.backgroundPosition = "0px -100px";
document.getElementById("five").style.left = "0px";
document.getElementById("five").style.top = "100px";
document.getElementById("five").onmouseover = highlight;
document.getElementById("five").onmouseout = unhighlight;
document.getElementById("five").onclick = move;

document.getElementById("six").style.backgroundPosition = "-100px -100px";
document.getElementById("six").style.left = "100px";
document.getElementById("six").style.top = "100px";
document.getElementById("six").onmouseover = highlight;
document.getElementById("six").onmouseout = unhighlight;
document.getElementById("six").onclick = move;

document.getElementById("seven").style.backgroundPosition = "-200px -100px";
document.getElementById("seven").style.left = "200px";
document.getElementById("seven").style.top = "100px";
document.getElementById("seven").onmouseover = highlight;
document.getElementById("seven").onmouseout = unhighlight;
document.getElementById("seven").onclick = move;

document.getElementById("eight").style.backgroundPosition = "-300px -100px";
document.getElementById("eight").style.left = "300px";
document.getElementById("eight").style.top = "100px";
document.getElementById("eight").onmouseover = highlight;
document.getElementById("eight").onmouseout = unhighlight;
document.getElementById("eight").onclick = move;

document.getElementById("nine").style.backgroundPosition = "0px -200px";
document.getElementById("nine").style.left = "0px";
document.getElementById("nine").style.top = "200px";
document.getElementById("nine").onmouseover = highlight;
document.getElementById("nine").onmouseout = unhighlight;
document.getElementById("nine").onclick = move;

document.getElementById("ten").style.backgroundPosition = "-100px -200px";
document.getElementById("ten").style.left = "100px";
document.getElementById("ten").style.top = "200px";
document.getElementById("ten").onmouseover = highlight;
document.getElementById("ten").onmouseout = unhighlight;
document.getElementById("ten").onclick = move;

document.getElementById("eleven").style.backgroundPosition = "-200px -200px";
document.getElementById("eleven").style.left = "200px";
document.getElementById("eleven").style.top = "200px";
document.getElementById("eleven").onmouseover = highlight;
document.getElementById("eleven").onmouseout = unhighlight;
document.getElementById("eleven").onclick = move;

document.getElementById("twelve").style.backgroundPosition = "-300px -200px";
document.getElementById("twelve").style.left = "300px";
document.getElementById("twelve").style.top = "200px";
document.getElementById("twelve").onmouseover = highlight;
document.getElementById("twelve").onmouseout = unhighlight;
document.getElementById("twelve").onclick = move;

document.getElementById("thirteen").style.backgroundPosition = "0px -300px";
document.getElementById("thirteen").style.left = "0px";
document.getElementById("thirteen").style.top = "300px";
document.getElementById("thirteen").onmouseover = highlight;
document.getElementById("thirteen").onmouseout = unhighlight;
document.getElementById("thirteen").onclick = move;

document.getElementById("fourteen").style.backgroundPosition = "-100px -300px";
document.getElementById("fourteen").style.left = "100px";
document.getElementById("fourteen").style.top = "300px";
document.getElementById("fourteen").onmouseover = highlight;
document.getElementById("fourteen").onmouseout = unhighlight;
document.getElementById("fourteen").onclick = move;

document.getElementById("fifteen").style.backgroundPosition = "-200px -300px";
document.getElementById("fifteen").style.left = "200px";
document.getElementById("fifteen").style.top = "300px";
document.getElementById("fifteen").onmouseover = highlight;
document.getElementById("fifteen").onmouseout = unhighlight;
document.getElementById("fifteen").onclick = move;

document.getElementById("shuffle").onclick = shuffle;

function moveTileRight(x) {
    var left = parseInt(x.style.left) + 100;
    x.style.left = left + "px";
    blankLeft -= 100;
}

function moveTileLeft(x) {
    var left = parseInt(x.style.left) - 100;
    x.style.left = left + "px";
    blankLeft += 100;
}

function moveTileUp(x) {
    var top = parseInt(x.style.top) - 100;
    x.style.top = top + "px";
    blankTop += 100;
}

function moveTileDown(x) {
    var top = parseInt(x.style.top) + 100;
    x.style.top = top + "px";
    blankTop -= 100;
}

function neighborBottom(x) {

    if ((((parseInt(x.style.top, 10) + 100) === blankTop)) && (parseInt(x.style.left, 10) === blankLeft)) {
        return true;
    } else {
        return false;
    }
}

function neighborTop(x) {

    if ((((parseInt(x.style.top, 10) - 100) === blankTop)) && (parseInt(x.style.left, 10) === blankLeft)) {
        return true;
    } else {
        return false;
    }
}

function neighborLeft(x) {

    if ((((parseInt(x.style.left, 10) - 100) === blankLeft)) && (parseInt(x.style.top, 10) === blankTop)) {
        return true;
    } else {
        return false;
    }
}

function neighborRight(x) {
    if ((((parseInt(x.style.left, 10) + 100) === blankLeft)) && (parseInt(x.style.top, 10) === blankTop)) {
        return true;
    } else {
        return false;
    }
}

function isNeighbor(x) {
    if (neighborBottom(x) || neighborLeft(x) || neighborRight(x) || neighborTop(x)) {
        return true;
    } else {
        return false;
    }
}


function highlight() {
	if (isNeighbor(this)) {
        this.className += " redHighlight";
    }

}

function unhighlight() { 
	if (isNeighbor(this)){
		this.className = "tile";
	}
}

function move() {
    if (neighborBottom(this)) {
        moveTileDown(this);
    } else if (neighborRight(this)) {
        moveTileRight(this);
    } else if (neighborLeft(this)) {
        moveTileLeft(this);
    } else if (neighborTop(this)) {
        moveTileUp(this);
    }
    
}

function move(x){
	if (neighborBottom(x)) {
		moveTileDown(x);
	} else if (neighborRight(x)) {
		moveTileRight(x);
	} else if (neighborLeft(x)) {
		moveTileLeft(x);
	} else if (neighborTop(x)) {
		moveTileUp(x);
	}
}

function getTile(x){
	if(x===0){
		return document.getElementById("one");
	}
	else if(x===1){
		return document.getElementById("two");
	}
	else if(x===2){
		return document.getElementById("three");
	}
	else if(x===3){
		return document.getElementById("four");
	}
	else if(x===4){
		return document.getElementById("five");
	}
	else if(x===5){
		return document.getElementById("six");
	}
	else if(x===6){
		return document.getElementById("seven");
	}
	else if(x===7){
		return document.getElementById("eight");
	}
	else if(x===8){
		return document.getElementById("nine");
	}
	else if(x===9){
		return document.getElementById("ten");
	}
	else if(x===10){
		return document.getElementById("eleven");
	}
	else if(x===11){
		return document.getElementById("twelve");
	}
	else if(x===12){
		return document.getElementById("thirteen");
	}
	else if(x===13){
		return document.getElementById("fourteen");
	}
	else{
		return document.getElementById("fifteen");
	}
}

function shuffle(){
	
	var randNum = Math.floor(Math.random()*15);
	var tile = getTile(randNum);
	
	var i=0;
	while(i<100){
		var randNum = Math.floor(Math.random()*15);
		var tile = getTile(randNum);
		if(checkTile(tile)){
			i++;
		}
	}
	
	
	
}

function checkTile(x){
	if(isNeighbor(x)){
		move(x);
		return true;
	}
	else{
	return false;
	}
}


//
//var move = function () {
//    if (neighborBottom) {
//        moveTileDown();
//    } else if (neighborLeft) {
//        moveTileLeft();
//    } else if (neighborRight) {
//        moveTileRight();
//    } else if (neighborTop) {
//        moveTileUp();
//    }
//};


//topPos
//leftPos
//
//top + 100 = topPos && left = leftPos //on top of blank
//left - 100 = leftPos && top = topPos //to the left of blank
//
//top - 100 = topPos && left = leftPos //on bottom of blank

//left + 100 = leftPos && top = topPos //to the right of blank

//left + 100 = leftPos && top = topPos //to the right of blank

