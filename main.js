function getComputerChoice() {
    let number = Math.random();
    let result;
    if (number >= 0.6666) {
        result = 'Rock';
    } else if (number < 0.6666 && number >= 0.3333) {
        result = 'Paper';
    } else {
        result = 'Scissors';
    };
    return result;
};

function playRound(playerSelection, computerSelection) {
    let player1 = playerSelection.toLowerCase();
    let player2 = computerSelection.toLowerCase();
    let result;
    if (player1 == 'rock' && player2 == 'rock') {
        result = 'You have tied! Try again.'
    } else if (player1 == 'rock' && player2 == 'paper') {
        result = 'You have lost! Try again.'
    } else if (player1 == 'rock' && player2 == 'scissors') {
        result = 'You have won! Well done.'
    } else if (player1 == 'paper' && player2 == 'paper') {
        result = 'You have tied! Try again.'
    } else if (player1 == 'paper' && player2 == 'scissors') {
        result = 'You have lost! Try again.'
    } else if (player1 == 'paper' && player2 == 'rock') {
        result = 'You have won! Well done.'
    } else if (player1 == 'scissors' && player2 == 'scissors') {
        result = 'You have tied! Try again.'
    } else if (player1 == 'scissors' && player2 == 'rock') {
        result = 'You have lost! Try again.'
    } else {
        result = 'You have won! Well done.'
    }
    return result;
};

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    let playerSelection = prompt("Please choose, rock, paper, or scissors.");
    let computerSelection = getComputerChoice();
    let i = 0;

    for (i = 0; i < 5; i++) {
        let roundResult = playRound(playerSelection, computerSelection);
        if (roundResult == 'You have won! Well done.') {
            playerScore++;
        } else if (roundResult == 'You have lost! Try again.') {
            computerScore++;
        } else {
    
        };

        console.log("The current score is Player: " + playerScore + " Computer: " + computerScore);
        playerSelection = prompt("Please choose, rock, paper, or scissors.");
        computerSelection = getComputerChoice();
        
        if (i == 4 && playerScore > computerScore) {
            console.log("You have won! Would you like to play again?")
        } else if (i == 4 && playerScore == computerScore) {
            console.log("You have tied. Please try again. Victory is within your grasp!")
        } else if (i == 4) {
            console.log("You have lost this time. Please try again.")
        } else {

        };
    }
};