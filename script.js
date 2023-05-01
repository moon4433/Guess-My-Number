'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;

// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;

// console.log(document.querySelector('.guess').value);

let secretNumber = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', (event) => {
  const guess = Number(document.querySelector('.guess').value);
  // when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
    // when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    checkHighscore();
    // when guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High!';
      decreaseScore();
    } else {
      decreaseScore();
      document.querySelector('.message').textContent = '💥 You Lose!';
    }
    // when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low!';
      decreaseScore();
    } else {
      decreaseScore();
      document.querySelector('.message').textContent = '💥 You Lose!';
    }
  }
});

document.querySelector('.again').addEventListener('click', (event) => {
  reset();
});

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
