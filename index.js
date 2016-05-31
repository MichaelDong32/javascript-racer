document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('keyup', handleKeyPress)
})

//choose player - toggle to show the table row

function toggle(row) {
  if (isNaN(row)) row = document.getElementById(row); // id passed
  else row = document.getElementById('table1').rows[row]; // idx passed
  if (row) row.style.display=(row.style.display=='none')?'':'none';
  return false;
}

//show instructions via alert dialog box to start

document.getElementById('start').addEventListener("click", function(){
    alert("To move Froggy1 press q, Froggy 2 press p, Froggy3 press x and Froggy4 press m");
})


//create frog sound on keypress

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
//select how many players



function handleKeyPress (e) {
  if (e.which == 81) {
    movePlayer(1)
  }

  if (e.which == 80) {
    movePlayer(2)
  }

  if (e.which == 88) {
    movePlayer(3)
  }

  if (e.which == 77) {
    movePlayer(4)
  }
}

//move the frogs using the movePlayer funtion

function movePlayer (playerInt) {
  var row = document.getElementById('row' + playerInt)
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