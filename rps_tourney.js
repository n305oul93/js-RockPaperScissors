var hands = ['rock', 'paper', 'scissors'];

var p1 = {name: "Jason",
    hand: "",
    wins: 0};

var p2 = {name: "Susan",
    hand: "",
    wins: 0};

var p3 = {name: "John",
    hand: "",
    wins: 0};

var p4 = {name: "Fred",
    hand: "",
    wins: 0};

var playUntil = 5;

function updateBracket(play1, play2, play3, play4) {
    document.getElementById("player-1").innerHTML = play1.name;
    document.getElementById("player-1-score").innerHTML = play1.wins;
    document.getElementById("player-2").innerHTML = play2.name;
    document.getElementById("player-2-score").innerHTML = play2.wins;
    document.getElementById("player-3").innerHTML = play3.name;
    document.getElementById("player-3-score").innerHTML = play3.wins;
    document.getElementById("player-4").innerHTML = play4.name;
    document.getElementById("player-4-score").innerHTML = play4.wins;
    document.getElementById("winner-1-score").innerHTML = 0;
    document.getElementById("winner-2-score").innerHTML = 0;
}

function getHand() {
    return hands[parseInt(Math.random()*10)%3];player2
}

function playRound(person1, person2) {
    person1.hand = getHand();
    person2.hand = getHand();

    console.log(person1.name + ": " + person1.hand);
    console.log(person2.name + ": " + person2.hand);

    if(person1.hand === person2.hand) {
        console.log("It's a tie, play again!")
    } else if(person1.hand === "scissors") {
        switch(person2.hand) {
            case "paper":
                console.log(person1.name + " " + "wins!");
                person1.wins += 1;
                break;
            case "rock":
                console.log(person2.name + " " + "wins");
                person2.wins += 1;
                break;
        }
    } else if(person1.hand === "rock") {
        switch(person2.hand) {
            case "scissors":
                console.log(person1.name + " " + "wins!");
                person1.wins += 1;
                break;
            case "paper":
                console.log(person2.name + " " + "wins");
                person2.wins += 1;
                break;
        }
    } else if(person1.hand === "paper") {
        switch(person2.hand) {
            case "rock":
                console.log(person1.name + " " + "wins!");
                person1.wins += 1;
                break;
            case "scissors":
                console.log(person2.name + " " + "wins");
                person2.wins += 1;
                break;
        }
    }
}

function playGame(player1, player2, games) {
  while(player1.wins < games && player2.wins < games) {
      playRound(player1, player2);
  }
  console.log(player1.name + " had " + player1.wins + " wins.");
  console.log(player2.name + " had " + player2.wins + " wins.");

  //updateBracket(player1, player2);

  if(player1.wins > player2.wins){
      return player1;
  }else{return player2}
}

function playTourney(pl1, pl2, pl3, pl4, rounds) {
  var winner1 = playGame(pl1, pl2, rounds);
  var winner2 = playGame(pl3, pl4, rounds);
  updateBracket(pl1, pl2, pl3, pl4);
  winner1.wins = 0;
  winner2.wins = 0;
  document.getElementById("winner-1").innerHTML = winner1.name;
  document.getElementById("winner-2").innerHTML = winner2.name;
  var champ = playGame(winner1, winner2, rounds);
  document.getElementById("winner-1-score").innerHTML = winner1.wins;
  document.getElementById("winner-2-score").innerHTML = winner2.wins;
  document.getElementById("champ-name").innerHTML = champ.name;
  if(winner1.wins > winner2.wins){
      console.log(winner1.name + " is the grand Tourney champ!");
  }else{
      console.log(winner2.name + " is the grand Tourney champ!")
  }

}
// Main Program
updateBracket(p1, p2, p3, p4);
playTourney(p1, p2, p3, p4, playUntil);
