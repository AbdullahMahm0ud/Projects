const choices = ["rock", "paper", "scissors"];
const playerPoints = document.getElementById("playerPoints");
const computerPoints = document.getElementById("computerPoints");
const result = document.getElementById("result");
const playerScore = document.getElementById("player");
const computerScore = document.getElementById("computer");

let player = 0;
let computer = 0;

function playGame(playerChoice) {

    const computerChoice = choices[Math.round(Math.random() * 2)]
    computerPoints.textContent = `Computer: ${computerChoice}`

    if(playerChoice === computerChoice) {

        playerPoints.textContent = `Player: ${playerChoice}`
        result.textContent = "IT'S A TIE!"
        result.style.color = "black"

    } else if(playerChoice === 'rock' && computerChoice === 'paper') {

        playerPoints.textContent = `Player: ${playerChoice}`
        result.textContent = "YOU LOST!"
        result.style.color = "red"
        computer = computer + 1;
        console.log(computer)
        computerScore.textContent = `Computer Score: ${computer}`

    } else if(playerChoice === 'paper' && computerChoice === 'scissors') {

        playerPoints.textContent = `Player: ${playerChoice}`
        result.textContent = "YOU LOST!"
        result.style.color = "red"
        computer = computer + 1;
        computerScore.textContent = `Computer Score: ${computer}`

    } else if(playerChoice === 'scissors' && computerChoice === 'rock') {

        playerPoints.textContent = `Player: ${playerChoice}`
        result.textContent = "YOU LOST!"
        result.style.color = "red"
        computer = computer + 1;
        computerScore.textContent = `Computer Score: ${computer}`

    } else {
        result.textContent = "YOU WON!"
        result.style.color = "blue"
        playerPoints.textContent = `Player: ${playerChoice}`
        player = player + 1
        playerScore.textContent = `Player Score: ${player}`
    }

}
