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

var playerPickElem = document.getElementById('js-playerPick'),
  computerPickElem = document.getElementById('js-computerPick'),
  playerResultElem = document.getElementById('js-playerResult'),
  computerResultElem = document.getElementById('js-computerResult');

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

// ---- ! MODEL ----

// ---- VIEW MODEL ----

/*
 * Init user input, amend model and view using user input and call
 * setGameElements
 */
function newGame() {
  player.name = prompt('Please enter your name', 'imię gracza');
  if (player.name) {
    player.score = computer.score = 0;
    gameState = 'started';
    setGameElements();
    playerNameElem.innerHTML = player.name;
    // setGamePoints(); // This function has not been created yet
  }
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

/*
 * Function returns random computer choice
 */
function getComputerPick() {
  var possiblePicks = ['rock', 'paper', 'scissors'];
  return possiblePicks[Math.floor(Math.random() * 3)];
}

/*
 * Function updates view based on user and computer picks
 */
function playerPick(playerPick) {
  var computerPick = getComputerPick();
  playerPickElem.innerHTML = playerPick;
  computerPickElem.innerHTML = computerPick;
}

// ---- ! VIEW MODEL ----
