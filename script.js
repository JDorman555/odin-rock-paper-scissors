// keep track of player wins and computer wins
let roundsWon = 0;
let roundsLost = 0;
let round = 2;


// Store personal score, comptuer score and round number
const yourScore = document.querySelector('.personal');
const compScore = document.querySelector('.computer');
const roundNum = document.querySelector('#round');

// randomly pick rock, paper or scissors
function getComputerChoice(compChoice) {
  let options = ['rock', 'paper', 'scissors'];
  return options[Math.floor(Math.random() * options.length)];
}

// play a round of rock paper scissors
function playRound(playerChoice, computerSelection) {
  if (playerChoice == 'rock' && computerSelection == 'paper')
  {
    healthWidthLeft -= 20;
    leftHealth.style.width = healthWidthLeft + "%";
    return "You Lose! Paper beats Rock";
  }
  else if (playerChoice == 'rock' && computerSelection == 'scissors')
  {
    healthWidthRight -= 20;
    rightHealth.style.width = healthWidthRight + "%";
    return "You Win! Rock beats Scissors";
  }
  else if (playerChoice == 'paper' && computerSelection == 'scissors')
  {
    healthWidthLeft -= 20;
    leftHealth.style.width = healthWidthLeft + "%";
    return "You Lose! Scissors beats Rock";
  }
  else if (playerChoice == 'paper' && computerSelection == 'rock')
  {
    healthWidthRight -= 20;
    rightHealth.style.width = healthWidthRight + "%";
    return "You Win! Paper beats Rock";
  }
  else if (playerChoice == 'scissors' && computerSelection == 'rock')
  {
    healthWidthLeft -= 20;
    leftHealth.style.width = healthWidthLeft + "%";
    return "You Lose! Rock beats Scissors";
  }
  else if (playerChoice == 'scissors' && computerSelection == 'paper')
  {
    healthWidthRight -= 20;
    rightHealth.style.width = healthWidthRight + "%";
    return "You Win! Scissors beats Paper";
  }
  else
  {
    healthWidthLeft -= 20;
    leftHealth.style.width = healthWidthLeft + "%";
    healthWidthRight -= 20;
    rightHealth.style.width = healthWidthRight + "%";
    return "Tie!";
  }
}

let playerChoice = '';
const buttons = document.querySelectorAll('button');

const leftHealth = document.querySelector('.health-left');
const rightHealth = document.querySelector('.health-right');

let healthWidthLeft = 100;
let healthWidthRight = 100;

// for each button addEventListener, get playerChoice then playGame
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playerChoice = button.id;
    playGame();
  });
});

// play game
function playGame() {
  const computerSelection = getComputerChoice();
  playRound(playerChoice, computerSelection);
  setRound(round);
  maxRound(round);
  round++;
}

// sets score for player and computer
function setRoundsWon(roundsWon, roundsLost) {
  yourScore.textContent = roundsWon;
  compScore.textContent = roundsLost;
}

// sets current round
function setRound(round) {
  roundNum.textContent = `Round ${round}`;
}

// makes sure round ends when a healthbar is 0
function maxRound(round) {
  if (healthWidthLeft == 0 && healthWidthRight == 0) {
    roundNum.textContent = "It's a Tie!";
    disableButton();
    setTimeout(() => {resetGame(); }, 2000);
  }
  else if (healthWidthRight == 0) {
    setTimeout(() => {resetGame(); }, 2000);
    roundsWon++;
    roundNum.textContent = 'You Win!';
    disableButton();
  }
  else if (healthWidthLeft == 0) {
    setTimeout(() => {resetGame(); }, 2000);
    roundsLost++;
    roundNum.textContent = 'You Lost!';
    disableButton();
  }

}

function disableButton() {
  buttons.forEach((button) => {
    button.disabled = true;
  });
}

function enableButton() {
  buttons.forEach((button) => {
    button.disabled = false;
  });
}

// reset game
function resetGame() {
  enableButton();
  healthWidthLeft = 100;
  healthWidthRight = 100;
  leftHealth.style.width = healthWidthLeft + "%";
  rightHealth.style.width = healthWidthRight + "%";
  setRoundsWon(roundsWon, roundsLost)
  roundNum.textContent = "Round 1";
  round = 2;
}


