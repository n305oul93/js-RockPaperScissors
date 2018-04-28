var hands = ['rock', 'paper', 'scissors'];

var p1 = {name: "Jason",
    hand: "",
    wins: 0};

var p2 = {name: "Susan",
    hand: "",
    wins: 0};

var playUntil = 3;


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
}

playGame(p1, p2, playUntil);
