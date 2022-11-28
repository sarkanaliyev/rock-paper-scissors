let computerChoice;

function getComputerChoice() {
  random = Math.floor(Math.random() * 3) + 1;

  switch (random) {
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "paper";
      break;
    case 3:
      computerChoice = "scissors";
      break;
  }
}

getComputerChoice();

let playerChoice;

const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playerChoice = button.textContent;
    getComputerChoice();
    play();
  });
});

function play() {
  if (playerChoice == computerChoice) {
    console.log("draw");
    console.log(playerChoice);
    console.log(computerChoice);
  } else if (
    (playerChoice == "rock" && computerChoice == "scissors") ||
    (playerChoice == "paper" && computerChoice == "rock") ||
    (playerChoice == "scissors" && computerChoice == "paper")
  ) {
    console.log("you win!");
    console.log(playerChoice);
    console.log(computerChoice);
  } else {
    console.log("you lose");
    console.log(playerChoice);
    console.log(computerChoice);
  }
}
