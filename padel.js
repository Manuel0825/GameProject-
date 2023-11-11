class Paddle {
    constructor(isLeft) {
      this.y = height / 2;
      this.w = 10;
      this.h = 80;
      this.ychange = 0;
  
      if (isLeft) {
        this.x = this.w;
      } else {
        this.x = width - this.w;
      }
    }
  
    update() {
      this.y += this.ychange;
      this.y = constrain(this.y, this.h / 2, height - this.h / 2);
    }
  
    move(steps) {
      this.ychange = steps;
    }
  
    show() {
      fill(255);
      rectMode(CENTER); 
      rect(this.x, this.y, this.w, this.h);
    }
  }
  
  function movePaddles() {
    if (keyIsDown(65)) { 
        left.move(-5);
    } else if (keyIsDown(90)) { 
        left.move(5);
    }

    if (keyIsDown(75)) { 
        right.move(-5);
    } else if (keyIsDown(77)) { 
        right.move(5);
    }
}






