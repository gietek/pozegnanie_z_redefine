(function(global){
  
  var events = {
    11: {
      message: 'Godzina 11:00. Idź na spotkanie ZPM.',
      code: function(){
        global.pois['52:7'] = [
          {actor: 'gietek', text: 'Oczywiście nikogo jeszcze nie ma.'},
          {actor: 'gietek', text: 'Zawsze się spóźniają.'},
          {actor: 'gietek', text: 'A, pierdolę, w tym tygodniu nie idę na ZPM-y.'}
        ];
      }
    },
    12: {
      code: function(){
        global.pois['52:7'] = [
          {actor: 'gietek', text: 'Obawiam się, że przyszedłem za późno.'},
          {actor: 'gietek', text: 'Już po ZPM-ach.'}
        ];
      }
    },
    13: {
      message: 'Godzina 13:00. Dobra pora na piłkarzyki z Olkiem.',
      code: function(){
        global.pois['65:36'] = [
          {actor: 'gietek', text: 'Gotów?'},
          {actor: 'person', text: 'Gotów.'}
        ];
        global.pois['6:29'] = [
          {actor: 'gietek', text: 'Damn. Znów przegrałem :('}
        ];
      }
    },
    14: {
      message: 'Godzina 14:00. Janczura wzywa. ASAP!',
      code: function(){
        global.pois['56:5'] = [
          {actor: 'person', text: 'Kurwa, wszystko robicie źle! Tak być dalej nie może! Ja później muszę wysłuchiwać!'},
          {actor: 'gietek', text: 'Ale co konkretnie?'},
          {actor: 'person', text: 'Ale nieee, ja sobie tylko tak żartuję'},
          {actor: 'gietek', text: 'Facepalm...'},
        ];
        global.pois['65:36'] = [
          {actor: 'gietek', text: 'Trenuj, bo jak wrócę, to wiesz...'},
          {actor: 'gietek', text: 'A przegrywasz -2 :)'}
        ];
        delete global.pois['6:29'];
      }
    },
    15: {
      code: function(){
        delete global.pois['56:5'];
      }
    },
  };

  var Timer = function(){
    this.duration = 0;
  }


  Timer.prototype.start = function(duration){
    this.duration = duration / 1000 | 0;
    this.now = +(new Date());
    this.interval = setInterval($.proxy(this.tick, this), 2000);
  }


  Timer.prototype.tick = function(){
    var t = +(new Date());
    var delta = (t - this.now) / 1000 | 0;
    if(delta >= this.duration){
      clearInterval(this.interval);
      this.finish();
      return;
    }
    this._delta = delta;
    
    var event_time = this.secToHour(delta);
    if(typeof events[event_time] !== 'undefined'){
      if(typeof events[event_time].message !== 'undefined'){
        this.showMessage(events[event_time].message);
        delete events[event_time].message;
      } else {
        this.hideMessage();
      }
      if(typeof events[event_time].code !== 'undefined'){
        events[event_time].code();
      }
    } else {
      this.hideMessage();
    }
  }
  
  Timer.prototype.secToHour = function(s){
    var x = s * 8 / this.duration | 0;
    return x + 9;
  }
  
  Timer.prototype.hideMessage = function(){
    $("#message").fadeOut();
  }
  
  
  Timer.prototype.showMessage = function(msg){
    var O = $("#message");
    O.html(msg).fadeIn();
  }


  Timer.prototype.finish = function(){
    global.music.pause();
    localStorage['finished'] = true;
    global.player.canMove = false;
    $("#manual").html([
      "<h5>Koniec czasu!</h5>"
    ].join("\n")).show();
  }
  
  global.Timer = Timer;
  
})(this);