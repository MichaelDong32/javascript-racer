document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('keyup', handleKeyPress)
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

/*var get1Player = document.getElementById('player1');
get1Player.addEventListener("click", function(){
    document.getElementById('player1_strip').style.display = "inherit";
    document.getElementById('player2_strip').style.display = "none";
    document.getElementById('player3_strip').style.display = "none";
    document.getElementById('player4_strip').style.display = "none";
  });

/*var get2Player = document.getElementById('player2');
get2Player.addEventListener("click", function(){
    document.getElementById('player1_strip').style.display = "inherit";
    document.getElementById('player2_strip').style.display = "inherit";
    document.getElementById('player3_strip').style.display = "none";
    document.getElementById('player4_strip').style.display = "none";
  });

var get3Player = document.getElementById('player3');
get3Player.addEventListener("click", function(){
    document.getElementById('player1_strip').style.display = "inherit";
    document.getElementById('player2_strip').style.display = "inherit";
    document.getElementById('player3_strip').style.display = "inherit";
    document.getElementById('player4_strip').style.display = "none";
  });

var get4Player = document.getElementById('player4');
get4Player.addEventListener("click", function(){
    document.getElementById('player2_strip').style.display = "inherit";
    document.getElementById('player1_strip').style.display = "inherit";
    document.getElementById('player3_strip').style.display = "inherit";
    document.getElementById('player4_strip').style.display = "inherit";
  });
*/
//set keypresses to fire the move player function

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