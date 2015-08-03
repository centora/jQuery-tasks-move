(function(){
    var rect = $("#rect");        
    var _playBtn = $("#play");   
    var _stopBtn = $("#stop");   
    var time;
    var leftPos = 0;

    function move(_elem){
        _elem.addClass("moved");
        leftPos+=10;
        rect.css({
            left: leftPos + "px"
        })
        if(leftPos == 500){ 
            stopMove();
            leftPos = 0;
            rect.removeClass("moved");
        }
    }

    function stopMove(){
        clearInterval(time);
    }
    _playBtn.on('click', function(){
        clearInterval(time);
        time = setInterval(function(){
            move(rect);
        }, 50);
    });
   
    _stopBtn.click(function(){
        stopMove();
    });


})();