var weapons = ["rock", "paper", "scissors"];
//var weaponOfChoice = weapons[parseInt(Math.random()*weapons.length) %3];


var hand1 = "";
var hand2 = "";
var player1_wins = 0;
var player2_wins = 0;

while(player1_wins < 3 && player2_wins < 3) {
  hand1 = weapons[parseInt(Math.random()*weapons.length) %3];
  hand2 = weapons[parseInt(Math.random()*weapons.length) %3];
  console.log("Player 1: ", hand1);
  console.log("Player 2: ", hand2);
  if(hand1 === hand2) {
    console.log("It's a tie, play again!")
  } else if(hand1 === "scissors") {
    switch(hand2) {
      case "paper":
        console.log("Player 1 wins!");
        player1_wins += 1;
        break;
      case "rock":
        console.log("Player 2 wins");
        player2_wins += 1;
        break;
    }
  } else if(hand1 === "rock") {
      switch(hand2) {
        case "scissors":
          console.log("Player 1 wins!");
          player1_wins += 1;
          break;
        case "paper":
          console.log("Player 2 wins");
          player2_wins += 1;
          break;
      }
  } else if(hand1 === "paper") {
      switch(hand2) {
        case "rock":
          console.log("Player 1 wins!");
          player1_wins += 1;
          break;
        case "scissors":
          console.log("Player 2 wins");
          player2_wins += 1;
          break;
      }
  }
}

console.log("Player 1 total wins: ", player1_wins);
console.log("Player 2 total wins: ", player2_wins);
