document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('keyup', handleKeyPress)
})

var sounds = {
   80 : 'frog',
   81 : 'frog',
   88 : 'frog',

};
document.onkeydown = function(e) {
    var soundId = sounds[e.keyCode];
    if (soundId) document.getElementById(soundId).play();
    else console.log("key not mapped : code is", e.keyCode);
}



function handleKeyPress (e) {
  if (e.which == 81) {
    movePlayer(1)
  }

  if (e.which == 80) {
    movePlayer(2)
  }
}

function movePlayer (playerInt) {
  var row = document.getElementById('player' + playerInt + '_strip')
  var cell = document.getElementsByClassName('active' + playerInt)
  var nextCell = row.cells[cell[0].cellIndex + 1]

  checkForVictory(nextCell, playerInt)

  cell[0].className = ''
  nextCell.className = 'active' + playerInt
}

function checkForVictory (nextCell, playerInt) {
  if (nextCell === undefined) {
    alert('Froggy ' + playerInt + ' wins!')
    window.location.reload()
  }
}