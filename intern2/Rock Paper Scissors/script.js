let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {

    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    document.getElementById("player-choice").innerText = "Your Choice: " + playerChoice;
    document.getElementById("computer-choice").innerText = "Computer Choice: " + computerChoice;

    let result = "";

    if (playerChoice === computerChoice) {
        result = "It's a Draw!";
    } 
    else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You Win!";
        playerScore++;
    } 
    else {
        result = "Computer Wins!";
        computerScore++;
    }

    document.getElementById("winner").innerText = result;
    document.getElementById("player-score").innerText = playerScore;
    document.getElementById("computer-score").innerText = computerScore;
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;

    document.getElementById("player-score").innerText = 0;
    document.getElementById("computer-score").innerText = 0;
    document.getElementById("winner").innerText = "";
    document.getElementById("player-choice").innerText = "Your Choice: ";
    document.getElementById("computer-choice").innerText = "Computer Choice: ";
}
