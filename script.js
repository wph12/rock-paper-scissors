function getComputerChoice(){
    let choice  = Math.floor(Math.random()*3);
    switch(choice){
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    } 
}

function endGame(outcome){
    ongoingGame = 0;
    restartButtonElement.classList.toggle('inactive');
    if(outcome === 0){
        messageElement.textContent = (`You have lost with a score of ${playerScore} - 3. Better luck next time!`);
    }
    else{
        messageElement.textContent = (`Victory! You have won with a score of 3 - ${computerScore}`);
    }
}


function increaseScore(outcome){
    if (outcome === 1){
        playerScore += 1;
        playerScoreElement.textContent = playerScore;
        if (playerScore >= 3){
            endGame(1);
        }
    }
    else{
        computerScore += 1;
        computerScoreElement.textContent = computerScore;
        if (computerScore >= 3){
            endGame(0);
        }
    }
}


function playRound(playerSelection, computerSelection){
    if (ongoingGame === 0){
        return;
    }
    let playerStr = playerSelection.toLowerCase();
    if (playerStr === "rock"){
        if(computerSelection === "rock"){
            messageElement.textContent = ("Tie! Both chose rock."); 
        }
        else if (computerSelection === "paper"){
            messageElement.textContent = ("You lose! Paper beats rock."); 
            increaseScore(0);
        }
        else{
            messageElement.textContent = ("You win! Rock beats scissors.");
            increaseScore(1);
        }
    }
    else if (playerStr === "paper"){
        if(computerSelection === "paper"){
            messageElement.textContent = ("Tie! Both chose paper.");
        }
        else if (computerSelection === "scissors"){
            messageElement.textContent = ("You lose! Scissors beat paper.") 
            increaseScore(0);
        }
        else{
            messageElement.textContent = ("You win! Paper beats rock.") 
            increaseScore(1);
        }
    }
    else {
        if(computerSelection === "scissors"){
            messageElement.textContent = ("Tie! Both chose scissors.")
        }
        else if (computerSelection === "rock"){
            messageElement.textContent = ("You lose! Rock beat scissors.") 
            increaseScore(0);
        }
        else{
            messageElement.textContent = ("You win! Scissors beats paper.")
            increaseScore(1);
        }
    }
}

function game(){
    console.log("Welcome to the arena!");
    ongoingGame = 1;
    playerScore = 0;
    computerScore = 0;
    messageElement.textContent = "Please make a selection to start a game. First to reach 3 points wins!"
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;


    

}
//basically main
var playerScoreElement = document.querySelector('.playerScore');
var computerScoreElement = document.querySelector('.computerScore');
var windowElements = document.querySelectorAll('.window');
var messageElement = document.querySelector('.messageSection');
var restartButtonElement = document.querySelector('.button');

var playerScore = 0;
var computerScore = 0;
var ongoingGame = 0;

windowElements.forEach(window => {
    window.addEventListener("click", e => {
        playRound(e.target.id, getComputerChoice());
    })
});
restartButtonElement.addEventListener('click', () => {
    restartButtonElement.classList.toggle('inactive');
    game();
});

game();



/*
todo: edit styling: 
- maybe buttons have border and effect when hovered like the drum kit 
- make buttons have click effect
- display player and computer afterchoices? 
- transition for score update with border
- update play again button to look nice
*/