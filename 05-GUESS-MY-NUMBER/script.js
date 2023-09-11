'use strict';

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
    const secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = secretNumber;

    let guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        displayMessage('⛔️ No number!');
    } else if (guess === secretNumber) {
        winGame();
    } else if (guess !== secretNumber) {
        looseGame(guess < secretNumber ? '📉 Too low!' : '📈 Too high!')
    }
});

document.querySelector('.again').addEventListener('click', function () {
    location.reload();
})

function displayMessage(message) {
    document.querySelector('.message').textContent = message;
}

function looseGame(message) {
    document.querySelector('body').style.background = '#222';
    document.querySelector('.number').style.width = '15rem';
    if (score > 1) {
        displayMessage(message);
        score--;
        document.querySelector('.score').textContent = score;
    } else {
        displayMessage('💥 You lost the game!');
        score = 0;
        document.querySelector('.score').textContent = 0;
        document.querySelector('.left').remove();
    }
}

function winGame() {
    displayMessage('🎉 Correct Number!');
    score += 3;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.background = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }
}