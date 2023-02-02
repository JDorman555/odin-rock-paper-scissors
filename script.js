      // keep track of player wins and computer wins
      let win = 0;
      let compWin = 0;

      // call functions
      //console.log(game());
      console.log(winner(win, compWin));

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
/*
      // loop to prompt user for choice and to get new computer choice and run playRound
      function game() {
        for (let i = 0; i < 5; i++) 
        {
          const playerChoice = prompt("Do you choose, Rock? Paper? or Scissors?").toLowerCase();
          const computerSelection = getComputerChoice();
          console.log(playRound(playerChoice, computerSelection));
        }
      }
*/
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
  
      buttons.forEach((button) => {
        button.addEventListener('click', () => {
          playerChoice = button.id;
          const computerSelection = getComputerChoice();
          console.log(playRound(playerChoice, computerSelection));
          //console.log(playerChoice);
          //console.log(e.target);
          //alert(button.id);
        });
      });

      /*
      function getPlayerChoice() {
        alert ("Hello Words");
      }
      */