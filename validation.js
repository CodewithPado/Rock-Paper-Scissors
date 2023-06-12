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

// Create playRound function with (playerSelection,computerSelection)
// Compare the two parameters players
// giDeclare the outcome of the round
function playRound(playerSelection,computerSelection){
  if (playerSelection === computerSelection){
    return("It's a tie!");
  }
  else if(playerSelection === "rock"){
        
    if(computerSelection === "scissors"){
      playerScore++;
      return(`You chose ${playerSelection} and the computer chose${computerSelection}. You won! Rock beats scissors.`);
    }
    else{
      computerScore++;
      return(`You chose ${playerSelection} and the computer chose${computerSelection}. You lost! Paper beats rock.`);
    }
  }
  else if(playerSelection === "paper"){
        
    if(computerSelection === "rock"){
      playerScore++;
      return(`You chose ${playerSelection} and the computer chose${computerSelection}. You won! Paper beats rock.`);
    }

    else{
      computerScore++;
      return(`You chose ${playerSelection} and the computer chose${computerSelection}. You lost! Scissors beats paper.`);
    }
  }
  else if(playerSelection === "scissors"){
        
    if(computerSelection === "paper"){
      playerScore++;
      return(`You chose ${playerSelection} and the computer chose${computerSelection}. You won! Scissors beats paper.`);
    }
    else{
      computerScore++;
      return(`You chose ${playerSelection} and the computer chose${computerSelection}. You lost! Rock beats scissors.`);
    }
  }
}
