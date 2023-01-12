function getComputerChoice(){
    let choice  = Math.floor(Math.random()*3);
    switch(choice){
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    } 
}

function increaseScore(scoreElement){
    //needs to check for end of game
    currScore = parseInt(scoreElement.textContent);
    scoreElement.textContent = currScore + 1;
}

function playRound(playerSelection, computerSelection,messageElement,playerScoreElement,computerScoreElement){
    let playerStr = playerSelection.toLowerCase();
    if (playerStr === "rock"){
        if(computerSelection === "rock"){
            messageElement.textContent = ("Tie! Both chose rock."); 
        }
        else if (computerSelection === "paper"){
            messageElement.textContent = ("You lose! Paper beats rock."); 
            increaseScore(computerScoreElement);
        }
        else{
            messageElement.textContent = ("You win! Rock beats scissors.");
            increaseScore(playerScoreElement);
        }
    }
    else if (playerStr === "paper"){
        if(computerSelection === "paper"){
            messageElement.textContent = ("Tie! Both chose paper.");
        }
        else if (computerSelection === "scissors"){
            messageElement.textContent = ("You lose! Scissors beat paper.") 
            increaseScore(computerScoreElement);
        }
        else{
            messageElement.textContent = ("You win! Paper beats rock.") 
            increaseScore(playerScoreElement);
        }
    }
    else {
        if(computerSelection === "scissors"){
            messageElement.textContent = ("Tie! Both chose scissors.")
        }
        else if (computerSelection === "rock"){
            messageElement.textContent = ("You lose! Rock beat scissors.") 
            increaseScore(computerScoreElement);
        }
        else{
            messageElement.textContent = ("You win! Scissors beats paper.")
            increaseScore(playerScoreElement);
        }
    }
}

function game(){
    let playerScoreElement = document.querySelector('.playerScore');
    let computerScoreElement = document.querySelector('.computerScore');
    let windowElements = document.querySelectorAll('.window');
    let messageElement = document.querySelector('.messageSection');
    messageElement.textContent = "Please make a selection to start a game. First to reach 3 points wins!"

    playerScore = 0;
    computerScore = 0;
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
    messageElement.textContent = ("Welcome to the arena!");

    windowElements.forEach(window => {
        window.addEventListener("click", e => {
            //messageElement.textContent = (e.target.id);
            playRound(e.target.id, getComputerChoice(),messageElement,playerScoreElement,computerScoreElement);
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



game();

/*
once loaded start game (set score to 0-0)
in game, just click to pick the things and the messages will update
after game ends, play again button appears and you can click it to start another game
that's all I guess for now
*/