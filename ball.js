class Puck {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.xspeed = 0;
    this.yspeed = 0;
    this.r = 12;

    this.reset();
  }

  Player1(p) {
    if (
      this.y - this.r < p.y + p.h / 2 &&
      this.y + this.r > p.y - p.h / 2 &&
      this.x + this.r > p.x - p.w / 2
    ) {
      if (this.x < p.x) {
        let diff = this.y - (p.y - p.h / 2);
        let angle = map(diff, 0, p.h, radians(225), radians(135));
        this.xspeed = 10 * cos(angle);
        this.yspeed = 10 * sin(angle);
        this.x = p.x - p.w / 2 - this.r;
      }
    }
  }
  Player2(p) {
    if (
      this.y - this.r < p.y + p.h / 2 &&
      this.y + this.r > p.y - p.h / 2 &&
      this.x - this.r < p.x + p.w / 2
    ) {
      if (this.x > p.x) {
        let diff = this.y - (p.y - p.h / 2);
        let rad = radians(45);
        let angle = map(diff, 0, p.h, -rad, rad);
        this.xspeed = 10 * cos(angle);
        this.yspeed = 10 * sin(angle);
        this.x = p.x + p.w / 2 + this.r;
      }
    }
  }

  update() {
    this.x += this.xspeed;
    this.y += this.yspeed;
  }

  reset() {
    this.x = width / 2;
    this.y = height / 2;
    let angle = random(-PI / 4, PI / 4);
    this.xspeed = 10 * Math.cos(angle);
    this.yspeed = 10 * Math.sin(angle);

    if (random(1) < 0.5) {
      this.xspeed *= -1;
    }
    if (leftscore === 5 || rightscore === 5) {
        
        currentLevel++;
        currentBackground = backgroundImages[currentLevel];
        
        leftscore = 0;
        rightscore = 0;
    }

    
  }
  edges() {
    if (this.y - this.r < 0 / this.r || this.y + this.r > height) {
      this.yspeed *= -1;
    }

    if (this.x - this.r > width) {
      leftscore++;
      this.reset();
    }

    if (this.x + this.r < 0) {
      rightscore++;
      this.reset();
    }
  }

  show() {
    fill(255);
    ellipse(this.x, this.y, this.r * 2);
  }
}
