function moveBall() {// MOVE THE BALL 
ballX = ballX + ballSpeedX;
ballY = ballY + ballSpeedY;
}

function canvasBorders (){
    if (ballY < 0 || ballY > height){
        ballSpeedY *= -1
    }
    
    }
    
