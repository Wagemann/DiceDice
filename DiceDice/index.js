var randomNumber1 = Math.floor(Math.random() * 6) + 1
var randomNumber2 = Math.floor(Math.random() * 6) + 1
var dice1 = document.images[0]
var dice2 = document.images[1] 

console.log(randomNumber1)
if (randomNumber1 == 1){
    dice1.setAttribute("src", "images/dice1.png");
} else if (randomNumber1 == 2){
    dice1.setAttribute("src", "images/dice2.png");
} else if (randomNumber1 == 3){
    dice1.setAttribute("src", "images/dice3.png");
} else if (randomNumber1 == 4){
    dice1.setAttribute("src", "images/dice4.png");
} else if (randomNumber1 == 5){
    dice1.setAttribute("src", "images/dice5.png");
} else if (randomNumber1 == 6){
    dice1.setAttribute("src", "images/dice6.png");
}

if (randomNumber2 == 1){
    dice2.setAttribute("src", "images/dice1.png");
} else if (randomNumber2 == 2){
    dice2.setAttribute("src", "images/dice2.png");
} else if (randomNumber2 == 3){
    dice2.setAttribute("src", "images/dice3.png");
} else if (randomNumber2 == 4){
    dice2.setAttribute("src", "images/dice4.png");
} else if (randomNumber2 == 5){
    dice2.setAttribute("src", "images/dice5.png");
} else if (randomNumber2 == 6){
    dice2.setAttribute("src", "images/dice6.png");
}

if (randomNumber1 > randomNumber2){
    document.getElementsByClassName("winner")[0].innerHTML = "Player 1 is the Winner! Refresh to play again.";
} else if(randomNumber2 > randomNumber1){
    document.getElementsByClassName("winner")[0].innerHTML = "Player 2 is the Winner! Refresh to play again."
} else if(randomNumber1 == randomNumber2){
    document.getElementsByClassName("winner")[0].innerHTML = "Draw! Refresh to play again."
}