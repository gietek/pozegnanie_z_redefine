/****************************************************
 * 
 ****************************************************/
var Config = {
 AREA: {
   width: $(window).innerWidth(),
   height: $(window).innerHeight()
 },
 TILE_SIZE: 50
};

var board = new Board("engine");
board.drawRooms(rooms);

var player = new Player();

var music = document.createElement('audio');
music.id = 'music';

/*
// Niestety nie odważę się wrzucić na githuba komercyjnych utworów, 
// zatem ten cały blok wywalamy, a poniżej dam po prostu jeden darmowy track ściągnięty z sieci

if(typeof localStorage['finished'] === 'undefined'){
  music.innerHTML = '<source src="sound/music.mp3" type="audio/mpeg"><source src="sound/music.ogg" type="audio/ogg">';
} else {
  music.innerHTML = '<source src="sound/bonus.mp3" type="audio/mpeg"><source src="sound/bonus.ogg" type="audio/ogg">';
}
*/
music.innerHTML = '<source src="sound_free/music.mp3" type="audio/mpeg"><source src="sound_free/music.ogg" type="audio/ogg">';


document.body.appendChild(music);

var timer = new Timer();

var pos = [50,32];
player.addToBoard(board, pos);

$("#start").focus();
$("#start").on('click', function(){
  player.canMove = true;
  $("#manual").hide();
  music.play();
  var end_time = music.duration * 1000;
  timer.start(end_time);
});