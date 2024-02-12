// PSEUDO CODE: 
// function getComputerChoice() {
//     create random result of rock, paper, or scissors
//         generate random number between three positions
//         create conditional that if number is one = rock
//         create conditional that if number is two = paper
//         create conditional that else number = scissors
//         store result of conditional in variable
//     return variable
// }

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
}

// function playRound(playerSelection, computerSelection) {
    // store playerSelection in variable that converts to lowercase
    // call getComputerChoice function and store result in variable
    // create conditional that compares playerSelection to compSelection
        // if playerSelection is rock and compSelection is rock return tie
        // if playerSelection is rock and compSelection is paper return loss
        // else return win
        // repeat for all possible permutations
// }

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

let computerSelection = getComputerChoice();