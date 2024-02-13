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

    let roundOneResult = playRound(playerSelection, computerSelection);
    if (roundOneResult == 'You have won! Well done.') {
        playerScore++;
    } else if (roundOneResult == 'You have lost! Try again.') {
        computerScore++;
    } else {

    };
    console.log("The current score is Player: " + playerScore + " Computer: " + computerScore);

    playerSelection = prompt("Please choose, rock, paper, or scissors.");
    computerSelection = getComputerChoice();

    let roundTwoResult = playRound(playerSelection, computerSelection);
    if (roundTwoResult == 'You have won! Well done.') {
        playerScore++;
    } else if (roundTwoResult == 'You have lost! Try again.') {
        computerScore++;
    } else {

    };
    console.log("The current score is Player: " + playerScore + " Computer: " + computerScore);

    playerSelection = prompt("Please choose, rock, paper, or scissors.");
    computerSelection = getComputerChoice();

    let roundThreeResult = playRound(playerSelection, computerSelection);
    if (roundThreeResult == 'You have won! Well done.') {
        playerScore++;
    } else if (roundThreeResult == 'You have lost! Try again.') {
        computerScore++;
    } else {

    };
    console.log("The current score is Player: " + playerScore + " Computer: " + computerScore);

    playerSelection = prompt("Please choose, rock, paper, or scissors.");
    computerSelection = getComputerChoice();

    let roundFourResult = playRound(playerSelection, computerSelection);
    if (roundFourResult == 'You have won! Well done.') {
        playerScore++;
    } else if (roundFourResult == 'You have lost! Try again.') {
        computerScore++;
    } else {

    };
    console.log("The current score is Player: " + playerScore + " Computer: " + computerScore);

    playerSelection = prompt("Please choose, rock, paper, or scissors.");
    computerSelection = getComputerChoice();

    let roundFiveResult = playRound(playerSelection, computerSelection);
    if (roundFiveResult == 'You have won! Well done.') {
        playerScore++;
    } else if (roundFiveResult == 'You have lost! Try again.') {
        computerScore++;
    } else {

    };
    console.log("The current score is Player: " + playerScore + " Computer: " + computerScore);

    if (playerScore > computerScore) {
        console.log("You have won! Would you like to play again?")
    } else if (playerScore == computerScore) {
        console.log("You have tied. Please try again. Victory is within your grasp!")
    } else {
        console.log("You have lost this time. Please try again.")
    };
};