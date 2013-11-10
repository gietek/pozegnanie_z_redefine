(function(global){
  
  function Dialog(){
    this.OBJ = document.createElement('div');
    this.OBJ.id = 'dialog';
    this.OBJ.innerHTML = [
      '<img src="gfx/man.png">',
      '<div id="dialog-messages"></div>',
      '<img src="gfx/gietek.jpg">'
    ].join('\n');
    document.body.appendChild(this.OBJ);
  }


  Dialog.prototype.close = function(){
    this.isOpen = false;
    document.getElementById('dialog-messages').innerHTML = '';
    this.OBJ.style.display = 'none';
  }


  Dialog.prototype.message = function(list){
    this.isOpen = true;
    this.OBJ.style.display = 'block';
    var DIV = document.getElementById('dialog-messages');
    for(var i=0; i<list.length; i++){
      var item = list[i];
      
      var p = document.createElement('p');
      p.className = item.actor;
      p.innerHTML = item.text;
      if(item.actor == 'person'){
        p.style.marginLeft = '-' + 460 + 'px';
      } else {
        p.style.marginLeft = 500 + 'px';
      }
      DIV.appendChild(p);
    }
    this.animateMessages($("#dialog").find('p').toArray());
  }
  
  
  Dialog.prototype.animateMessages = function(list){
    if(list.length == 0){
      return
    }
    var item = list.shift();
    var options = {
      duration: 1000,
      complete: $.proxy(function(){
        setTimeout($.proxy(function(){
          this.animateMessages(list);
        },this), 10)
      }, this)
    };
    if(item.className == 'person'){
      $(item).animate({
        marginLeft: '-1px'
      }, options);
    } else {
      $(item).animate({
        marginLeft: '38px'
      }, options);
    }
  }


  global.Dialog = Dialog;
  
})(this);