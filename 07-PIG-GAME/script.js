'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = '0';
score1El.textContent = '0';
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

// Rolling dice functionality
btnRoll.addEventListener('click', rollDice);
btnHold.addEventListener('click', holdDice);
btnNew.addEventListener('click', newGame);

// functions
function rollDice() {
    if (playing) {
        const dice = Math.trunc(Math.random() * 6) + 1;

        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`

        if (dice !== 1) {
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            switchPlayer();
        }
    }
}

function holdDice() {
    if (playing) {
        scores[activePlayer] += currentScore;

        document.getElementById(`score--${activePlayer}`).textContent = String(scores[activePlayer]);

        if (scores[activePlayer] >= 100) {
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        } else {
            switchPlayer();
        }
    }
}

function switchPlayer() {
    if (playing) {
        currentScore = 0;
        document.getElementById(`current--${activePlayer}`).textContent = '0';
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
    }
}

function newGame() {
    location.reload();
}