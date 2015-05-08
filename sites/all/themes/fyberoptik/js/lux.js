//http://spielzeugz.de/html5/liquid-particles.html 
//http://www.williammalone.com/articles/html5-game-scaling/
//#mainCanvas
// Scaling Techniques http://www.williammalone.com/articles/html5-game-scaling/

//http://www.chiptune.com/kaleidoscope/


(function ($) {
    // Original JavaScript code.
    window.requestAnimFrame = (function(callback) {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function(callback) {
            window.setTimeout(callback, 1000 / 60);
        };
    })();

    window.onload = function(){
        $("#mainCanvas").attr("width", "500px");
        $("#mainCanvas").attr("height", "400px");
        var canvas = document.getElementById("mainCanvas");
        var context = canvas.getContext("2d");

        // Draw Logo on T
        var destX = canvas.width / 2 - this.width / 2;
        var destY = canvas.height / 2 - this.height / 2;

        


        function drawRectangle(myRectangle, context) {
            context.beginPath();
            context.rect(myRectangle.x, myRectangle.y, myRectangle.width, myRectangle.height);
            context.fillStyle = '#8ED6FF';
            context.fill();
            context.lineWidth = myRectangle.borderWidth;
            context.strokeStyle = 'black';
            context.stroke();
        }   

        function animate(myRectangle, canvas, context, startTime) {
            // update
            var time = (new Date()).getTime() - startTime;

            var linearSpeed = 100;
            // pixels / second
            var newX = linearSpeed * time / 1000;

            if(newX < canvas.width - myRectangle.width - myRectangle.borderWidth / 2) {
                myRectangle.x = newX;
            }
            // clear
            context.clearRect(0, 0, canvas.width, canvas.height);            
            drawRectangle(myRectangle, context);
            
			var flogo = new Image();
            flogo.onload = function () {
                context.drawImage(flogo, destX, destY);
            };
            flogo.src = "/sites/all/themes/fyberoptik/images/f.png";
            
            // request new frame
            requestAnimFrame(function() {
                animate(myRectangle, canvas, context, startTime);
            });

        }
        //var canvas = document.getElementById('myCanvas');
        //var context = canvas.getContext('2d');

        var myRectangle = {
            x: 0,
            y: 75,
            width: 100,
            height: 50,
            borderWidth: 5
        };

    drawRectangle(myRectangle, context);
        
    // wait one second before starting animation
    setTimeout(function() {
        var startTime = (new Date()).getTime();
        animate(myRectangle, canvas, context, startTime);
        }, 1000);    
    };
})(jQuery);


        