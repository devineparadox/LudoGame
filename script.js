const dice = document.getElementById('dice');
const rollBtn = document.getElementById('roll-btn');
const statusText = document.getElementById('status');
const winnerText = document.getElementById('winner-text');
const gameOverDiv = document.getElementById('game-over');
const diceSound = document.getElementById('dice-sound');

let playerHome = 0;
let computerHome = 0;
let turn = 'player';

function rollDice() {
  diceSound.play();
  const roll = Math.floor(Math.random() * 6) + 1;
  dice.src = `dice/${roll}.png`;
  return roll;
}

function checkWin() {
  if (playerHome >= 4) {
    winnerText.innerText = 'You Win! 🎉';
    gameOverDiv.style.display = 'block';
  } else if (computerHome >= 4) {
    winnerText.innerText = 'Computer Wins! 🤖';
    gameOverDiv.style.display = 'block';
  }
}

rollBtn.addEventListener('click', () => {
  if (turn !== 'player') return;
  const roll = rollDice();
  if (roll === 6 || roll === 1 || Math.random() > 0.5) {
    playerHome++;
  }
  checkWin();
  turn = 'computer';
  statusText.innerText = "Computer's Turn...";
  setTimeout(() => {
    const compRoll = rollDice();
    if ((compRoll === 6 || compRoll === 1 || Math.random() > 0.5) && computerHome < 4) {
      computerHome++;
    }
    checkWin();
    turn = 'player';
    statusText.innerText = "Your Turn";
  }, 1500);
});
