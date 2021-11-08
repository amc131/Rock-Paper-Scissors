   
function computerPlay() {
    let gameOptions = ['rock', 'paper', 'scissors']
    let computerChoice = gameOptions[Math.floor(Math.random() * gameOptions.length)];

  };

function playRound(playerChoice, computerChoice) {
    if (playerChoice == "rock") {
        if (computerChoice == "paper") {
            computerScore++;
            return lose
        }
        else if (computerChoice == "rock") {
            return time;
        }
        else {
            userScore++
            return win;
        }
    }

    if (playerChoice == "paper") {
        if (computerChoice == "rock") {
            userScore++;
            return win;
        }
        else if (computerChoice == "paper") {
            return tie;
        }
        else {
            computerScore++;
            return lose;
        }
    }

    if (playerChoice == "scissors") {
        if (computerChoice == "rock") {
            computerScore++
            return lose;
        }
        else if (computerChoice == "paper") {
            userScore++;
            return win;
        }
        else {
            return tie;
        }
    };
 
    };
let userScore = 0;
let computerScore = 0;
let win = "You win!";
let lose = "You lose.";
let tie = "It is a tie.";

for (let i = 0; i<5; i++) {
    let playerChoice = prompt("Choose rock, paper, or scissors:");
    let computerChoice = computerPlay();
    console.log(playRound(playerChoice, computerChoice))
    console.log("Your score = " + userScore);
    console.log("Computer's score = " + computerScore);
};
