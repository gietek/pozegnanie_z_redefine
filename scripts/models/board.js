(function(global){
  
  function Board(eltId){
    this.ELT = document.getElementById(eltId);
    this.TILES = {};
  }
  
  /****************************************************
   * 
   ****************************************************/
  Board.prototype.drawRooms = function(rooms){
    for(var i=0; i<rooms.length; i++){
      this.drawRoom(rooms[i]);
    }
  }


  /****************************************************
   * 
   ****************************************************/
  Board.prototype.drawRoom = function(room){
    var l = room.coordinates[0],
        t = room.coordinates[1];
    var w = room.dimensions[0],
        h = room.dimensions[1];

    var idx = 0;
    var fragment = document.createDocumentFragment();
    for(var y=t; y<t+h; y++){
      for(var x=l; x<l+w; x++){
        var code = room.points[idx++];
        var tile = document.createElement('div');
        var klass = 'tile';
        if(typeof code === 'undefined'){
          code = '.';
        }
        if(code != '.'){
          klass += ' t-' + code;
        }
        this.TILES[x+':'+y] = code;
        tile.className = klass;
        tile.style.left = (x * Config.TILE_SIZE) + 'px';
        tile.style.top = (y * Config.TILE_SIZE) + 'px';
        tile.style.width = Config.TILE_SIZE + 'px';
        tile.style.height = Config.TILE_SIZE + 'px';
        tile.innerHTML = x+':'+y;
        $(tile).attr('rel', x+'_'+y);
        fragment.appendChild(tile);
      }
    }
    this.ELT.appendChild(fragment);
  }

  /****************************************************
   * 
   ****************************************************/
  Board.prototype.add = function(child){
    this.ELT.appendChild(child);
  }

  /****************************************************
   * 
   ****************************************************/
  Board.prototype.getSurroundings = function(pos){
    var res = {
      left: this.TILES[(pos[0]-1)+':'+pos[1]],
      up: this.TILES[pos[0]+':'+(pos[1]-1)],
      right: this.TILES[(pos[0]+1)+':'+pos[1]],
      down: this.TILES[pos[0]+':'+(pos[1]+1)],
      center: this.TILES[pos[0]+':'+pos[1]]
    };
    return res;
  }
  
  /****************************************************
   * 
   ****************************************************/
  Board.prototype.getViewport = function(){
    var res = {
      left: 0 - this.ELT.offsetLeft,
      top: 0 - this.ELT.offsetTop,
      width: Config.AREA.width,
      height: Config.AREA.height
    };
    return res;
  }
  
  /****************************************************
   * 
   ****************************************************/
  Board.prototype.scrollUp = function(){
    this.ELT.style.top = (this.ELT.offsetTop - global.Config.TILE_SIZE) + "px";
  }
  
  /****************************************************
   * 
   ****************************************************/
  Board.prototype.scrollDown = function(){
    this.ELT.style.top = (this.ELT.offsetTop + global.Config.TILE_SIZE) + "px";
  }
  
  /****************************************************
   * 
   ****************************************************/
  Board.prototype.scrollLeft = function(){
    this.ELT.style.left = (this.ELT.offsetLeft - global.Config.TILE_SIZE) + "px";
  }
  
  /****************************************************
   * 
   ****************************************************/
  Board.prototype.scrollRight = function(){
    this.ELT.style.left = (this.ELT.offsetLeft + global.Config.TILE_SIZE) + "px";
  }
  
  /****************************************************
   * 
   ****************************************************/
  Board.prototype.centerOn = function(pos){
    var x = pos[0] * global.Config.TILE_SIZE - global.Config.AREA.width/2;
    var y = pos[1] * global.Config.TILE_SIZE - global.Config.AREA.height/2;
    this.ELT.style.left = (0 - x) + "px";
    this.ELT.style.top = (0 - y) + "px";
  }
  
  /****************************************************
   * 
   ****************************************************/
  Board.prototype.getPOI = function(pos){
    var s = pos[0]+':'+pos[1];
    if(typeof pois[s] !== "undefined"){
      return pois[s];
    }
    return null;
  }
  
  
  /****************************************************
   * 
   ****************************************************/
  Board.prototype.textDebug = function(){
    var s = "";
    
    s += "rooms = [{\n";
    
    var keys = Object.keys(board.TILES);
    var maxX = 0, maxY = 0, minX = 0, minY = 0;
    // znajdź wymiary planszy
    for(var i=0; i<keys.length; i++){
      var xy = keys[i].split(':').map(function(c){
        return parseInt(c,10);
      });
      maxX = Math.max(xy[0], maxX);
      maxY = Math.max(xy[1], maxY);
      minX = Math.min(xy[0], minX);
      minY = Math.min(xy[1], minY);
    }
    
    s += "\tcoordinates: [0, 0],\n";
    s += "\tdimensions: [" + (maxX - minX) + ", " + (maxY - minY) + "],\n";
    s += "\tpoints:\n";

    for(var y=minY; y<=maxY; y++){
      s += '\t\t"';
      for(var x=minX; x<=maxX; x++){
        var key = x+':'+y;
        var val = '.';
        if(typeof board.TILES[key] !== 'undefined'){
          val = board.TILES[key];
        }
        s += val;
      }
      if(y == maxY){
        s += '"\n';
      } else {
        s += '"+\n';
      }
    }
    
    s += "}];"

    return s;
  }
  
  
  
  
  var Cheat = {
    ON: function(){
      $("#engine").css({
        left: 0,
        top: 0
      });
      $("html, body").css({overflow: 'scroll'});

      // for(var xy in global.pois){
      //         xy = xy.replace(':', '_');
      //         $("div[rel="+xy+"]").addClass('poi').html('.');
      //       }
      
      $(".tile").on('click', function(e){
        var $o = $(e.currentTarget);
        var pos = $o.attr('rel').split('_').map(function(c){
          return parseInt(c,10);
        });
        global.player.setPos(pos[0], pos[1]);
      });
      
      $("#manual").hide();
      global.player.canMove = true;
      clearInterval(global.timer.interval);
    }
  };
  
  global.Cheat = Cheat;
  global.Board = Board;
  
})(this);