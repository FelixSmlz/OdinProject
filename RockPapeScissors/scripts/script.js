const inputRock = document.getElementById("rock");
const inputPaper = document.getElementById("paper");
const inputScissors = document.getElementById("scissors");

const playerInputs = [inputRock, inputPaper, inputScissors];
const choices = ["rock", "paper", "scissors"];
const imagesPath = {
  rock: "./assets/img/Rock.png",
  paper: "./assets/img/Paper.png",
  scissors: "./assets/img/Scissors.png",
};

// Get a random Choice from the Computer

let comChoice = getComChoice();
function getComChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

// Get the input Choice from the Player

function getPlayerChoice() {
  playerInputs.forEach((input) => {
    input.addEventListener("click", () => {
      const playerChoice = input.id;
      displayPlayerChoice(playerChoice);
      comChoice = getComChoice();
      displayChoice("choice-com-img", comChoice);
    });
  });
}

// Display the Choices on the scoreboard

function displayChoice(elementId, choice) {
  const imgElement = document.getElementById(elementId);
  imgElement.src = imagesPath[choice];
}

function displayPlayerChoice(playerChoice) {
  displayChoice("choice-player-img", playerChoice);
}

getPlayerChoice();
