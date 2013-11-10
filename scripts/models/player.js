(function(global){

  /****************************************************
   * 
   ****************************************************/
  function Player(){
    this.pos = [0,0];
    this.oClickCounter = 0;
    this.board = null;
    this.dialog = new Dialog();
    this.OBJ = document.createElement('div');
    this.OBJ.id = 'player';
    this.OBJ.style.width = Config.TILE_SIZE + 'px';
    this.OBJ.style.height = Config.TILE_SIZE + 'px';
    this.canMove = false;

    this.installKeyHandler();
  }

  /****************************************************
   * 
   ****************************************************/
  Player.prototype.addToBoard = function(board, pos){
    this.pos = pos;
    this.board = board;
    this.setPosition();
    board.add(this.OBJ);
    board.centerOn(pos);
  }

  /****************************************************
   * 
   ****************************************************/
  Player.prototype.setPosition = function(){
    this.OBJ.style.left = (this.pos[0] * Config.TILE_SIZE) + 'px';
    this.OBJ.style.top = (this.pos[1] * Config.TILE_SIZE) + 'px';
  }

  /****************************************************
   * 
   ****************************************************/
  Player.prototype.getSurroundings = function(){
    var res = {};
    if(this.board !== null){
      res = this.board.getSurroundings(this.pos);
    }
    return res;
  }

  /****************************************************
   * 
   ****************************************************/
  Player.prototype.isNearBottomEdge = function(){
    var res = false;
    var viewport = this.board.getViewport();
    var playerTop = parseInt(this.OBJ.style.top, 10) - viewport.top;
    if(global.Config.AREA.height <= playerTop + 2 * global.Config.TILE_SIZE){
      res = true;
    }
    return res;
  }
  
  /****************************************************
   * 
   ****************************************************/
  Player.prototype.isNearTopEdge = function(){
    var res = false;
    var viewport = this.board.getViewport();
    var playerTop = parseInt(this.OBJ.style.top, 10) - viewport.top;
    if(playerTop < 2 * global.Config.TILE_SIZE){
      res = true;
    }
    return res;
  }
  
  /****************************************************
   * 
   ****************************************************/
  Player.prototype.isNearLeftEdge = function(){
    var res = false;
    var viewport = this.board.getViewport();
    var playerLeft = parseInt(this.OBJ.style.left, 10) - viewport.left;
    if(playerLeft < 2 * global.Config.TILE_SIZE){
      res = true;
    }
    return res;
  }
  
  /****************************************************
   * 
   ****************************************************/
  Player.prototype.isNearRightEdge = function(){
    var res = false;
    var viewport = this.board.getViewport();
    var playerLeft = parseInt(this.OBJ.style.left, 10) - viewport.left;
    if(global.Config.AREA.width <= playerLeft + 2 * global.Config.TILE_SIZE){
      res = true;
    }
    return res;
  }

  /****************************************************
   * 
   ****************************************************/
  Player.prototype.installKeyHandler = function(){
    $(document).on('keypress', $.proxy(function(e){
      var key = e.keyCode || e.charCode;
      this.dialog.close();
      if(this.canMove == false){
        return;
      }
      switch(key){
        case 119: //W
        case 87:
          this.move('up');
          if(this.isNearTopEdge()){
            this.board.scrollDown();
          }
          break;
        case 115: //S
        case 83:
          this.move('down');
          if(this.isNearBottomEdge()){
            this.board.scrollUp();
          }
          break;
        case 97:  //A
        case 65:
          this.move('left');
          if(this.isNearLeftEdge()){
            this.board.scrollRight();
          }
          break;
        case 100: //D
        case 68:
          this.move('right');
          if(this.isNearRightEdge()){
            this.board.scrollLeft();
          }
          break;
        case 111:
        case 79: //O
          var poi = this.board.getPOI(this.pos);
          if(poi){
            this.dialog.message(poi);
          } else {
            this.oClickCounter++;
            if(this.oClickCounter == 5){
              for(var xy in global.pois){
                xy = xy.replace(':', '_');
                $("div[rel="+xy+"]").addClass('poi').html('.');
              }
            }
          }
          break;
        case 13: // enter
          this.board.centerOn(this.pos);
/*          var newPos;
          if(newPos = prompt("", this.pos)){
            this.pos = newPos.split(',').map(function(c){
              return parseInt(c,10);
            });
            this.setPosition();
            this.board.centerOn(this.pos);
            localStorage.pos = this.pos;
          }*/
          break;
        default:
          break;
      }
    }, this));
  }
  
  
  Player.prototype.setPos = function(x, y){
    this.pos = [x, y];
    this.setPosition();
  }


  Player.prototype.move = function(dir){
    var s = player.getSurroundings();
    if(s[dir] == '.'){
      switch(dir){
        case 'left':
          this.pos[0]--;
          break;
        case 'up':
          this.pos[1]--;
          break;
        case 'right':
          this.pos[0]++;
          break;
        case 'down':
          this.pos[1]++;
          break;
      }
      this.setPosition();
    }
  }
  
  global.Player = Player;
  
})(this);