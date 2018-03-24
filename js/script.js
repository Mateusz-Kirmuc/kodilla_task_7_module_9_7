// Nodes
var newGameBtn = document.getElementById('js-newGameButton');
var pickRock = document.getElementById('js-playerPick_rock'),
  pickPaper = document.getElementById('js-playerPick_paper'),
  pickScissors = document.getElementById('js-playerPick_scissors');

// Event Handlers
function newGame() {
  console.log("newGame handler works!");
}


newGameBtn.addEventListener('click', newGame);
pickRock.addEventListener('click', function() {
  playerPick('rock');
});
pickPaper.addEventListener('click', function() {
  playerPick('paper');
});
pickScissors.addEventListener('click', function() {
  playerPick('scissors');
});

// Game data
var gameState = 'notStarted', //started // ended
  player = {
    name: '',
    score: 0
  },
  computer = {
    score: 0
  };
