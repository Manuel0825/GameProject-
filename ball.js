class Ball {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.xspeed = 5;
    this.yspeed = 5;
    this.r = 12;
  }

  update() {
    this.x += this.xspeed;
    this.y += this.yspeed;
  }

  walls() {
    if (this.y - this.r < 0 || this.y + this.r > height) {
      this.yspeed *= -1;
    }

    if (this.x - this.r < 0) {
      rightscore++;
      this.resetBall();
    }

    if (this.x + this.r > width) {
      leftscore++;
      this.resetBall();
    }

    if (
      this.x - this.r < left.x + left.w / 2 &&
      this.y > left.y - left.h / 2 &&
      this.y < left.y + left.h / 2
    ) {
      this.xspeed = abs(this.xspeed);
    }

    if (
      this.x + this.r > right.x - right.w / 2 &&
      this.y > right.y - right.h / 2 &&
      this.y < right.y + right.h / 2
    ) {
      this.xspeed = -abs(this.xspeed);
    }
  }

  resetBall() {
    this.x = width / 2;
    this.y = height / 2;
    this.xspeed = random([-5, 5]);
    this.yspeed = random([-5, 5]);
  }

  show() {
    fill(255);
    ellipse(this.x, this.y, this.r * 2);
  }
}
