/*class Paddle {

    constructor(x, y, w, h) {
        this.pos = createVector(x, y);
        this.w = w;
        this.h = h;
        this.score = 0;
    }

    move(amt) {
        this.pos.y += amt;
        this.pos.y = constrain(this.pos.y, 10, height - 10 - this.h);
    }

    show() {
        noStroke();
        fill(255);
        rect(this.pos.x, this.pos.y, this.w, this.h);
    }
        

}*/

class Paddle {
    constructor(isLeft) {
        this.y = height/2;
        this.w = 20;
        this.h = 100;
        this.ychange = 0;
        
        if (isLeft) {
            this.x = this.w;
        } else {
            this.x = width - this.w;
        }
        
        
    }
    
    update() {
        this.y += this.ychange;
        this.y = constrain(this.y, this.h/2, height-this.h/2);
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
    if (keyIsDown(65)) { // 65 is the key code for 'A'
        left.move(-5);
    } else if (keyIsDown(90)) { // 90 is the key code for 'Z'
        left.move(5);
    }

    if (keyIsDown(75)) { // 75 is the key code for 'J'
        right.move(-5);
    } else if (keyIsDown(77)) { // 77 is the key code for 'M'
        right.move(5);
    }
}


