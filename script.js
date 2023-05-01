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

function checkAnswer(guess) {
  if (score > 1) {
    // when guess is too high
    if (guess > secretNumber) {
      document.querySelector('.message').textContent = '📈 Too High!';
      // when guess is too low
    } else if (guess < secretNumber) {
      document.querySelector('.message').textContent = '📉 Too Low!';
    }
    decreaseScore();
  } else {
    decreaseScore();
    document.querySelector('.message').textContent = '💥 You Lose!';
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
  document.querySelector('.message').textContent = '⛔ No number!';
}

function win() {
  document.querySelector('.message').textContent = '🎉 Correct Number!';
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '30rem';
  document.querySelector('.number').textContent = secretNumber;
}

function reset() {
  score = 20;
  secretNumber = Math.trunc(Math.floor(Math.random() * (20 - 1 + 1)) + 1);

  document.querySelector('.message').textContent = '❓ Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
}
