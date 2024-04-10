var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var images = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + images;
﻿
var imageY = document.querySelectorAll("img")[0];

imageY.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var imaged = "images/dice" + randomNumber2 + ".png";

//var randomImageSource = "images/" + images;
﻿
var imagedY = document.querySelectorAll("img")[1];

imagedY.setAttribute("src", imaged);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "🚩 Play 2 Wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw ";
}