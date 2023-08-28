//Rework score variables to add a scoreboard
let playerScore = 0;
let computerScore = 0;
let currentRound = 0;
const scoreBoard_div = document.querySelector(".score-board");
let round_div = document.getElementById("round");
const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
let result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissors_div = document.getElementById("Scissors");

//Add round function
function addRound(){
  currentRound++;
  return round_div.innerHTML = `Round ${currentRound}`;
}
 
//Rework computer function
function getComputerChoice(){
  const choices = ["Rock","Paper","Scissors"];
  const randomNumber= Math.floor(Math.random()* 3) ;
  return choices[randomNumber];
}

//tie function
function tie (playerSelection,computerSelection){
  return result_p.innerHTML =`(Player) ${playerSelection} equals ${computerSelection} (computer). Tie!`;
}

//win function with span.innerHTML to have the score change in the DOM
function win(playerSelection,computerSelection){
  playerScore++;
  playerScore_span.innerHTML = playerScore;
  computerScore_span.innerHTML = computerScore;
  return result_p.innerHTML = `(Player) ${playerSelection} beats ${computerSelection} (computer). You win!`;
}

//lose function with span.innerHTML to have the score change in the DOM
function lose(playerSelection,computerSelection){
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  playerScore_span.innerHTML= playerScore;
  return result_p.innerHTML = `(Computer) ${computerSelection} beats ${playerSelection} (player) .  You lose!`;
}

//Add event listener functions for each button
rock_div.addEventListener('click',function(){
  playRound("Rock");
});

paper_div.addEventListener('click',function(){
  playRound("Paper");
});

scissors_div.addEventListener('click',function(){
  playRound("Scissors");
});

//Separate playRound function into smaller sub-functions
/*setTimeout function used to create a transition from the final results and the game resetting*/
function playRound(playerSelection){
  addRound();
  let computerSelection = getComputerChoice();
  switch(playerSelection + computerSelection){
    case "RockRock":
    case "PaperPaper":
    case "ScissorsScissors":
      tie(playerSelection, computerSelection);
    break;
    case "RockScissors":
    case "PaperRock":
    case "ScissorsPaper":
      win(playerSelection, computerSelection);
    break;
    case "ScissorsRock" :
    case "RockPaper":
    case "ScissorsRock":
      lose(playerSelection, computerSelection);
    break;
  }
  if (currentRound === 5){
    displayFinalResult();
    setTimeout(resetGame, 3000);
  }
}
    
//Invoke isWinner function once 5 rounds are played
function displayFinalResult(){
  if(playerScore > computerScore){
    return result_p.innerHTML = "Congrats! You beat the computer";
  }
  else if (playerScore < computerScore){
    return result_p.innerHTML = "You lose! Better luck next time!"
  }
  else if(playerScore == computerScore){
    return result_p.innerHTML = "You tied with the computer!";
  }
}

//Reset game function
function resetGame(){
  computerScore = 0;
  playerScore = 0;
  currentRound= 0;
  computerScore_span.innerHTML = "0";
  playerScore_span.innerHTML = "0";
  currentRound = 0;
  round_div.innerHTML = "Round: 0";
}