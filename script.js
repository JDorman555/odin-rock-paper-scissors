// keep track of player wins and computer wins
let win = 0;
let compWin = 0;
let round = 2;


//
const yourScore = document.querySelector('.personal');
//yourScore.textContent = `Your Score: ${win}`;
const compScore = document.querySelector('.computer');
//compScore.textContent = `Your Score: ${compWin}`
const roundNum = document.querySelector('#round');

//const rightBtn = document.querySelector('#left button');


// call functions
//console.log(game());
//console.log(winner(win, compWin));

// randomly pick rock, paper or scissors
function getComputerChoice(compChoice) {
  let options = ['rock', 'paper', 'scissors'];
  return options[Math.floor(Math.random() * options.length)];
}

// play a round of rock paper scissors
function playRound(playerChoice, computerSelection) {
  if (playerChoice == 'rock' && computerSelection == 'paper')
  {
    compWin++;
    healthWidthLeft -= 20;
    leftHealth.style.width = healthWidthLeft + "%";
    return "You Lose! Paper beats Rock";
  }
  else if (playerChoice == 'rock' && computerSelection == 'scissors')
  {
    win++;
    healthWidthRight -= 20;
    rightHealth.style.width = healthWidthRight + "%";
    return "You Win! Rock beats Scissors";
  }
  else if (playerChoice == 'paper' && computerSelection == 'scissors')
  {
    compWin++;
    healthWidthLeft -= 20;
    leftHealth.style.width = healthWidthLeft + "%";
    return "You Lose! Scissors beats Rock";
  }
  else if (playerChoice == 'paper' && computerSelection == 'rock')
  {
    win++;
    healthWidthRight -= 20;
    rightHealth.style.width = healthWidthRight + "%";
    return "You Win! Paper beats Rock";
  }
  else if (playerChoice == 'scissors' && computerSelection == 'rock')
  {
    compWin++;
    healthWidthLeft -= 20;
    leftHealth.style.width = healthWidthLeft + "%";
    return "You Lose! Rock beats Scissors";
  }
  else if (playerChoice == 'scissors' && computerSelection == 'paper')
  {
    win++;
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

// find the winner
function winner(win, compWin)
{
  if (win > compWin)
  {
    return "You Won!";
  }
  else if (win < compWin)
  {
    return "You Lost!";
  }
  else
  {
    return "It's a Tie";
  }
}

let playerChoice = '';
const buttons = document.querySelectorAll('button');

const leftHealth = document.querySelector('.health-left');
const rightHealth = document.querySelector('.health-right');

/*
healthBars.forEach((health) => {
  health.style.width =- 20;

let healthWidth = 100;
health.style.width = healthWidth + "%";
})
*/
/*
function setHealth(playRound(playerChoice, computerSelection)) {
  let sen = playRound(playerChoice, computerSelection);
  if (sen.search("Win")) {

  }
}
*/

//healthBars.style.width =- 20;

let healthWidthLeft = 100;
let healthWidthRight = 100;
leftHealth.style.width = healthWidthLeft + "%";
rightHealth.style.width = healthWidthRight + "%";


// for each button addEventListener, get playerChoice then playRound
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playerChoice = button.id;
    const computerSelection = getComputerChoice();
    console.log(playRound(playerChoice, computerSelection));
    setScore(win, compWin);
    setRound(round);
    maxRound(round);
    round++;
    //resetGame(maxRound(round));
  });
});

// sets score for player and computer
function setScore(win, compWin) {
  yourScore.textContent = win;
  compScore.textContent = compWin;
}

// sets current round
function setRound(round) {
  roundNum.textContent = `Round ${round}`;
  console.log(round);
}

// sets a max round of 5
function maxRound(round) {
  if (healthWidthLeft == 0 || healthWidthRight == 0) {
    roundNum.textContent = winner(win, compWin);
    setTimeout(() => {resetGame(); }, 2000);
    return true;
  }
}

function resetGame() {
  healthWidthLeft = 100;
  healthWidthRight = 100;
  leftHealth.style.width = healthWidthLeft + "%";
  rightHealth.style.width = healthWidthRight + "%";
  roundNum.textContent = "Round 1";
  round = 2;
}

/*
function resetGame(maxRound) {
  if (maxRound == true) {
    healthWidthLeft = 100;
    healthWidthRight = 100;
    leftHealth.style.width = healthWidthLeft + "%";
    rightHealth.style.width = healthWidthRight + "%";
    round = 0;
  }
}
*/

