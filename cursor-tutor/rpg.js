let playerX, playerY;
let mapWidth = 2000;
let mapHeight = 2000;
let grassCount = 100;
let obstacleCount = 50;
let grass = [];
let obstacles = [];

let mySound;
let f;

function preload() {
  mySound = loadSound("assets/bgm.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  f = loadFont("Alibaba-PuHuiTi-Medium.otf");
  playerX = width / 2;
  playerY = height / 2;
  rectMode(CENTER);
  textAlign(CENTER);
  noCursor();
  for (let i = 0; i < grassCount; i++) {
    grass.push(createVector(random(mapWidth), random(mapHeight),random(20)));
  }
  for (let i = 0; i < obstacleCount; i++) {
    obstacles.push(createVector(random(mapWidth), random(mapHeight)));
  }

  mySound.setLoop(true);
  mySound.play();
}

function draw() {
  background(220);
  translate(width / 2 - playerX, height / 2 - playerY);

  fill(255);
  rect(mapWidth/2, mapHeight/2, mapWidth, mapHeight);

  // stroke(0);
  // fill(0, 255, 0);
  fill(0,255,0);
  for (let i = 0; i < grass.length; i++) {
    // ellipse(grass[i].x, grass[i].y, 10, 10);
    textSize(grass[i].z);
    text("草",grass[i].x, grass[i].y);
  }
  
  fill(0);
  noStroke();
  for (let i = 0; i < obstacles.length; i++) {
    // noFill();
    // rect(obstacles[i].x, obstacles[i].y, 20, 20);
    textSize(20);
    text("石",obstacles[i].x, obstacles[i].y);
  }
  
  fill(255,0,0);
  // ellipse(playerX,playerY,10,10);
  textSize(15);
  text("我",playerX,playerY);
  
  
  if (keyIsDown(LEFT_ARROW)) {
    if (playerX > 0) {
      playerX -= 5;
    }
  }
  if (keyIsDown(RIGHT_ARROW)) {
    if (playerX < mapWidth) {
      playerX += 5;
    }
  }
  if (keyIsDown(UP_ARROW)) {
    if (playerY > 0) {
      playerY -= 5;
    }
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (playerY < mapHeight) {
      playerY += 5;
    }
  }
  
  for (let i = 0; i < obstacles.length; i++) {
    if (dist(playerX, playerY, obstacles[i].x, obstacles[i].y) < 15) {
      if (keyIsDown(LEFT_ARROW)) {
        playerX += 5;
      }
      if (keyIsDown(RIGHT_ARROW)) {
        playerX -= 5;
      }
      if (keyIsDown(UP_ARROW)) {
        playerY += 5;
      }
      if (keyIsDown(DOWN_ARROW)) {
        playerY -= 5;
      }
    }
  }
}
