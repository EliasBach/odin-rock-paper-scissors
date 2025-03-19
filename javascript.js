// GLOBAL VARIABLES
const win_score = 3;
let humanScore = 0
let computerScore = 0
let reset_flag = false

// BUTTON EVENT LISTENERS
// "() => " is needed This wraps the function call inside another function, 
// so it only runs when the button is clicked.
const play_rock = document.querySelector("#rock");
play_rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
const play_paper = document.querySelector("#paper");
play_paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
const play_scissors = document.querySelector("#scissors");
play_scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));

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
    if (reset_flag) {
        resetGame()
        reset_flag=false
    }
    const log_box = document.querySelector(".log_box")
    const text = document.createElement("p")
    
    text.textContent = `You played ${humanSelection}. CPU played ${computerSelection}. `
    if (humanSelection == computerSelection) {
        text.textContent += "It's a draw..."
        
    } else if (((humanSelection == "rock") && (computerSelection == "scissors")) 
        || ((humanSelection == "paper") && (computerSelection == "rock"))
        || ((humanSelection == "scissors") && (computerSelection == "paper"))) {
        text.textContent += "You win!"
        humanScore++

    } else if (((humanSelection == "paper") && (computerSelection == "scissors")) 
        || ((humanSelection == "scissors") && (computerSelection == "rock"))
        || ((humanSelection == "rock") && (computerSelection == "paper"))) {
        text.textContent += "CPU wins."
        computerScore++   
    }

    log_box.appendChild(text)

    //check the score to see if the game should be terminated
    if (humanScore == win_score || computerScore == win_score) {
        const finish_text = document.createElement("p")
        finish_text.textContent = `Final score: You - ${humanScore}, CPU - ${computerScore}`
        log_box.appendChild(finish_text)
        humanScore = 0
        computerScore = 0
        reset_flag=true
    }

    function resetGame () {
        const log_box = document.querySelector(".log_box")
        log_box.textContent = ""
    };
}
