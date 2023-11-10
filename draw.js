let leftscore = 0;
let rightscore = 0;
let backgroundImages = [];
let currentBackground = 0;
let currentLevel = 0;
let pucks = []; 

function preload() {
  backgroundImages[0] = loadImage("./Img/black.jpeg");
  backgroundImages[1] = loadImage("./Img/fancy-court.png");
  backgroundImages[2] = loadImage("./Img/cssbackground.gif");

  currentBackground = backgroundImages[0];
}

function setup() {
  let canvas = createCanvas(1000, 500);
  canvas.parent("game-container");

  left = new Paddle(true);
  right = new Paddle(false);

  
  pucks.push(new Puck());
}

function draw() {
  background(currentBackground);

  
  for (let i = 0; i < pucks.length; i++) {
    pucks[i].Player2(left);
    pucks[i].Player1(right);
    pucks[i].update();
    pucks[i].edges();
    pucks[i].show();
  }

  left.show();
  right.show();
  left.update();
  right.update();
  movePaddles();

  fill(255);
  textSize(32);
  text(leftscore, 32, 40);
  text(rightscore, width - 64, 40);

  
  if (currentLevel === 1 && pucks.length === 1) {
    pucks.push(new Puck());
  }
}




