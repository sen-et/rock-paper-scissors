const rockButton = document.querySelector('rock-btn');
const paperButton = document.querySelector('paper-btn');
const scissorsButton = document.querySelector('scissors-btn');

rockButton.addEventListener('click', playRound);

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