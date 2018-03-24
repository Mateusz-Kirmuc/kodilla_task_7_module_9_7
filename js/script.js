// ---- VIEW ----

var newGameBtn = document.getElementById('js-newGameButton');

var pickRock = document.getElementById('js-playerPick_rock'),
  pickPaper = document.getElementById('js-playerPick_paper'),
  pickScissors = document.getElementById('js-playerPick_scissors');

var newGameElem = document.getElementById('js-newGameElement'),
  pickElem = document.getElementById('js-playerPickElement'),
  resultsElem = document.getElementById('js-resultsTableElement');

var playerPointsElem = document.getElementById('js-playerPoints'),
  playerNameElem = document.getElementById('js-playerName'),
  computerPointsElem = document.getElementById('js-computerPoints');

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

// ---- ! VIEW ----

// ---- MODEL ----

var gameState = 'notStarted', //started // ended
  player = {
    name: '',
    score: 0
  },
  computer = {
    score: 0
  };

setGameElements();

// ---- ! MODEL ----

// ---- VIEW MODEL ----

function newGame() {
  console.log("newGame handler works!");
}

/*
 * Update view based on gameState model data
 */
function setGameElements() {
  switch (gameState) {
    case 'started':
      newGameElem.style.display = 'none';
      pickElem.style.display = 'block';
      resultsElem.style.display = 'block';
      break;
    case 'ended':
      newGameBtn.innerText = 'Play again';
    case 'notStarted':
    default:
      newGameElem.style.display = 'block';
      pickElem.style.display = 'none';
      resultsElem.style.display = 'none';
  }
}

// ---- ! VIEW MODEL ----
