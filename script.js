let playerScore = [0, 0, 0];

function playerChoice(player) {
    let computer = computerChoice();
    let result = decideWinner(player, computer);
    updateScore(result);
    updateCurrentScore(result);
}

function computerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function decideWinner(player, computer) {
    if (player == computer) {
        return 'tie';
    } else if ((player == 'rock' && computer == 'scissors') 
            || (player == 'paper' && computer == 'rock' )
            || (player == 'scissors' && computer == 'paper')) {
        return 'win';
    } else {
        return 'lose';
    }
}

function updateScore(result) {
    if (result == 'win') {
        playerScore[0]++;
    } else if (result == 'tie') {
        playerScore[1]++;
    } else {
        playerScore[2]++;
    }

    let scoreElement = document.getElementById('score');
    scoreElement.textContent = `Játékos: ${playerScore[0]} : ${playerScore[1]} : ${playerScore[2]} : Számítógép`;
}

function updateCurrentScore(result) {
    let currentScoreElement = document.getElementById('currentScore');
    currentScoreElement.textContent = `${result.toUpperCase()}`;
}