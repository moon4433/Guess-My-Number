'use strict';

let secretNumber = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', (event) => {
  const guess = Number(document.querySelector('.guess').value);
  // when there is no input
  if (!guess) {
    invalid();
  }
  // when player wins
  else if (guess === secretNumber) {
    win();
    checkHighscore();
  }
  // when guess is different
  else if (guess !== secretNumber) {
    checkAnswer(guess);
  }
});

document.querySelector('.again').addEventListener('click', (event) => {
  reset();
});

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function gameState(color, size, text) {
  document.querySelector('body').style.backgroundColor = color;
  document.querySelector('.number').style.width = size;
  document.querySelector('.number').textContent = text;
}

function checkAnswer(guess) {
  if (score > 1) {
    // when guess is too high
    if (guess > secretNumber) {
      displayMessage('📈 Too High!');
      // when guess is too low
    } else if (guess < secretNumber) {
      displayMessage('📉 Too Low!');
    }
    decreaseScore();
  } else {
    displayMessage('💥 You Lose!');
    decreaseScore();
  }
}

function decreaseScore() {
  score--;
  document.querySelector('.score').textContent = score;
}

function checkHighscore() {
  if (highscore < score) {
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
  }
}

function invalid() {
  displayMessage('⛔ No number!');
}

function win() {
  displayMessage('🎉 Correct Number!');
  gameState('#60b347', '30rem', secretNumber);
}

function reset() {
  score = 20;
  secretNumber = Math.trunc(Math.floor(Math.random() * (20 - 1 + 1)) + 1);

  displayMessage('❓ Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

  gameState('#222', '15rem', '?');
}
