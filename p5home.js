var r;
var a1x,a1y,a1s;
var a2w,a2h,a2c,a2s,a2b,a2x2,a2y2,a2t;
var a3x,a3c,a3s,a3b,a3t;

//全屏设置画图区域
function setup() 
{
    createCanvas(windowWidth, windowHeight);  

    //draw变量
    r = int(random(3));

    //a2变量
    a2w = 15; a2h = 15; a2x2 = random(width); a2y2 = random(100, height); a2t = 0;
}

//画图动画
function draw() 
{ 
    if(r==0){ ani1();}
    if(r==1){ ani2();}
    if(r==2){ ani3();}
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
    a1x = map(mouseX, 0, width, 0, 360)
    a1s = map(mouseY, 0, height, 54, 45)
    background(a1x, a1s, 90);
}

//动画2
function ani2()
{
    colorMode(HSB,360,100,100);
    background(360,0,96);

    textSize(21);
    textAlign(CENTER)
    fill(0,51,96);   
    text(a2t ,mouseX,mouseY);  

    fill(0,0,0)
    ellipse(mouseX, mouseY, a2w, a2h)

    fill(360,99,99)
    ellipse(a2x2, a2y2, 10, 10)

    if (dist(mouseX,mouseY, a2x2,a2y2) < a2w +10) 
    {
        a2x2 = random(width);
        a2y2 = random(150, height);
        a2t+=1;
        a2w+=2;
        a2h+=2;
    }
    if (a2t == 12) {
        textSize(81);
        textAlign(CENTER);
        fill(0,0,0);   
        text("玩上瘾了!学习啊",width/2,height/2);  
    }
}

//动画3
function ani3()
{
    colorMode(HSB,360,100,100);
    background(360,0,96);
  
    a3x = map(mouseX, 0, width, 0, 6); 
    a3c = map(mouseY, 0, height, 0, 360)
    a3s = map(mouseY, 0, height, 54, 45)
    a3b = map(mouseY, 0, height, 91, 81)
    a3t = int(map(mouseY, 0, height, 0, 9))

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
