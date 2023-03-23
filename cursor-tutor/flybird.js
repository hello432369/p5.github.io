
let bird;
let pipes = [];
let score = 0;

// Set up the canvas
function setup() {
  createCanvas(400, 600);
  bird = new Bird();
  pipes.push(new Pipe());
}

// Draw the game
function draw() {
  background(0);

  // Update and show the bird
  bird.update();
  bird.show();

  // Add new pipes every 100 frames
  if (frameCount % 100 == 0) {
    pipes.push(new Pipe());
  }

  // Update and show the pipes
  for (let i = pipes.length - 1; i >= 0; i--) {
    pipes[i].update();

    // If the bird hits a pipe, end the game
    if (pipes[i].hits(bird)) {
      console.log("GAME OVER");
      noLoop();
    }

    // If the bird passes a pipe, increase the score
    if (pipes[i].passes(bird)) {
      score++;
    }

    pipes[i].show();

    // Remove pipes that are off the screen
    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  }

  // Show the score
  textSize(32);
  fill(255);
  text(score, 10, 50);
}

// Make the bird jump when the spacebar is pressed
function keyPressed() {
  if (key == ' ') {
    bird.up();
  }
}

// Define the Bird class
class Bird {
  constructor() {
    this.y = height / 2;
    this.x = 64;
    this.gravity = 0.6;
    this.lift = -15;
    this.velocity = 0;
  }

  // Update the bird's position and velocity
  update() {
    this.velocity += this.gravity;
    this.velocity *= 0.9;
    this.y += this.velocity;

    // Keep the bird on the screen
    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  }

  // Make the bird jump
  up() {
    this.velocity += this.lift;
  }

  // Show the bird on the screen
  show() {
    fill(255);
    ellipse(this.x, this.y, 32, 32);
  }
}

// Define the Pipe class
class Pipe {
  constructor() {
    this.spacing = 125;
    this.top = random(height / 6, (3 / 4) * height);
    this.bottom = height - (this.top + this.spacing);
    this.x = width;
    this.w = 80;
    this.speed = 6;
  }

  // Update the pipe's position
  update() {
    this.x -= this.speed;
  }

  // Show the pipe on the screen
  show() {
    fill(0, 255, 0);
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height - this.bottom, this.w, this.bottom);
  }

  // Check if the bird hits the pipe
  hits(bird) {
    if (bird.y < this.top || bird.y > height - this.bottom) {
      if (bird.x > this.x && bird.x < this.x + this.w) {
        return true;
      }
    }
    return false;
  }

  // Check if the bird passes the pipe
  passes(bird) {
    if (bird.x > this.x && bird.x < this.x + this.w) {
      if (bird.y > this.top && bird.y < height - this.bottom) {
        return true;
      }
    }
    return false;
  }

  // Check if the pipe is off the screen
  offscreen() {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  }
}
