// GLOBAL VARIABLES
const num_rounds = 0;
let humanScore = 0
let computerScore = 0

// SCRIPT
// console.log(`Final score: You - ${humanScore}, CPU - ${computerScore}`)
//console.log("Game is finished. Refresh to try again.")

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

function playRound(humanSelection, computerSelection) {
    const log_box = document.querySelector(".log_box")
    const text = document.createElement("p")
    
    text.textContent = `You played ${humanSelection}. Comuputer played ${computerSelection}.`
    if (humanSelection == computerSelection) {
        text.textContent += "\nIt's a draw...\n"
        
    } else if (((humanSelection == "rock") && (computerSelection == "scissors")) 
        || ((humanSelection == "paper") && (computerSelection == "rock"))
        || ((humanSelection == "scissors") && (computerSelection == "paper"))) {
        text.textContent += "\nYou win!\n"
        humanScore++

    } else if (((humanSelection == "paper") && (computerSelection == "scissors")) 
        || ((humanSelection == "scissors") && (computerSelection == "rock"))
        || ((humanSelection == "rock") && (computerSelection == "paper"))) {
        text.textContent += "\nCPU wins.\n"
        computerScore++   
    }

    log_box.append(text)
}

// BUTTON EVENT LISTENERS
// "() => " is needed This wraps the function call inside another function, 
// so it only runs when the button is clicked.
const play_rock = document.querySelector("#rock");
play_rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
const play_paper = document.querySelector("#paper");
play_paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
const play_scissors = document.querySelector("#scissors");
play_scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));