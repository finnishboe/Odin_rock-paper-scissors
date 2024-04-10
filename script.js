function getComputerChoice (){
    let choices = ["Rock","Paper","Scissors"];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random]
}

function playRound(playerSelection,computerSelection){
    let playerC = playerSelection.toLowerCase()
    let computerC = computerSelection.toLowerCase()

    if (playerC === computerC){
        return "It's a Draw"
    } else if (playerC === "rock") {
        if (computerC === "scissors"){

            return "You Win! Rock beats Scissors";
        } else{
            return "You Lose! Paper beats Rock";
        }
    }
    else if (playerC === "paper"){
        if (computerC === "scissors") {
            return "You Lose! Scissors beats Paper";
        } else {
            return "You Win! Paper beats Rock";
        }
    } else if (playerC === "scissors"){
        if (computerC === "rock"){
            return "You Lose! Rock beats Scissors";
        } else {
            return "You Win! Scissors beats Paper";
        }
    }
}

function playGame(){
    const computerSelection = getComputerChoice()
    let playerCounter = 0;
    let computerCounter = 0;
    for (let i = 1; i <= 5; i++){
        const playerSelection = prompt("Rock, Paper or Scissors?",)
        let tracker = playRound(playerSelection,computerSelection)
        if (tracker.includes("You Win")){
            playerCounter += 1;
        } else if (tracker.includes("You Lose")) {
            computerCounter += 1;
        } 
        console.log(tracker);     
    }
    
    if (playerCounter > computerCounter){
        console.log("Humans will live another day!!")
    } else if (computerCounter > playerCounter){
        console.log("The machines have declared war to our species!")
    } else {
        console.log("It's a tie. We live to fight another day!")
    }
}

playGame()