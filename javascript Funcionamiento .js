let scores = [0, 0];
let round = 1;
let currentPlayer = 0;
const maxRounds = 3;
let gameActive = false;
let playerNames = ["Jugador 1", "Jugador 2"];

document.getElementById('rollButton').addEventListener('click', rollDice);
document.getElementById('resetButton').addEventListener('click', resetGame);
document.getElementById('startButton').addEventListener('click', startGame);
document.addEventListener('keydown', function(event) {
    if (event.code === 'Space' && gameActive) {
        rollDice();
    }
});

function startGame() {
    playerNames[0] = document.getElementById('name1').value || 'Jugador 1';
    playerNames[1] = document.getElementById('name2').value || 'Jugador 2';
    document.getElementById('player1').querySelector('h2').textContent = playerNames[0];
    document.getElementById('player2').querySelector('h2').textContent = playerNames[1];
    document.getElementById('currentPlayer').textContent = playerNames[0];
    document.getElementById('nameInputs').style.display = 'none';
    document.getElementById('game').style.display = 'flex';
    document.getElementById('controls').style.display = 'block';
    gameActive = true;
}

function rollDice() {
    const diceSound = document.getElementById('diceSound');
    diceSound.play();

    const diceValue = Math.floor(Math.random() * 6) + 1;
    const diceElement = document.getElementById(`dice${currentPlayer + 1}`);
    diceElement.innerHTML = '<img src="https://www.gifss.com/economia/juego/images/dados-4.gif" alt="Rolling...">';

    setTimeout(() => {
        diceElement.textContent = diceValue;
        scores[currentPlayer] += diceValue;
        document.getElementById(`score${currentPlayer + 1}`).textContent = scores[currentPlayer];

        const historyItem = document.createElement('li');
        historyItem.textContent = `${playerNames[currentPlayer]} lanzó un ${diceValue}`;
        document.getElementById('historyList').appendChild(historyItem);

        if (round === maxRounds && currentPlayer === 1) {
            determineWinner();
        } else {
            currentPlayer = currentPlayer === 0 ? 1 : 0;
            if (currentPlayer === 0) round++;
            document.getElementById('currentPlayer').textContent = playerNames[currentPlayer];
            document.getElementById('round').textContent = round;
        }
    }, 1000); // Duración de la animación del GIF
}

function determineWinner() {
    document.getElementById('rollButton').disabled = true;
    gameActive = false;
    let resultText = '';
    if (scores[0] > scores[1]) {
        resultText = `¡${playerNames[0]} gana!`;
    } else if (scores[0] < scores[1]) {
        resultText = `¡${playerNames[1]} gana!`;
    } else {
        resultText = '¡Empate!';
    }
    document.getElementById('result').textContent = resultText;

    const bestScore = Math.max(scores[0], scores[1]);
    const storedBestScore = localStorage.getItem('bestScore');
    if (!storedBestScore || bestScore > storedBestScore) {
        localStorage.setItem('bestScore', bestScore);
        alert(`¡Nueva mejor puntuación: ${bestScore}!`);
    }
}

function resetGame() {
    scores = [0, 0];
    round = 1;
    currentPlayer = 0;
    gameActive = true;
    document.getElementById('dice1').textContent = '';
    document.getElementById('dice2').textContent = '';
    document.getElementById('score1').textContent = '0';
    document.getElementById('score2').textContent = '0';
    document.getElementById('currentPlayer').textContent = playerNames[0];
    document.getElementById('round').textContent = '1';
    document.getElementById('result').textContent = '';
    document.getElementById('historyList').innerHTML = '';
    document.getElementById('rollButton').disabled = false;
}