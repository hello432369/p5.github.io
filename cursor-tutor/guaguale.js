let rectangles = [];

function setup() {
  // createCanvas(400, 400);
createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < random(5, 15); i++) {
    let x = random(width);
    let y = random(height*0.1,height);
    let w = random(20, 50);
    let h = random(20, 50);
    let r = new Rectangle(x, y, w, h);
    rectangles.push(r);
  }
}

function draw() {
  background(220);
    textSize(30);
    text("点击刮刮乐，有10%概率中奖，中奖后变成彩色",width*0.4,height*0.1);
  for (let i = 0; i < rectangles.length; i++) {
    rectangles[i].show();
  }
}

function mousePressed() {
  for (let i = 0; i < rectangles.length; i++) {
    if (rectangles[i].contains(mouseX, mouseY)) {
      if (random(1) <= 0.1) {
        rectangles[i].changeColor(color(random(255), random(255), random(255)));
      } else {
        rectangles[i].changeColor(color(0));
      }
    }
  }
}
 
class Rectangle {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color(0);
  }

  show() {
    fill(this.color);
    rect(this.x, this.y, this.w, this.h);
  }

  contains(x, y) {
    return x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.h;
  }

  changeColor(c) {
    this.color = c;
  }
}


