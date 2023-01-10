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
            console.log("Tie! Both chose rock."); 
        }
        else if (computerSelection === "paper"){
            console.log("You lose! Paper beats rock."); 
        }
        else{
            console.log("You win! Rock beats scissors.");
        }
    }
    else if (playerStr === "paper"){
        if(computerSelection === "paper"){
            console.log("Tie! Both chose paper.");
        }
        else if (computerSelection === "Scissors"){
            console.log("You lose! Scissors beat paper.") 
        }
        else{
            console.log("You win! Paper beats rock.") 
        }
    }
    else {
        if(computerSelection === "scissors"){
            console.log("Tie! Both chose scissors.")
        }
        else if (computerSelection === "Scissors"){
            console.log("You lose! Rock beat scissors.") 
        }
        else{
            console.log("You win! Scissors beats paper.")
        }
    }
}

function game(){
    let playerScoreElement = document.querySelector('.playerScore');
    let computerScoreElement = document.querySelector('.computerScore');
    let windowElements = document.querySelectorAll('.window');
    let messageElement = document.querySelector('messageSection');

    playerScore = 0;
    computerScore = 0;
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
    console.log("Welcome to the arena!");

    windowElements.forEach(window => {
        window.addEventListener("click", e => {
            //console.log(e.target.id);
            playRound(e.target.id, getComputerChoice());
        })
    })

    // while(playerScore < 3 && computerScore < 3){
    //     let playerSelection = prompt("Please choose rock, paper or scissors: ") //defaults to scissors if wrong choice
    //     let computerSelection = getComputerChoice();
    //     let roundResult = playRound(playerSelection,computerSelection);
    //     console.log(roundResult[0]);
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
    //     console.log(`Victory! You have won with a score of 3 - ${computerScore}`);
    // }
    // else if (computerScore == 3){
    //     console.log(`You have lost with a score of ${playerScore} - 3. Better luck next time!`);
    // }
}



game();

/*
once loaded start game (set score to 0-0)
in game, just click to pick the things and the messages will update
after game ends, play again button appears and you can click it to start another game
that's all I guess for now
*/