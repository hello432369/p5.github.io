let playerChoice="请出拳";
let computerChoice="出拳啊！";
let result;
let a=0,b=0;
function setup() {
createCanvas(windowWidth, windowHeight);

  textAlign(CENTER, CENTER);
  textSize(32);
}

function draw() {
  background(220);
  text("你 "+a+" : "+b+" 电脑", width / 2, height / 2 - 250);
  text("1=石头、2=剪子，3=1布", width / 2, height / 2 - 50);
  text("你出的是：" + playerChoice, width / 2, height / 2);
  text("电脑出的是：" + computerChoice, width / 2, height / 2 + 50);
  text(result, width / 2, height / 2 + 100);
}

function keyPressed() {
  if (key === "1") {
    playerChoice = "石头";
    computerChoice = computerPlay();
    result = getResult(playerChoice, computerChoice);
  } else if (key === "2") {
    playerChoice = "剪子";
    computerChoice = computerPlay();
    result = getResult(playerChoice, computerChoice);
  } else if (key === "3") {
    playerChoice = "布";
    computerChoice = computerPlay();
    result = getResult(playerChoice, computerChoice);
  }
}

function computerPlay() {
  const choices = ["石头", "剪子", "布"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "平局";
  } else if (
    (playerChoice === "石头" && computerChoice === "剪子") ||
    (playerChoice === "剪子" && computerChoice === "布") ||
    (playerChoice === "布" && computerChoice === "石头")
  ) {
      a++;
    return "你赢了";
  } else {
      b++;
    return "电脑赢了";
  }
}
 