'use strict';

// document.querySelector('.guess').addEventListener('click', function () {
//   const userGuess =
// });

let correctNumber = Math.floor(Math.random() * 20 + 1);
console.log(correctNumber);
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';
    if (score === 0) {
      document.querySelector('.message').textContent = '💥 You lost the game';
    } else {
      score--;
      document.querySelector('.score').textContent = score;
    }
    //When the guess is too low
  } else if (correctNumber > guess) {
    document.querySelector('.message').textContent = '📉 Too Low';
    if (score === 0) {
      document.querySelector('.message').textContent = '💥 You lost the game';
    } else {
      score--;
      document.querySelector('.score').textContent = score;
    }
    //When the guess is too high
  } else if (correctNumber < guess) {
    document.querySelector('.message').textContent = '📈 Too High';
    if (score === 0) {
      document.querySelector('.message').textContent = '💥 You lost the game';
    } else {
      score--;
      document.querySelector('.score').textContent = score;
    }
    //When the player wins
  } else if (correctNumber === guess) {
    document.querySelector('.message').textContent =
      '✅ You guessed it correctly!';

    document.querySelector('.number').textContent = guess;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  //document.querySelector('.highscore').textContent = highScore;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  correctNumber = Math.floor(Math.random() * 20 + 1);
  console.log(correctNumber);
});
