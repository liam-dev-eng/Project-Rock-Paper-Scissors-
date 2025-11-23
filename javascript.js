const rock_option = "rock";
const paper_option = "paper";
const scissor_option = "scissor";

function getHumanChoice() {
  let humanChoice = window.prompt(
    "Welcome to Rock Paper Scissor, please choose an option:"
  );

  switch (humanChoice.toLowerCase()) {
    case scissor_option:
      humanChoice = 2;
      break;
    case paper_option:
      humanChoice = 1;
      break;
    case rock_option:
      humanChoice = 0;
      break;
    default:
      break;
  }
  return humanChoice;
}

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  return computerChoice;
}

function playRound(humanChoice, computerChoice) {
  let optionHuman = null;
  let optionComputer = null;

  switch (humanChoice) {
    case 0:
      optionHuman = "rock";
      break;
    case 1:
      optionHuman = "paper";
      break;
    case 2:
      optionHuman = "scissor";
      break;
    default:
      break;
  }

  switch (computerChoice) {
    case 0:
      optionComputer = "rock";
      break;
    case 1:
      optionComputer = "paper";
      break;
    case 2:
      optionComputer = "scissor";
      break;
    default:
      break;
  }

  switch ((humanChoice - computerChoice) % 3) {
    case 0:
      console.log(
        "It's a draw " + optionHuman + " is equals to " + optionComputer
      );
      break;
    case 1:
      console.log("You win " + optionHuman + " beats " + optionComputer);
      break;
    case -2:
      console.log("You win " + optionHuman + " beats " + optionComputer);
      break;
    case -1:
      console.log("You loose " + optionComputer + " beats " + optionHuman);
      break;
    case 2:
      console.log("You loose " + optionComputer + " beats " + optionHuman);
      break;

    default:
      break;
  }

  if (
    (humanChoice - computerChoice) % 3 == 1 ||
    (humanChoice - computerChoice) % 3 == -2
  ) {
    return 'human';
  } else if (
    (humanChoice - computerChoice) % 3 == -1 ||
    (humanChoice - computerChoice) % 3 == 2
  ) {
    return 'computer';
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let index = 0; index < 5; index++) {
    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();

    let result = playRound(humanSelection, computerSelection);
    if (result === "human") {
      humanScore++;
    } else if (result === "computer") {
      computerScore++;
    }
  }

  console.log("Final Score: Human: " + humanScore + " Computer: "+ computerScore);
}

playGame();
