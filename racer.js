//document.addEventListener('DOMContentLoaded',function() {
var player1 = document.getElementById('player1-strip');
var player2 = document.getElementById('player2.strip');
  console.log(player1);
  console.log (player2);

var player1_items = player1.querySelectorAll('td');
var player2_items = player2.querySelectorAll('td');

//find the code for the pressed key
document.onKeyUp = function (event) {
  console.log(event.which);
};

//set the start state of the game with a function

function startGame(playerItems){
  for (var i=0; i < playerItems.length; i++){
    //console.log(playerItems[i])
    playerItems[i].className = '';
    playerItems[0].className = 'active';
  };
};

startGame(player1_items);
startGame(player2_items);
  alert('Press Q to move player1 and P to mover player2');

//update player postition function

function updatePlayerPosition (player) {
  for(var i = 0; i < player.length; i++){
    if(player[i] === 'active'){
      nextElement = player[i].nextElementSibling;
      //console.log(nextElement);
      if(player[i] === player [10]){
        alert('Game Over')
        startGame(player1_items);
        startGame(player2_items);
      } else {
        nextElement.className ='active';
        player[i].className = '';
      };
      break;
      };
    };
  };

//run he update player function based on the key press

document.onKeyUp = function whichKey(event){
  if (event.which === 81) {
    updatePlayerPosition(player1_items)
  }else if (event.which === 80)
    updatePlayerPosition(player2_items)
  }else{
    alert ('Press Q to move player 1 and P to move player 2')
  };
};
  
  //});


