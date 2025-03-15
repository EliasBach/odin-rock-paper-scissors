// GLOBAL VARIABLES
const num_rounds = 5;

// SCRIPT
playGame(num_rounds)

// FUNCTIONS
function getComputerChoice() {
    var choice = Math.random();
    if (choice < 0.3333333) {
        return "rock"
    } else if (choice < 0.66667) {
        return "paper"
    } else if (choice < 1) {
        return "scissors"
    }
}

function getHumanChoice() {
    var choice = prompt("Choose: rock / paper / scissors");
    return choice.toLowerCase();
}

function playRound(humanSelection, computerSelection) {
    console.log(`You played ${humanSelection}. Comuputer played ${computerSelection}.`)
    if (humanSelection == computerSelection) {
        console.log("It's a draw.");
        return "DRAW"

    } else if (((humanSelection == "rock") && (computerSelection == "scissors")) 
        || ((humanSelection == "paper") && (computerSelection == "rock"))
        || ((humanSelection == "scissors") && (computerSelection == "paper"))) {
        console.log("You win!");
        return "WIN"

    } else if (((humanSelection == "paper") && (computerSelection == "scissors")) 
        || ((humanSelection == "scissors") && (computerSelection == "rock"))
        || ((humanSelection == "rock") && (computerSelection == "paper"))) {
        console.log("You lose...");
        return "LOSE";

    } else {
        console.log("Oops! Something must've gone wrong, potentially a typo. Refresh to start over.");
    }        
}

function playGame(num_rounds) {
    var humanScore = 0
    var computerScore = 0
    for (i=0 ; i<num_rounds ; i++) {
        outcome = playRound(getHumanChoice(), getComputerChoice())

        if (outcome == "WIN") {
            humanScore++
        }
        else if (outcome == "LOSE") {
            computerScore++
        }
    }

    console.log(`Final score: You - ${humanScore}, CPU - ${computerScore}`)
    console.log("Game is finished. Refresh to try again.")
}