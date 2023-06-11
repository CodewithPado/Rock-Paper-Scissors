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
