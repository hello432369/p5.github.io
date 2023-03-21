let rectangles = [];
let clickedWhiteRectangles = 0;

function setup() {
createCanvas(windowWidth, windowHeight);
 
}

function draw() {
  background(220);
  for (let i = 0; i < rectangles.length; i++) {
    rectangles[i].display();
  }
  fill(0);
  textSize(20);
  text("割韭菜：" + clickedWhiteRectangles, width/2, 30);
}

function mouseClicked() {
  let clickedRectangle = null;
  for (let i = rectangles.length - 1; i >= 0; i--) {
    if (rectangles[i].contains(mouseX, mouseY)) {
      clickedRectangle = rectangles[i];
      break;
    }
  }
  if (clickedRectangle) {
    if (clickedRectangle.color === 'red') {
      clickedRectangle.color = 'yellow';
      clickedRectangle.stage = '种幼苗！';
      setTimeout(() => {
        clickedRectangle.color = 'green';
        clickedRectangle.stage = '发芽啦！';
      }, 3000);
      setTimeout(() => {
        clickedRectangle.color = 'purple';
        clickedRectangle.stage = '长大啦！';
      }, 6000);
      setTimeout(() => {
        clickedRectangle.color = 'white';
        clickedRectangle.stage = '成熟啦！';
      }, 9000);
    } else if (clickedRectangle.color === 'white') {
      clickedWhiteRectangles++;
      rectangles.splice(rectangles.indexOf(clickedRectangle), 1);
    }
  } else {
    rectangles.push(new Rectangle(mouseX, mouseY));
  }
}

class Rectangle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 50;
    this.color = 'red';
    this.stage = '播种子！';
  }

  contains(x, y) {
    return x > this.x && x < this.x + this.width && y > this.y && y < this.y + this.height;
  }

  display() {
    fill(this.color);
    rect(this.x, this.y, this.width, this.height);

    fill(0);
    textSize(12);
    textAlign(CENTER, CENTER);
    text(this.stage, this.x + this.width / 2, this.y + this.height / 2);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
