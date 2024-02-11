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