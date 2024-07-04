var user1 = prompt("Enter Player 1 Name");
var user2 = prompt("Enter Player 2 Name");

document.querySelectorAll("p")[0].innerHTML=user1;
document.querySelectorAll("p")[1].innerHTML=user2;

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImage = "dice"+ randomNumber1 +".png";

var rSource = "images/"+ randomImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", rSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImage1 = "dice"+ randomNumber2 +".png";

var rSource1 = "images/"+ randomImage1;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", rSource1);


if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = user1+" Wins!🚩";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 "+user2+ " Wins!";
}
else{
    document.querySelector("h1").innerHTML = "Its a Draw!";
}