const inputRock = document.getElementById("rock");
const inputPaper = document.getElementById("paper");
const inputScissors = document.getElementById("scissors");
const playerInputs = document.querySelectorAll(".choice-input");
const gameResult = document.getElementById("game-result");

const choices = ["rock", "paper", "scissors"];
const imagesPath = {
  rock: "./assets/img/Rock.png",
  paper: "./assets/img/Paper.png",
  scissors: "./assets/img/Scissors.png",
};


playerInputs.forEach((input) => {
  input.addEventListener("click", () => {
    const playerChoice = input.id;
    const comChoice = getComChoice();
    displayChoice("choice-player-img", playerChoice);
    displayChoice("choice-com-img", comChoice);
    displayResult(playerChoice, comChoice);
  });
});

// Function to get a random choice for the computer
function getComChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

// Function to display choice
function displayChoice(elementId, choice) {
  document.getElementById(elementId).src = imagesPath[choice];
}

// Function to display the result
function displayResult(playerChoice, comChoice) {
  if (playerChoice === comChoice) {
    displayGameResult("It's a tie!", "#272829");
  } else if (
    (playerChoice === "rock" && comChoice === "scissors") ||
    (playerChoice === "paper" && comChoice === "rock") ||
    (playerChoice === "scissors" && comChoice === "paper")
  ) {
    displayGameResult("You win!", "#009200");
  } else {
    displayGameResult("You lose!", "#ca0000");
  }
}

// Function to display the game result
function displayGameResult(message, color) {
  gameResult.innerHTML = message;
  gameResult.style.color = color;
}
