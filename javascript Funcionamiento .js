let scores = [0, 0];
let round = 1;
let currentPlayer = 0;
const maxRounds = 3;

document.getElementById('rollButton').addEventListener('click', rollDice);
document.getElementById('resetButton').addEventListener('click', resetGame);

function rollDice() {
    const diceValue = Math.floor(Math.random() * 6) + 1;
    document.getElementById(`dice${currentPlayer + 1}`).textContent = diceValue;
    scores[currentPlayer] += diceValue;
    document.getElementById(`score${currentPlayer + 1}`).textContent = scores[currentPlayer];

 if(round === maxRounds && currentPlayer === 1){
    determineWinner();
 }else {
    currentPlayer = currentPlayer === 0 ? 1 : 0;
    if (currentPlayer === 0) round++;
    document.getElementById('currentPlayer').textContent = `Jugador ${currentPlayer + 1}`;
    document.getElementById('round').textContent = round;
  }
}

function determineWinner() {
    document.getElementById('rollButton').disabled = true;
   let resultText = '';
   if(scores[0] > scores[1]){
    resultText = 'Jugador 1 gana !';
   } else if (scores[0] < scores[1]){
    resultText = 'Jugador 2 gana!';
   }else {
    resultText = '¡Empate!';
   }
   document.getElementById('result').textContent = resultText;
}

function resetGame() {
    scores = [0, 0];
    round = 1;
    currentPlayer = 0;
    document.getElementById('dice1').textContent = '';
    document.getElementById('dice2').textContent = '';
    document.getElementById('score1').textContent = '0';
    document.getElementById('score2').textContent = '0';
    document.getElementById('currentPlayer').textContent ='Jugador 1';
    document.getElementById('round').textContent = '1';
    document.getElementById('result').textContent = '';
    document.getElementById('rollButton').disabled = false;
}