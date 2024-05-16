// scripts.js
const choices = ["rock", "paper", "scissors"];

const buttons = document.querySelectorAll("#choices button");
const userChoiceElem = document.getElementById("user-choice").querySelector("span");
const computerChoiceElem = document.getElementById("computer-choice").querySelector("span");
const winnerElem = document.getElementById("winner");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const userChoice = button.getAttribute("data-choice");
        const computerChoice = getComputerChoice();
        const winner = determineWinner(userChoice, computerChoice);

        displayResult(userChoice, computerChoice, winner);
    });
});

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    }
    if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win!";
    }
    return "Computer wins!";
}

function displayResult(userChoice, computerChoice, winner) {
    userChoiceElem.textContent = userChoice;
    computerChoiceElem.textContent = computerChoice;
    winnerElem.textContent = winner;
}
