//player name
let player1 = "player1";
let player2 = "player2";

function enterPlayerName() {
  player1 = prompt("change player1 Name ");
  player2 = prompt("change player2 Name ");

  if (player1.length < 1 || player2.length < 1) {
    alert("please enter your name");
    return;
  }
  document.querySelector("p.player1").innerHTML = player1;
  document.querySelector("p.player2").innerHTML = player2;
}

function rollTheDice() {
  let diceNum1 = document.querySelector(".img1");
  let diceNum2 = document.querySelector(".img2");

  diceNum1.setAttribute("src", "Games.gif");
  diceNum2.setAttribute("src", "Games.gif");

  let result = document.querySelector("h1");
  result.innerHTML = "";
  setTimeout(() => {
    // add sound
    let audioSound = new Audio("dice.mp3");
    audioSound.play();
    //
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;

    diceNum1.setAttribute("src", "dice" + randomNumber1 + ".png");
    diceNum2.setAttribute("src", "dice" + randomNumber2 + ".png");

    //to get the winner
    if (randomNumber1 === randomNumber2) {
      result.innerHTML = "Draw!!";
    } else if (randomNumber1 < randomNumber2) {
      result.innerHTML = player2 + " wins!!";
    } else {
      result.innerHTML = player1 + " Wins!!";
    }
  }, 2000);
  //timeout
}
