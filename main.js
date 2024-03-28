const rockButton = document.querySelector('#rock-btn');
const paperButton = document.querySelector('#paper-btn');
const scissorsButton = document.querySelector('#scissors-btn');

let playerScore = 0;
let computerScore = 0;
let numOfRounds = 0;

const resultsBlock = document.querySelector('#results-block');
const results = document.createElement('h2');
const score = document.createElement('p');

rockButton.addEventListener('click', () => {
    let playerSelection = 'rock';
    let computerSelection = getComputerChoice();
    let roundResults = playRound(playerSelection, computerSelection);

    results.textContent = `${roundResults}`;
    resultsBlock.appendChild(results);
    resultsBlock.appendChild(score);

    if (roundResults.includes('won')) {
        playerScore++;
        numOfRounds++;
    } else if (roundResults.includes('lost')) {
        computerScore++;
        numOfRounds++;
    }

    if (playerScore === 5) {
        winGame();
    } else if (computerScore === 5) {
        loseGame();
    }

    const runningScoreText = `The current score is: <br><br> You: ${playerScore} | Computer: ${computerScore}`;
    score.innerHTML = runningScoreText;
});

paperButton.addEventListener('click', () => {
    let playerSelection = 'paper';
    let computerSelection = getComputerChoice();
    let roundResults = playRound(playerSelection, computerSelection);

    results.textContent = `${roundResults}`;
    resultsBlock.appendChild(results);
    resultsBlock.appendChild(score);

    if (roundResults.includes('won')) {
        playerScore++;
        numOfRounds++;
    } else if (roundResults.includes('lost')) {
        computerScore++;
        numOfRounds++;
    }

    if (playerScore === 5) {
        winGame();
    } else if (computerScore === 5) {
        loseGame();
    }

    const runningScoreText = `The current score is: <br><br> You: ${playerScore} | Computer: ${computerScore}`;
    score.innerHTML = runningScoreText;
});

scissorsButton.addEventListener('click', () => {
    let playerSelection = 'scissors';
    let computerSelection = getComputerChoice();
    let roundResults = playRound(playerSelection, computerSelection);

    results.textContent = `${roundResults}`;
    resultsBlock.appendChild(results);
    resultsBlock.appendChild(score);

    if (roundResults.includes('won')) {
        playerScore++;
        numOfRounds++;
    } else if (roundResults.includes('lost')) {
        computerScore++;
        numOfRounds++;
    }

    if (playerScore === 5) {
        winGame();
    } else if (computerScore === 5) {
        loseGame();
    }

    const runningScoreText = `The current score is: <br><br> You: ${playerScore} | Computer: ${computerScore}`;
    score.innerHTML = runningScoreText;
});

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
        result = 'You played Rock! Computer also plays Rock! You have tied! Try again.'
    } else if (player1 == 'rock' && player2 == 'paper') {
        result = 'You played Rock! Computer plays Paper! You have lost! Try again.'
    } else if (player1 == 'rock' && player2 == 'scissors') {
        result = 'You played Rock! Computer plays Scissors! You have won! Well done.'
    } else if (player1 == 'paper' && player2 == 'paper') {
        result = 'You played Paper! Computer also plays Paper! You have tied! Try again.'
    } else if (player1 == 'paper' && player2 == 'scissors') {
        result = 'You played Paper! Computer plays Scissors! You have lost! Try again.'
    } else if (player1 == 'paper' && player2 == 'rock') {
        result = 'You played Paper! Computer plays Rock! You have won! Well done.'
    } else if (player1 == 'scissors' && player2 == 'scissors') {
        result = 'You played Scissors! Computer also plays Scissors! You have tied! Try again.'
    } else if (player1 == 'scissors' && player2 == 'rock') {
        result = 'You played Scissors! Computer plays Rock! You have lost! Try again.'
    } else {
        result = 'You played Scissors! Computer plays Paper! You have won! Well done.'
    }
    return result;
};

function winGame() {
    playerScore = 0;
    computerScore = 0;
    numOfRounds = 0;

    const victoryText = 'You have won 5 hands and, thus, the whole game! Congratulations! Please play again.';
    
    results.textContent = `${victoryText}`;
}

function loseGame() {
    playerScore = 0;
    computerScore = 0;
    numOfRounds = 0;

    const lossText = 'You have lost 5 hands, and thus, the whole game. Please try again.';

    results.textContent = `${lossText}`;
}