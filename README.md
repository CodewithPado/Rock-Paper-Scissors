# Rock-Paper-Scissors

## Gif
![Alt text](./rps.gif)
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

```// Create function called getComputerChoice```<br>
```// Make randomNumber variable that randomly picks between 3 numbers using Math.Floor and Math.random```<br>
```// Assign each number to each of the 3 choices (rock,paper and scissors)```<br>
```// Create variables playerScore and computerScore to keep track of score```<br>
```// Create playRound function with (playerSelection,computerSelection)```<br>
```// Compare the two parameters choices (playerSelection,computerSelection)```<br>
```// Declare the outcome of the round```<br>
```// Create game function that will play 5 rounds``` <br>
```// Make a for loop to loop through the playRound function 5 times```<br>
```// Prompt the user for input make it case-insensitive```<br>
```// Declare the outcome of the game```<br>
```// Create playAgain variable```<br>
```// Prompt user if they would like to playAgain```<br>
```// Add while loop to make sure input is "yes" or "no"```<br>

First I created the getComputerChoice function. I declared a randomNumber variable with a Math.floor and Math.random *3 properties to randomly select out of the 3 numbers. Then I assigned each of the three choices (rock, paper, or scissors) to each of the three numbers.

```function getComputerChoice(){```<br>
  ```let randomNumber= (Math.floor(Math.random))* 3;```<br>
  ```if(randomNumber=== 0){```<br>
    ```return ("rock");```<br>
  ```}```<br>
  ```else if(randomNumber === 1){```<br>
    ```return ("paper");```<br>
  ```}```<br>
  ```else{```<br>
    ```return ("scissors");```<br>
  ```}```<br>
```}```<br>

I declared two variables to store both the player and computer's score.<br>
```let playerScore = 0;``` <br>
```let computerScore = 0;```

Then I created a playRound function with two parameters (playerSelection,computerSelection). Within this function I compared the playerSelection (the dependent parameter) to the computerSelection (the independent parameter). I used template literals to print the result in the event of a winner to the user. 

```function playRound(playerSelection,computerSelection){```<br>
  ```if (playerSelection === computerSelection){```<br>
    ```return("It's a tie!");```<br>
  ```}```<br>
  ```else if(playerSelection === "rock"){```<br>
    ```if(computerSelection === "scissors"){```<br>
      ```playerScore++;```<br>
      ```return(`You chose ${playerSelection} and the computer chose${computerSelection}. You won! Rock beats scissors.`);```<br>
    ```}```<br>
    ```else{```<br>
      ```computerScore++;```<br>
      ```return(`You chose ${playerSelection} and the computer chose${computerSelection}. You lost! Paper beats rock.`);```<br>
    ```}```<br>
  ```}```<br>
  ```else if(playerSelection === "paper"){```<br>
    ```if(computerSelection === "rock"){```<br>
      ```playerScore++;```<br>
      ```return(`You chose ${playerSelection} and the computer chose${computerSelection}. You won! Paper beats rock.`);```<br>
    ```}```<br>
    ```else{```<br>
      ```computerScore++;```<br>
      ```return(`You chose ${playerSelection} and the computer chose${computerSelection}. You lost! Scissors beats paper.`);```<br>
    ```}```<br>
  ```}```<br>
  ```else if(playerSelection === "scissors"){```<br>
    ```if(computerSelection === "paper"){```<br>
      ```playerScore++;```<br>
      ```return(`You chose ${playerSelection} and the computer chose${computerSelection}. You won! Scissors beats paper.`);```<br>
    ```}```<br>
    ```else{```<br>
      ```computerScore++;```<br>
      ```return(`You chose ${playerSelection} and the computer chose${computerSelection}. You lost! Rock beats scissors.`);```<br>
    ```}```<br>
  ```}```<br>
```}```<br>
For each round there wasn't a tie I incremented the score of the winner.<br>
```computerScore++;``` or ```playerScore++;```<br>

Next I created a game function. In this function I used a for loop to loop through the playRound function 5 times making the game 5 rounds. I prompted the user for input here and then implemented a while loop to make sure the user input was valid. To determine the outcome of the game I compared the accumulated playerScore to the computerScore. Using if-else statements I then printed the outcome to the user (win, loss or tie).

```function game(){```<br>
  ```for(i = 1; i < 6; i++) {```<br>
    ```console.log("Round" + i);```<br>
    ```let playerSelection= prompt("Choose rock paper or scissors").toLowerCase();```<br>
    ```while(playerSelection !== "rock" && playerSelection !=="paper" && playerSelection !== "scissors"){```<br>
      ```playerSelection = prompt("Choose a valid input: rock, paper or scissors").toLowerCase();```<br>
    ```}```<br>
    ```console.log(computerSelection= getComputerChoice());```<br>
    ```console.log(game(playRound(playerSelection,computerSelection)));```<br>
    ```if(playerScore > computerScore){```<br>
      ```console.log("Well-done! You beat the computer!");```<br>
    ```}```<br>
    ```else if (computerScore> playerScore){```<br>
      ```console.log("You lost. Better luck next time.");```<br>
    ```}```<br>
    ```else{```<br>
      ```console.log("How strange! It ends in a tie!");```<br>
    ```}```<br>

Finally, I declared a playAgain variable that prompts the user if they would like to play again. I used a while loop to continuously prompt the user until their input was valid. Then using a conditional if-else statement, if the user entered "yes" I'd reset both scores to 0 and invoke the game function. Else the game would end.

  ```let playAgain = prompt("Would you like to play again?: Choose yes or no").toLowerCase();```<br>
    ```while(playAgain!== "yes" && playAgain !=="no"){```<br>
      ```playAgain = prompt("Choose either yes or no").toLowerCase();```<br>
    ```}```<br>
    ```if(playAgain === "yes"){```<br>
      ```playerScore = 0;```<br>
      ```computerScore = 0;```<br>
      ```game();```<br>
    ```}```<br>
    ```else{```<br>
      ```console.log("Ok, goodbye");```<br>
    ```}```<br>
  ```}```<br>
```}```<br>
```game()```

## Foresight 
In th first part of this project, I applied some of the basics I've learned from the Odin Project. I'm satisfied for where it's at, however I'm looking forward to revisiting this project and searching for ways to improve its efficiency and add more features to it. One of which being adding buttons to the project in part 2.