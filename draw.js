let leftscore = 0;
let rightscore = 0;
let backgroundImages = [];
let currentBackground = 0;
let currentLevel = 0;
let balls = [];

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

  balls.push(new Ball());
}

function draw() {
  background(currentBackground);

  for (let i = 0; i < balls.length; i++) {
    balls[i].update();
    balls[i].walls();
    balls[i].show();
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

  if (leftscore === 5 || rightscore === 5) {
    currentLevel++;
    if (currentLevel < backgroundImages.length) {
      currentBackground = backgroundImages[currentLevel];
    } else {
      // Display "Game Over" message
      textSize(64);
      textAlign(CENTER, CENTER);
      fill(255, 0, 0);
      text("Game Over!", width / 2, height / 2);
      noLoop(); // Stop the draw loop
    }
    // Reset scores to 0 for the next level
    leftscore = 0;
    rightscore = 0;

    // Create the appropriate number of pucks for the current level
    balls = [];
    for (let i = 0; i < currentLevel + 1; i++) {
      balls.push(new Ball());
    }
  }

  if (currentLevel < 3 && balls.length === 0) {
    // Create the appropriate number of pucks for the first level
    for (let i = 0; i < 1; i++) {
      balls.push(new Ball());
    }
  }
}


