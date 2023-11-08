/*frameRate(60); // Increase frame rate for smoother animation use for later on */

let ballX = 450;
let ballY = 300;
let ballSpeedX = 0.2;
let ballSpeedY= 4;




function setup() {
    createCanvas(900, 600); // Crea un lienzo de 900lx600h píxeles
    
}



  
  function draw() {
    background(0); // Establece el fondo negro
    ellipse(ballX, ballY, 50, 50); // Dibuja un círculo en (450l, 300h) con un radio de 50

   
    
    moveBall();// CALL THE FUNCTION TO MOVE THE BALL 
    canvasBorders();
    Showpadel();
  }


