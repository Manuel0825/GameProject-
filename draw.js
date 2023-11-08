/*frameRate(60); // Increase frame rate for smoother animation use for later on */

/*let ballX = 450;
let ballY = 300;
let ballSpeedX = 0.2;
let ballSpeedY = 4;

function setup() {
  createCanvas(900, 600); // Crea un lienzo de 900lx600h píxeles
}

function draw() {
  background(0); // Establece el fondo negro
  ellipse(ballX, ballY, 50, 50); // Dibuja un círculo en (450l, 300h) con un radio de 50

  moveBall(); // CALL THE FUNCTION TO MOVE THE BALL
  canvasBorders();
  movePaddles();
	p1.show();
	p2.show();

}*/

let leftscore = 0;
let rightscore = 0;

function setup() {
    createCanvas(1000, 500);
    puck = new Puck();
    left = new Paddle(true);
    right = new Paddle(false);
  
}

function draw() {
    background (255, 204, 0);
    
    puck.checkPaddleRight(right);
    puck.checkPaddleLeft(left);

    left.show();
    right.show();
    left.update();
    right.update();
    movePaddles();
    
    puck.update();
    puck.edges();
    puck.show();
    
    fill(255);
    textSize(32);
    text(leftscore, 32, 40);
    text(rightscore, width-64, 40);
}








      


