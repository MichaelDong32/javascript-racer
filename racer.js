// declare variables

var player1 = document.getElementById('player1_strip')
var player2 = document.getElementById('player2_strip')

//assign player keys

var Q = 81
var P = 80

// variables to end game and to start again

var isGameOver = false
var playAgainButton = document.getElementById('btn-play-again')

// function to update player position

var updatePlayerPosition = function (player, playerName) {
  if (!isGameOver) {
    var cells = document.querySelectorAll('td')
      for(var i = 0; i < cells.length; i++) {
        if (cells[i].className.indexOf('active') !== -1){
          if (i === (cells.length-1)) {
            alert(playerName + "wins!");
            isGameOver = 1;
            showButton();
          }
          else{
            cells[i].className = '';
            cells[i+1].className = 'active';
            break;
          }
        }
      }
    }
  }

document.addEventListener('keyup', function(event){
  switch (event.keyCode) {
    case Q:
      updatePlayerPosition(player1, "Player One");
      break;
    case P:
      updatePlayerPosition(player2, 'Player Two');
      break;
  }
});

var showButton = function () {
  if (isGameOver === 1) {
    playAgainButton.style.display = 'block'
  }
}
var playAgainClick = function ) {
  window.location.reload();
}



