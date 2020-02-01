var r;
var a1c,a1s,a1b;
var a2w,a2h,a2c,a2s,a2b,a2x2,a2y2,a2t;
var a3x,a3c,a3s,a3b,a3t;
var a4r; var theta=0.0;

//全屏设置画图区域
function setup() 
{
    createCanvas(windowWidth, windowHeight);  

    //draw变量
    r = int(random(4));

    //a2变量
    a2w = 18; a2h = 18; a2x2 = random(width); a2y2 = random(100, height); a2t = 0;
}

//画图动画
function draw() 
{ 
    if(r==0){ ani1();}
    if(r==1){ ani2();}
    if(r==2){ ani3();}
    if(r==3){ ani4();}
}

//重置全屏设置画图区域
function windowResized() 
{
    resizeCanvas(windowWidth, windowHeight);
}

//动画1
function ani1()
{
    colorMode(HSB,360,100,100);
    a1c = map(mouseX, 0, width, 0, 360);
    a1s = map(mouseY, 0, height, 0, 30);
    background(a1c, a1s, a1b);
    if (pmouseX == mouseX) {
        a1b-=0.15;
    }else{
        a1b=90;
    }
}

//动画2
function ani2()
{
    colorMode(HSB,360,100,100);
    background(360,0,96);

    fill(0,0,0);
    ellipse(mouseX, mouseY -a2w/2, a2w, a2h);

    noStroke();
    fill(0,0,99);
    ellipse(mouseX -a2w/5, mouseY -a2w/1.3, a2w /9, a2h /9);
    ellipse(mouseX +a2w/5, mouseY -a2w/1.3, a2w /9, a2h /9);

    textSize(12 +a2w/9);
    textAlign(CENTER);
    fill(0,0,100);   
    text(a2t ,mouseX,mouseY -a2w/9);  

    fill(360,99,99);
    ellipse(a2x2, a2y2, 10, 10);

    if (dist(mouseX,mouseY, a2x2,a2y2) < a2w +10) 
    {
        a2x2 = random(width);
        a2y2 = random(150, height);
        a2t+=1;
        a2w+=2;
        a2h+=2;
    }
    if (a2t == 9) {
        textSize(81);
        textAlign(CENTER);
        fill(0,0,0);   
        text("玩上瘾了？该学习啦！",width/2,height/2);  
    }
}

//动画3
function ani3()
{
    colorMode(HSB,360,100,100);
    background(360,0,96);
  
    a3x = map(mouseX, 0, width, 0, 6); 
    a3c = map(mouseY, 0, height, 0, 360);
    a3s = map(mouseY, 0, height, 54, 45);
    a3b = map(mouseY, 0, height, 91, 81);
    a3t = int(map(mouseY, 0, height, 0, 9));

    translate(mouseX,mouseY);
    for (var i = 0; i < 2*a3x; i++) 
    {      
        push();
            textSize(36);
            textAlign(LEFT);  
            rotate(PI*i/a3x);
            fill(a3c,a3s,a3b);   
            text(a3t ,0,0);  
        pop();     
    }  
}

//动画4
function ani4()
{
    colorMode(HSB,360,100,100,100);
    background(360,0,mouseY/3);
 
    fill(60, 100 -mouseY/3, 100)
    ellipse(width/2, 0, 520, 520) 

    //point(width/2 +cos(TAU/360 *frameCount) *60, height/2 +sin(TAU/360  *frameCount) *60);
    //point(width/2 +cos(radians(frameCount)) *60, height/2 +sin(radians(frameCount)) *60);
    // for(var x = 0; x<width; x+=20){
    //     point(x,height/2 +sin(y) *60); 
    //     y += TAU/360 *9;
    // }
    noStroke();
    theta +=TAU/360;
    let y=theta;

    fill(240,90,30)
    beginShape();
        vertex(0, height)
        for(var x = 0 -width; x<width; x+=12){
            vertex(x +6,height/6 +30 +mouseY +sin(y) *60); 
            y += TAU/360 *1.5;
        }
        vertex(width, height)
    endShape();

    fill(240,90,51)
    beginShape();
        vertex(0, height)
        for(var x = 0 -width; x<width; x+=12){
            vertex(x +6,height/6 +60 +mouseY +sin(y) *60); 
            y += TAU/360 *1;
        }
        vertex(width, height)
    endShape();

    fill(0, 0,0);
    rect(width/2,height/6 +120 +mouseY +sin(y) *60,100,30);

    fill(240,90,72)
    beginShape();
        vertex(0, height)
        for(var x = 0 -width; x<width; x+=12){
            vertex(x +6,height/6 +150 +mouseY +sin(y) *60); 
            y += TAU/360 *0.9;
        }
        vertex(width, height)
    endShape();

    fill(240,90,99)
    beginShape();
        vertex(0, height)
        for(var x = 0 -width; x<width; x+=12){
            vertex(x +6,height/6 +210 +mouseY +sin(y) *60); 
            y += TAU/360 *0.6;
        }
        vertex(width, height)
    endShape();
}
