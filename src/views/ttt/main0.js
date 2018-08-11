// Custom JavaScript by Garrett Estrin | GarrettEstrin.com

// Game object
var game = {}
game.utilities = {}

// Variable for all squares
// var $sqrs = $('.square');
game.sqrs = document.getElementsByClassName('square')
// Variable for message area
// var game.message = $('.message');
game.message = document.getElementsByClassName('message')[0]
// var $box1 = $('#box1');
game.box1 = document.getElementById('box1')
// var $box2 = $('#box2');
game.box2 = document.getElementById('box2')
// var $box3 = $('#box3');
game.box3 = document.getElementById('box3')
// var $box4 = $('#box4');
game.box4 = document.getElementById('box4')
// var $box5 = $('#box5');
game.box5 = document.getElementById('box5')
// var $box6 = $('#box6');
game.box6 = document.getElementById('box6')
// var $box7 = $('#box7');
game.box7 = document.getElementById('box7')
// var $box8 = $('#box8');
game.box8 = document.getElementById('box8')
// var $box9 = $('#box9');
game.box9 = document.getElementById('box9')
// Variable for turn
// var game.turn = true;
game.turn = true
// Variable for turn number
// var game.turnNum = 1;
game.turnNum = 1
// Array for picks
// var game.picks = [];
game.picks = []
// Variable for reset button
game.resetBtn = document.getElementById('resetGameBtn')
// Variable for image
game.catsGame = document.getElementsByTagName('img')[0]
// Variable for meow
game.meow = new Audio('./ttt/meow.mp3');

// Function to select either X or O
game.utilities.makeSelection = function() {
  if(game.turn == true) {
    // this.addClass('x');
    var classes = this.getAttribute('class')
    classes += ' x'
    this.setAttribute('class', classes)
    game.turn = false;
    // console.log(this.attr('id'));
    // this.attr('player', 'x');
    this.setAttribute('player', 'x')
    game.picks[this.getAttribute('data-box') - 1] = this.getAttribute('player');
    game.turnNum += 1;
    this.removeEventListener('click', game.utilities.makeSelection)
    game.utilities.winx();
    game.utilities.catsGame();
  }else {
    // this.addClass('o');
    var classes = this.getAttribute('class')
    classes += ' o'
    this.setAttribute('class', classes)
    game.turn = true;
    // console.log(this.attr('id'));
    this.setAttribute('player', 'o');
    game.picks[this.getAttribute('data-box') - 1] = this.getAttribute('player');
    game.turnNum = game.turnNum + 1;
    this.removeEventListener('click', game.utilities.makeSelection);
    game.utilities.wino();
    game.utilities.catsGame();

  }
}

game.utilities.xWins = function(){
  game.message.innerText = 'Player X Wins!'
  // $sqrs.removeEventListener('click', game.utilites.makeSelection)
  for(i=0; i<game.sqrs.length; i++){
    game.sqrs[i].removeEventListener('click', game.utilities.makeSelection)
  }
  game.resetBtn.style.display = 'inline'

}

game.utilities.oWins= function(){
  game.message.innerText = 'Player O Wins!'
  // $sqrs.removeEventListener('click', game.utilites.makeSelection)
  for(i=0; i<game.sqrs.length; i++){
    game.sqrs[i].removeEventListener('click', game.utilities.makeSelection)
  }
  game.resetBtn.style.display = 'inline'
}

// Add click event listeners to boxes
// game.sqrs.addEventListener('click', game.utilities.makeSelection)
game.utilities.setListener = function(){
  for(i=0; i<game.sqrs.length ;i++){
    game.sqrs[i].addEventListener('click', game.utilities.makeSelection)
  }
}

// Game win logic
game.utilities.winx = function(){
  if(game.picks[0] == 'x' && game.picks[1] == 'x' && game.picks[2] == 'x'){
    game.utilities.xWins()
  }
  else if (game.picks[3] == 'x' && game.picks[4] == 'x' && game.picks[5] == 'x'){
    game.utilities.xWins()
  }
  else if (game.picks[6] == 'x' && game.picks[7] == 'x' && game.picks[8] == 'x'){
    game.utilities.xWins()
  }
  else if (game.picks[0] == 'x' && game.picks[3] == 'x' && game.picks[6] == 'x'){
    game.utilities.xWins()
  }
  else if (game.picks[1] == 'x' && game.picks[4] == 'x' && game.picks[7] == 'x'){
    game.utilities.xWins()
  }
  else if (game.picks[2] == 'x' && game.picks[5] == 'x' && game.picks[8] == 'x'){
    game.utilities.xWins()
  }
  else if (game.picks[0] == 'x' && game.picks[4] == 'x' && game.picks[8] == 'x'){
    game.utilities.xWins()
  }
  else if (game.picks[6] == 'x' && game.picks[4] == 'x' && game.picks[2] == 'x'){
    game.utilities.xWins()
  }
  }

game.utilities.wino = function(){
  if(game.picks[0] == 'o' && game.picks[1] == 'o' && game.picks[2] == 'o'){
    game.utilities.oWins()
  }
  else if (game.picks[3] == 'o' && game.picks[4] == 'o' && game.picks[5] == 'o'){
    game.utilities.oWins()
  }
  else if (game.picks[6] == 'o' && game.picks[7] == 'o' && game.picks[8] == 'o'){
    game.utilities.oWins()
  }
  else if (game.picks[0] == 'o' && game.picks[3] == 'o' && game.picks[6] == 'o'){
    game.utilities.oWins()
  }
  else if (game.picks[1] == 'o' && game.picks[4] == 'o' && game.picks[7] == 'o'){
    game.utilities.oWins()
  }
  else if (game.picks[2] == 'o' && game.picks[5] == 'o' && game.picks[8] == 'o'){
    game.utilities.oWins()
  }
  else if (game.picks[0] == 'o' && game.picks[4] == 'o' && game.picks[8] == 'o'){
    game.utilities.oWins()
  }
  else if (game.picks[6] == 'o' && game.picks[4] == 'o' && game.picks[2] == 'o'){
    game.utilities.oWins()
  }
  }

  game.utilities.resetGame = function(){
    for(i=0; i<game.sqrs.length; i++){
      game.sqrs[i].classList.remove('x')
      game.sqrs[i].classList.remove('o')
    }
    game.picks = []
    game.turnNum = 1
    game.message.innerText = ''
    game.resetBtn.style.display = "none"
    game.utilities.setListener()

  }

  game.resetBtn.addEventListener('click', game.utilities.resetGame)

  game.utilities.setListener()

  game.utilities.catsGame = function(){
    if(game.turnNum == 10){
      game.catsGame.style.display = "inline"
      game.meow.play()
    }
  }
