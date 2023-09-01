# Rock-Paper-Scissors

## Table of contents
- [Rock-Paper-Scissors](#rock-paper-scissors)
  - [Table of contents](#table-of-contents)
  - [Part 1](#part-1)
  - [Inspiration](#inspiration)
  - [Objective](#objective)
  - [My process](#my-process)
  - [Foresight](#foresight)
  - [Part 2](#part-2)
  - [Objective](#objective-1)
  - [My process](#my-process-1)

## Part 1

## Inspiration
My entire approach to programming shifted after watching a video titled 'How to Begin Thinking Like a Programmer' by Andy Harris. In the video, Harris emphasized the significance of problem understanding, algorithm and pseudocode development, and the practice of breaking down complex problems into smaller, manageable sub-problems. His programming methods have proven to be very useful for me. One particular quote that resonated deeply with me was, "The key lies not in the code itself, but in the algorithms and data structures."

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

First, I created a getComputerChoice function. Within this function, I generated a random number using Math.floor(Math.random() * 3) and assigned one of the three choices (rock, paper, or scissors) based on the value of that random number.
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

I declared two variables to store the player's and computer's scores.
```let playerScore = 0;``` <br>
```let computerScore = 0;```<br>

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
Whenever a round did not result in a tie, I increased the score of the winner.<br>
```computerScore++;``` or ```playerScore++;```<br>

Next, I created a game function. Within this function, I implemented a for loop to iterate through the playRound function five times, effectively setting the game to run for five rounds. During each round, I prompted the user for input and ensured its validity by incorporating a while loop. After each round, I compared the accumulated playerScore to the computerScore to determine the game's outcome. Using if-else statements, I then provided clear feedback to the user, indicating whether they won, lost, or tied in each round.
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

Finally, I declared a playAgain variable that prompts the user if they would like to play again. I used a while loop to continuously prompt the user until their input was valid. Then using a conditional if-else statement, if the user entered "yes" the logic would reset both scores to 0, else the game would end.
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
In part one of this project, I applied some of the basic concepts I've learned from the Odin Project. While I'm currently satisfied with its progress, I look forward to revisiting it in part two, where I plan to enhance its efficiency and incorporate additional features, such as adding buttons and CSS."

## Part 2

## Objective
Revisit the Rock, Paper, Scissors project to add a UI.

In revisiting my Rock, Paper, Scissor project I  was tasked with...
* Creating buttons for each selection (rock, paper, or scissors)
* Adding a div to display results and 
* Changing all console.logs into DOM methods
* Display the running score, and announcing a winner of the game once either played reached 5 points.
* Refactor my original code as necessary

This gave me the opportunity to practice with...
*  Dom variables
* Query selectors and element id's
* Event listeners 
* innerHTML method
* CSS
* debugging

## My process
My goals were to:
* Learn how to create a scoreboard
* Create Document Object Model (DOM) variables to access the DOM elements easier
* Create a CSS design to make the game visually appealing and responsive
* Learn how to properly use event listener functions
* Find ways to make more code more concise and readable
* Know when to look up things that I either forgot how to do and or learn new concepts that I struggled on my own with

In the HTML, I began by setting up my DOM elements, starting with the creation of a scoreboard.
```<div class="score-board">```<br>
  ```<div id="round" class="rd">Round:0</div>```<br>
  ```<div id="player-label"class="badge">Player</div>```<br>
  ```<div id="computer-label" class="badge" >Computer</div>```<br>  
  ```<span id="player-score">0</span>:<span id="computer-score">0</span>```<br> 
```</div>```<br> 
Followed by having a separate DOM element for the results.
```<div class="result">```<br>
    ```<p></p>```<br>
  ```</div>```<br>  

Next, I set up the DOM elements for the choices (Rock, Paper or Scissors). Using images for each choice.
  ```<div class="choices">```<br>
    ```<div class="choice" id="Rock">```<br>
      ```<img src="images/rock.png" alt="Image of a rock hand gesture" width="50px" height="50px">```<br>
    ```</div>```<br>
    ```<div class="choice"id="Paper">```<br>
      ```<img src="images/paper.png" alt="Image of a paper hand gesture" width="50px" height="50px">```<br>
    ```</div>```<br>
    ```<div class="choice"id="Scissors">```<br>
      ```<img src="images/scissors.png" alt="Image of a scissors hand gesture" width="50px" height="50px">```<br>
    ```</div>```<br>
  ```</div>```<br>

Afterward, I introduced new logic into my JavaScript code. This involved creating several new variables, the majority of which were related to the DOM.
```let currentRound = 0;```<br>
```const scoreBoard_div = document.querySelector(".score-board");```<br>
```let round_div = document.getElementById("round");```<br>
```const playerScore_span = document.getElementById("player-score");```<br>
```const computerScore_span = document.getElementById("computer-score");```<br>
```let result_p = document.querySelector(".result > p");```<br>
```const rock_div = document.getElementById("Rock");```<br>
```const paper_div = document.getElementById("Paper");```<br>
```const scissors_div = document.getElementById("Scissors");```<br>

I created an addRound() function to keep track of the current round by incrementing the 'rounds' variable.
```function addRound(){```<br>
  ```currentRound++;```<br>
  ```return round_div.innerHTML = `Round ${currentRound}`;```<br>
```}```<br>

I improved the code's readability by replacing the bulky game() function with a more concise displayFinalResult() function.
```function displayFinalResult(){```<br>
  ```if(playerScore > computerScore){```<br>
    ```return result_p.innerHTML = "Congrats! You beat the computer";```<br>
  ```}```<br>
  ```else if (playerScore < computerScore){```<br>
    ```return result_p.innerHTML = "You lose! Better luck next time!"```<br>
  ```}```<br>
  ```else if(playerScore == computerScore){```<br>
    ```return result_p.innerHTML = "You tied with the computer!";```<br>
 ``` }```<br>
```}```<br>

I also created a resetGame() function to reset the scoreboard.
```function resetGame(){```<br>
  ```computerScore = 0;```<br>
  ```playerScore = 0;```<br>
  ```currentRound= 0;```<br>
  ```computerScore_span.innerHTML = "0";```<br>
  ```playerScore_span.innerHTML = "0";```<br>
  ```currentRound = 0;```<br>
  ```round_div.innerHTML = "Round: 0";```<br>
```}```<br>

I improved the readability of my= getComputerChoice() function by creating an array variable to store the choices (Rock, Paper, or Scissors). Then, I simply returned the choices variable with the random number variable nested within it.
```function getComputerChoice(){```<br>
  ```const choices = ["Rock","Paper","Scissors"];```<br>
  ```const randomNumber= Math.floor(Math.random()* 3) ;```<br>
  ```return choices[randomNumber];```<br>
```}```<br>

Next, I reworked my sloppy playRound() function by using a switch statement to split each result into its own separate function (win, lose, or tie). Later on, I added a transition effect between my displayFinalResult() and resetGame() functions. I achieved this by using an if-else conditional once the game reached five rounds. This would first invoke the displayFinalResult function, followed by a setTimeout function that invoked the resetGame function after 3 seconds. Using setTimeout() allows the user to see the final score before the game resets.
```function playRound(playerSelection){```<br>
  ```addRound();```<br>
  ```let computerSelection = getComputerChoice();```<br>
  ```switch(playerSelection + computerSelection){```<br>
    ```case "RockScissors":```<br>
    ```case "PaperRock":```<br>
    ```case "ScissorsPaper":```<br>
      ```win(playerSelection, computerSelection);```<br>
    ```break;```<br>
    ```case "ScissorsRock" :```<br>
    ```case "RockPaper":```<br>
    ```case "ScissorsRock":```<br>
     ``` lose(playerSelection, computerSelection);```<br>
    ```break;```<br>
    ```case "RockRock":```<br>
    ```case "PaperPaper":```<br>
    ```case "ScissorsScissors":```<br>
      ```tie(playerSelection, computerSelection);```<br>
    ```break;```<br>
  ```}```<br>
  ```if (currentRound === 5){```<br>
    ```displayFinalResult();```<br>
    ```setTimeout(resetGame, 3000);```<br>
  ```}```<br>
```}```<br>

```function win(playerSelection,computerSelection){```<br>
  ```playerScore++;```<br>
  ```playerScore_span.innerHTML = playerScore;```<br>
  ```computerScore_span.innerHTML = computerScore;```<br>
  ```return result_p.innerHTML = `(Player) ${playerSelection} beats ${computerSelection} (computer). You win!`;```<br>
```}```<br>

```function lose(playerSelection,computerSelection){```<br>
  ```computerScore++;```<br>
  ```computerScore_span.innerHTML = computerScore;```<br>
  ```playerScore_span.innerHTML= playerScore;```<br>
  ```return result_p.innerHTML = `(Computer) ${computerSelection} beats ${playerSelection} (player) .  You lose!`;```<br>
```}```<br>

```function tie (playerSelection,computerSelection){```<br>
  ```return result_p.innerHTML =`(Player) ${playerSelection} equals ${computerSelection} (computer). Tie!`;```<br>
```}```<br>

I added event listeners to each choice (Rock, Paper, or Scissors) to trigger the playRound() function when clicked.
```rock_div.addEventListener('click',function(){```<br>
  ```playRound("Rock");```<br>
```});```<br>

```paper_div.addEventListener('click',function(){```<br>
  ```playRound("Paper");```<br>
```});```<br>

```scissors_div.addEventListener('click',function(){```<br>
  ```playRound("Scissors");```<br>
```});```<br>

Overall, this project was an invaluable experience. It allowed to gain experience with manipulating the DOM, which was satisfying. I got to look up and learn new concepts when I either struggled or wanted to find alternate solutions to make my code more readable. Finally, it gave me the opportunity to use plenty of concepts I've previously learned about CSS, Javascript and HTML and put them all together.