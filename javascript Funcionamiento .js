let scores = [0, 0];
let currentPlayer = 0;

document.getElementById('rollButton').addEventListener('click', rollDice);
document.getElementById('resetButton').addEventListener('click', resetGame);

function rollDice() {
    const diceValue = Math.floor(Math.random() * 6) + 1;
    document.getElementById(`dice${currentPlayer + 1}`).textContent = diceValue;
    scores[currentPlayer] += diceValue;
    document.getElementById(`score${currentPlayer + 1}`).textContent = scores[currentPlayer];

    currentPlayer = currentPlayer === 0 ? 1 : 0;
    if (scores[0] >= 20 || scores[1] >= 20) {
        determineWinner();
    }
}

function determineWinner() {
    document.getElementById('rollButton').disabled = true;
    let resultText = scores[0] > scores[1] ? '¡Jugador 1 gana!' : '¡Jugador 2 gana!';
    document.getElementById('result').textContent = resultText;
}

function resetGame() {
    scores = [0, 0];
    currentPlayer = 0;
    document.getElementById('dice1').textContent = '';
    document.getElementById('dice2').textContent = '';
    document.getElementById('score1').textContent = '0';
    document.getElementById('score2').textContent = '0';
    document.getElementById('result').textContent = '';
    document.getElementById('rollButton').disabled = false;
}