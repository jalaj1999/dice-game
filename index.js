alert("Welcome to website .Lets resolve your quarel with dices");
var ran1=Math.floor(Math.random()*6)+1;
var randice= "images/dice"+ ran1 +".png";
document.querySelectorAll("img")[0].setAttribute("src",randice);
var ran2=Math.floor(Math.random()*6)+1;
var randice= "images/dice"+ ran2 +".png";
document.querySelectorAll("img")[1].setAttribute("src",randice);

if(ran1>ran2)
document.querySelector("h1").innerHTML="🚩Player 1 WON";
else if(ran1==ran2)
document.querySelector("h1").innerHTML="DRAW";
else
document.querySelector("h1").innerHTML="Player 2 WON🚩";