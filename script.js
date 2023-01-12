function getComputerChoice(){
    let choice  = Math.floor(Math.random()*3);
    switch(choice){
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    } 
}

function endGame(outcome){
    //display victory or defeat message depending on win or lose
    //displays button to click to restart
    ongoingGame = 0;
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
    ongoingGame = 1;
    messageElement.textContent = "Please make a selection to start a game. First to reach 3 points wins!"

    
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
    messageElement.textContent = ("Welcome to the arena!");


    windowElements.forEach(window => {
        window.addEventListener("click", e => {
            //messageElement.textContent = (e.target.id);
            playRound(e.target.id, getComputerChoice());
        })
    })

    // while(playerScore < 3 && computerScore < 3){
    //     let playerSelection = prompt("Please choose rock, paper or scissors: ") //defaults to scissors if wrong choice
    //     let computerSelection = getComputerChoice();
    //     let roundResult = playRound(playerSelection,computerSelection);
    //     messageElement.textContent = (roundResult[0]);
    //     if (roundResult[1] == 1){
    //         playerScore++;
    //         playerScoreElement.textContent = playerScore;
    //     }
    //     else if (roundResult[1] == 2){
    //         computerScore++;
    //         computerScoreElement.textContent = computerScore;
    //     }
    // }
    // if (playerScore == 3){
    //     messageElement.textContent = (`Victory! You have won with a score of 3 - ${computerScore}`);
    // }
    // else if (computerScore == 3){
    //     messageElement.textContent = (`You have lost with a score of ${playerScore} - 3. Better luck next time!`);
    // }
}

var playerScoreElement = document.querySelector('.playerScore');
var computerScoreElement = document.querySelector('.computerScore');
var windowElements = document.querySelectorAll('.window');
var messageElement = document.querySelector('.messageSection');
var playerScore = 0;
var computerScore = 0;
var ongoingGame = 0;
game();

/*
once loaded start game (set score to 0-0)
in game, just click to pick the things and the messages will update
after game ends, play again button appears and you can click it to start another game
that's all I guess for now
*/