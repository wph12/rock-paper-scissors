function getComputerChoice(){
    let choice  = Math.floor(Math.random()*3);
    switch(choice){
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    } 
}

function playRound(playerSelection, computerSelection){
    let playerStr = playerSelection.toLowerCase();
    if (playerStr === "rock"){
        if(computerSelection === "rock"){
            return ["Tie! Both chose rock.",0]
        }
        else if (computerSelection === "paper"){
            return ["You lose! Paper beats rock.",2]
        }
        else{
            return ["You win! Rock beats scissors.",1]
        }
    }
    else if (playerStr === "paper"){
        if(computerSelection === "paper"){
            return ["Tie! Both chose paper.",0]
        }
        else if (computerSelection === "Scissors"){
            return ["You lose! Scissors beat paper.",2]
        }
        else{
            return ["You win! Paper beats rock.",1]
        }
    }
    else {
        if(computerSelection === "scissors"){
            return ["Tie! Both chose scissors.",0]
        }
        else if (computerSelection === "Scissors"){
            return ["You lose! Rock beat scissors.",2]
        }
        else{
            return ["You win! Scissors beats paper.",1]
        }
    }
}

function game(){
    playerScore = 0;
    computerScore = 0;
    while(playerScore < 3 && computerScore < 3){
        let playerSelection = prompt("Please choose rock, paper or scissors: ") //defaults to scissors if wrong choice
        let computerSelection = getComputerChoice();
        let roundResult = playRound(playerSelection,computerSelection);
        console.log(roundResult[0]);
        if (roundResult[1] == 1){
            playerScore++;
        }
        else if (roundResult[1] == 2){
            computerScore++;
        }
    }
    if (playerScore == 3){
        console.log(`Victory! You have won with a score of 3 - ${computerScore}`);
    }
    else if (computerScore == 3){
        console.log(`You have lost with a score of ${playerScore} - 3. Better luck next time!`);
    }
}
game();

