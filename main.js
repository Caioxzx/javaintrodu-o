// Variáveis do jogo
let score = 0;

// Elementos do DOM
const startButton = document.getElementById('startButton');
const scoreText = document.getElementById('scoreText');

// Função de início do jogo
function startGame() {
  score = 0;
  scoreText.textContent = 'Pontuação: ' + score;
  
  // Lógica do jogo

  // Incrementar pontuação
  score += 10;
  scoreText.textContent = 'Pontuação: ' + score;
}

// Evento de clique no botão de iniciar jogo
startButton.addEventListener('click', startGame);