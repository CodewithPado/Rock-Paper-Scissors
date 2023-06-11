//Create function getComputerChoice
//Make randomNumber variable that randomly picks between 3 numbers using Math.Floor and Math.random
//Assign each number to each of the 3 choices (rock,paper and scissors) 
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
//Create playRound function with (playerSelection,computerSelection)
//Compare the two parameters players
// Declare the outcome of the round
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
// Create game function that will play 5 rounds 
// Make a for loop to loop through the playRound function 5 times
// Prompt the user for input make it case-insensitive 
function game(){
  for(i = 1; i < 6; i++) {
    console.log("Round" + i);
    let playerSelection= prompt("Choose rock paper or scissors").toLowerCase();
    while(playerSelection !== "rock" && playerSelection !=="paper" && playerSelection !== "scissors"){
      playerSelection = prompt("Choose a valid input: rock, paper or scissors").toLowerCase();
    }
    console.log(computerSelection= getComputerChoice());
    console.log(game(playRound(playerSelection,computerSelection)));
//Declare the outcome of the game
    if(playerScore > computerScore){
      console.log("Well-done! You beat the computer!");
    }
    else if (computerScore> playerScore){
      console.log("You lost. Better luck next time.");

    }
    else{
      console.log("How strange! It ends in a tie!");
    }
  
// Create playAgain variable 
// Prompt user if they would like to playAgain
// Add while loop to make sure input is "yes" or "no"
    let playAgain = prompt("Would you like to play again?: Choose yes or no").toLowerCase();
    while(playAgain!== "yes" && playAgain !=="no"){
      playAgain = prompt("Choose either yes or no").toLowerCase();
    }
    if(playAgain === "yes"){
      playerScore = 0;
      computerScore = 0;
      game();
    }
    else{
      console.log("Ok, goodbye");
    }
  }
}
game()