let 阿里字体, 姓名字号, 温馨提示, 背景音乐, 姓数, 姓, 姓氏;
let soundx, soundid;

function preload() {
    阿里字体 = loadFont("text/Alibaba-PuHuiTi-Regular.otf");    //免费开源中文字体
    姓名字号 = loadStrings("text/姓名字号.txt");    //姓=随祖上,名=随父母,字=随自己,号=随社会
    温馨提示 = loadStrings("text/温馨提示.txt");    //游戏引导
    背景音乐 = loadSound("audio/xiaohuangrenshiren.mp3");
}
function keyPressed() {
    if (背景音乐.isPlaying()) { //声音开关 必要!!!否则报错
        背景音乐.pause();
    } else {
        背景音乐.play();
    }
}

function setup() {
    //系统
    createCanvas(windowWidth, windowHeight, WEBGL);
    colorMode(HSB, 360, 108, 108, 108);
    noCursor();

    //音频
    背景音乐.loop();

    //弹幕
    soundx = width;
    soundid = int(random(3));

    //玩家
    姓名();

    //背景
}

function draw() {
    background(0, 0, 10);

    玩家();
    ui();
    弹幕();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}


function 姓名() {
    textFont(阿里字体);
    姓数 = int(random(1, 3));
    姓 = int(random(姓名字号[姓数].length));
    if (姓数 == 2) {
        姓氏 = 姓名字号[姓数][姓] + 姓名字号[姓数][姓 + 1];
    }
    else {
        姓氏 = 姓名字号[姓数][姓];
    }
}

function 玩家() {
    push();
    translate(-width * 0.5, -height * 0.5);
    translate(mouseX, mouseY);

    noStroke();
    fill(255, 0, 30);
    ellipse(0, 3, 36, 6);

    stroke(0, 0, 108);
    strokeWeight(3);
    fill(255);
    textSize(height * 0.03);
    textAlign(CENTER);
    text(姓氏, 0, 0);
    pop();
}

function ui() {
    push();
    noStroke();
    fill(0, 123);
    translate(-width * 0.5, height * 0.46);
    rect(0, 0, width * 1.1, height * 0.04);
    pop();
}

function 弹幕() {
    soundx--;
    print(温馨提示[soundid].length)
    if (soundx < -温馨提示[soundid].length) {
        soundx = width * 1.05;
        soundid = int(random(3));
    }
    push();
    translate(-width * 0.5, -height * 0.5);
    translate(soundx, height * 0.99);
    textSize(24)
    text(温馨提示[soundid], 0, 0);
    pop();
}