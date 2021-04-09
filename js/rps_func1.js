var hands = ['rock', 'paper', 'scissors'];

var p1 = {name: "Jason",
    hand: getHand(),
    wins: 0};

var p2 = {name: "Susan",
    hand: getHand(),
    wins: 0};

//var player1_wins = 0;
//var player2_wins = 0;

function getHand() {
    return hands[parseInt(Math.random()*10)%3];player2
}

function playRound(person1, person2, hand1, hand2) {
    //var hand1 = person1.hand;
    //var hand2 = person2.hand;

    console.log(person1.name + ": " + hand1);
    console.log(person2.name + ": " + hand2);

    if(hand1 === hand2) {
        console.log("It's a tie, play again!")
    } else if(hand1 === "scissors") {
        switch(hand2) {
            case "paper":
                console.log(person1.name + " " + "wins!");
                person1.wins += 1;
                break;
            case "rock":
                console.log(person2.name + " " + "wins");
                person2.wins += 1;
                break;
        }
    } else if(hand1 === "rock") {
        switch(hand2) {
            case "scissors":
                console.log(person1.name + " " + "wins!");
                person1.wins += 1;
                break;
            case "paper":
                console.log(person2.name + " " + "wins");
                person2.wins += 1;
                break;
        }
    } else if(hand1 === "paper") {
        switch(hand2) {
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

function playGame(player1, player2) {
  while(player1.wins < 3 && player2.wins < 3) {
      var h1 = player1.hand;
      var h2 = player2.hand;
      //console.log(h1);
      //console.log(h2);
      playRound(player1, player2, h1, h2);
  }
}

playGame(p1, p2);

//console.log(p1.wins);
//console.log(p2.wins);