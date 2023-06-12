# Rock-Paper-Scissors

## Gif
![Alt text](Rps.gif)
## Inspiration 
My whole mindset on programming as a whole changed from one video! In the video "How to Begin Thinking Like a Programmer", Andy Harris explained the importance of understanding the problem, writing algorithms and pseudocode, and breaking down big problems into smaller sub-problems. His methods to programming are very helpful. One quote that really stuck with me was:*"The secret isn't the code, the secret is the algorithms and data."*
## Objective 
In the Odin Project I was tasked with creating a rousing game of rock paper scissors. It would involve the user playing against a computer on a browser console.
## My process 
In making the rock paper scissors game I did the following:
* Defined and called functions
* Used conditional if-else statements
* Created variables
* Passed function as an argument in another function
* Used template literals
* Used for and while loops
* Prompted the user for input 

My algorithm starts with the following:
```// Create function called getComputerChoice```
```// Make randomNumber variable that randomly picks between 3 numbers using Math.Floor and Math.random```
```// Assign each number to each of the 3 choices (rock,paper and scissors)```
```// Create variables playerScore and computerScore to keep track of score```
```// Create playRound function with (playerSelection,computerSelection)```
```// Compare the two parameters choices (playerSelection,computerSelection)```
```// Declare the outcome of the round```
```// Create game function that will play 5 rounds``` 
```// Make a for loop to loop through the playRound function 5 times```
```// Prompt the user for input make it case-insensitive```
```// Declare the outcome of the game```
```// Create playAgain variable```
```// Prompt user if they would like to playAgain```
```// Add while loop to make sure input is "yes" or "no"```

First I created the getComputerChoice function. I declared a randomNumber variable with a Math.floor and Math.random *3 properties to randomly select out of the 3 numbers. Then I assigned each of the three choices (rock, paper, or scissors) to each of the three numbers.
```function getComputerChoice(){```
  ```let randomNumber= (Math.floor(Math.random))* 3;```
  ```if(randomNumber=== 0){```
    ```return ("rock");```
  ```}```
  ```else if(randomNumber === 1){```
    ```return ("paper");```
  ```}```
  ```else{```
    ```return ("scissors");```
  ```}```
```}```

I declared two variables to store both the player and computer's score
```let playerScore = 0;``` 
```let computerScore = 0;```

Then I created a playRound function with two parameters (playerSelection,computerSelection). Within this function I compared the playerSelection (the dependent parameter) to the computerSelection (the independent parameter). I used template literals to print the result in the event of a winner to the user. 
```function playRound(playerSelection,computerSelection){```
  ```if (playerSelection === computerSelection){```
    ```return("It's a tie!");```
  ```}```
  ```else if(playerSelection === "rock"){```
    ```if(computerSelection === "scissors"){```
      ```playerScore++;```
      ```return(`You chose ${playerSelection} and the computer chose${computerSelection}. You won! Rock beats scissors.`);```
    ```}```
    ```else{```
      ```computerScore++;```
      ```return(`You chose ${playerSelection} and the computer chose${computerSelection}. You lost! Paper beats rock.`);```
    ```}```
  ```}```
  ```else if(playerSelection === "paper"){```
    ```if(computerSelection === "rock"){```
      ```playerScore++;```
      ```return(`You chose ${playerSelection} and the computer chose${computerSelection}. You won! Paper beats rock.`);```
    ```}```
    ```else{```
      ```computerScore++;```
      ```return(`You chose ${playerSelection} and the computer chose${computerSelection}. You lost! Scissors beats paper.`);```
    ```}```
  ```}```
  ```else if(playerSelection === "scissors"){```
    ```if(computerSelection === "paper"){```
      ```playerScore++;```
      ```return(`You chose ${playerSelection} and the computer chose${computerSelection}. You won! Scissors beats paper.`);```
    ```}```
    ```else{```
      ```computerScore++;```
      ```return(`You chose ${playerSelection} and the computer chose${computerSelection}. You lost! Rock beats scissors.`);```
    ```}```
  ```}```
```}```
For each round there wasn't a tie I incremented the score of the winner.
```computerScore++;``` or ```playerScore++;```

Next I created a game function. In this function I used a for loop to loop through the playRound function 5 times making the game 5 rounds. I prompted the user for input here and then implemented a while loop to make sure the user input was valid. To determine the outcome of the game I compared the accumulated playerScore to the computerScore. Using if-else statements I then printed the outcome to the user (win, loss or tie).
```function game(){```
  ```for(i = 1; i < 6; i++) {```
    ```console.log("Round" + i);```
    ```let playerSelection= prompt("Choose rock paper or scissors").toLowerCase();```
    ```while(playerSelection !== "rock" && playerSelection !=="paper" && playerSelection !== "scissors"){```
      ```playerSelection = prompt("Choose a valid input: rock, paper or scissors").toLowerCase();```
    ```}```
    ```console.log(computerSelection= getComputerChoice());```
    ```console.log(game(playRound(playerSelection,computerSelection)));```
    ```if(playerScore > computerScore){```
      ```console.log("Well-done! You beat the computer!");```
    ```}```
    ```else if (computerScore> playerScore){```
      ```console.log("You lost. Better luck next time.");```
    ```}```
    ```else{```
      ```console.log("How strange! It ends in a tie!");```
    ```}```

Finally, I declared a playAgain variable that prompts the user if they would like to play again. I used a while loop to continuously prompt the user until their input was valid. Then using a conditional if-else statement, if the user entered "yes" I'd reset both scores to 0 and invoke the game function. Else the game would end.
  ```let playAgain = prompt("Would you like to play again?: Choose yes or no").toLowerCase();```
    ```while(playAgain!== "yes" && playAgain !=="no"){```
      ```playAgain = prompt("Choose either yes or no").toLowerCase();```
    ```}```
    ```if(playAgain === "yes"){```
      ```playerScore = 0;```
      ```computerScore = 0;```
      ```game();```
    ```}```
    ```else{```
      ```console.log("Ok, goodbye");```
    ```}```
  ```}```
```}```
```game()```

## Foresight 
In th first part of this project, I applied some of the basics I've learned from the Odin Project. I'm satisfied for where it's at, however I'm looking forward to revisiting this project and searching for ways to improve its efficiency and add more features to it. One of which being adding buttons to the project in part 2 
