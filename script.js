let secretNumber = Math.trunc(Math.random() * 100) + 1;
let score = 15;
let highScore = 0;

// To delete in the end
document.querySelector('.number').textContent = secretNumber;

// Display Message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.score').textContent = score;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('😭 No Number!');
  } else if (guess === secretNumber) {
    displayMessage('🙌 Correct Number!');
    document.querySelector('input').disabled = true;
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    document.querySelector('.number').style.width = '30rem';
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      score = 0;
      document.querySelector('.score').textContent = score;
    }
  }

  document.querySelector('.again').addEventListener('click', function () {
    score = 15;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('input').disabled = false;
    secretNumber = Math.trunc(Math.random() * 100) + 1;
    document.querySelector('.number').textContent = secretNumber;
  });
});
