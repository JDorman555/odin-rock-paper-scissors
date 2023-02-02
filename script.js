      // keep track of player wins and computer wins
      let win = 0;
      let compWin = 0;
      let round = 2;


      //
      const yourScore = document.querySelector('#yourScore');
      //yourScore.textContent = `Your Score: ${win}`;
      const compScore = document.querySelector('#compScore');
      //compScore.textContent = `Your Score: ${compWin}`
      const roundNum = document.querySelector('#round');


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
          return "You Lose! Paper beats Rock";
        }
        else if (playerChoice == 'rock' && computerSelection == 'scissors')
        {
          win++;
          return "You Win! Rock beats Scissors";
        }
        else if (playerChoice == 'paper' && computerSelection == 'scissors')
        {
          compWin++;
          return "You Lose! Scissors beats Rock";
        }
        else if (playerChoice == 'paper' && computerSelection == 'rock')
        {
          win++;
          return "You Win! Paper beats Rock";
        }
        else if (playerChoice == 'scissors' && computerSelection == 'rock')
        {
          compWin++;
          return "You Lose! Rock beats Scissors";
        }
        else if (playerChoice == 'sissors' && computerSelection == 'paper')
        {
          win++;
          return "You Win! Scissors beats Paper";
        }
        else
        {
          win++;
          compWin++;
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
          return "It's a Tie, You both won!";
        }
      }

      let playerChoice = '';
      const buttons = document.querySelectorAll('button')
      
      // for each button addEventListener, get playerChoice then playRound
      buttons.forEach((button) => {
        button.addEventListener('click', () => {
          playerChoice = button.id;
          const computerSelection = getComputerChoice();
          console.log(playRound(playerChoice, computerSelection));
          yourScore.textContent = `Your Score: ${win}`;
          compScore.textContent = `Comp Score: ${compWin}`;
          roundNum.textContent = `Round ${round}`;
          round++;
        });
      });
