// Create function getComputerChoice
// Make randomNumber variable that randomly picks between 3 numbers using Math.Floor and Math.random
// Assign each number to each of the 3 choices (rock,paper and scissors) 
function getComputerChoice(){
  let randomNumber= (Math.floor(Math.random))* 3;
  if(randomNumber=== 0){
    return ("rock");
  }
  else if(randomNumber === 1){
    return ("paper");
  }
  else{
    return ("scissors");
  }
}

// Create variables playerScore and computerScore to keep track of score
let playerScore = 0;
let computerScore = 0;

/*Create 3 buttons for each playSelection(rock,paper,scissors) with id's & a class attached*/
// add eventListeners for each button
var button = document.getElementById('buttonRock').addEventListener('click', buttonClick);
var button = document.getElementById('buttonPaper').addEventListener('click', buttonClick);
var button = document.getElementById('buttonScissors').addEventListener('click', buttonClick);
/* Create buttonClick functions for each button that calls the playRound function*/
function buttonClick(e){
  playRound(playerSelection, computerSelection);
  console.log(e.target);

}
function buttonClick(e){
  playRound(playerSelection, computerSelection);
  console.log(e.target);
}
function buttonClick(e){
  playRound(playerSelection, computerSelection);
  console.log(e.target);
}

// Create playRound function with (playerSelection,computerSelection)
// Compare the two parameters players
// Declare the outcome of the round
function playRound(playerSelection, computerSelection){
  if (playerSelection === computerSelection){
    console.log("It's a tie!");
  }
  else if(playerSelection === "rock"){    
    if(computerSelection === "scissors"){
      playerScore++;
      console.log(`You chose ${playerSelection} and the computer chose${computerSelection}. You won! Rock beats scissors.`);
      playerScore++;
    }
    else{
      console.log(`You chose ${playerSelection} and the computer chose${computerSelection}. You lost! Paper beats rock.`);
      computerScore++;
    }
  }
  else if(playerSelection === "paper"){
    if(computerSelection === "rock"){
      console.log(`You chose ${playerSelection} and the computer chose${computerSelection}. You won! Paper beats rock.`);
      playerScore++;
    }

    else{
      console.log(`You chose ${playerSelection} and the computer chose${computerSelection}. You lost! Scissors beats paper.`);
      computerScore++;
    }
  }
  else if(playerSelection === "scissors"){
    if(computerSelection === "paper"){
      console.log(`You chose ${playerSelection} and the computer chose${computerSelection}. You won! Scissors beats paper.`);
      playerScore++;
    }
    else{
      console.log(`You chose ${playerSelection} and the computer chose${computerSelection}. You lost! Rock beats scissors.`);
      computerScore++;
    }
  }
}
