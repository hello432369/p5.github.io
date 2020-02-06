var ss;
var ccs = [];
var ggs = [];

//全屏设置画图区域
function setup() 
{  
    createCanvas(windowWidth, windowHeight);     

    ss = new SceneManager();

    ss.addScene ( s01 ); //启动页
    ss.addScene ( s02 ); //关卡目录
    ss.addScene ( s03 ); //关于我们

    ss.addScene ( s11 ); //关卡1-1

    ss.showScene( s01 ); //从第一个场景开始
}

//画图动画
function draw() 
{ 
    ss.draw();
}

//重置全屏设置画图区域
function windowResized() 
{
    resizeCanvas(windowWidth, windowHeight);
}

//场景1
//启动页
function s01()
{
    this.setup = function() 
    {
        colorMode(HSB,360,100,100);

        ccs[0] = new cc(0,"开始划船",width/2,height/2,2);
        ccs[1] = new cc(0,"关于我们",width/2,height/2 +60,3);
    }

    this.draw = function() 
    {            
        ccs[0].backani();
        ccs[0].menu();
        ccs[1].menu();
        ccs[0].number();
    }
}

//场景2
//关卡页
function s02()
{

    this.setup = function() 
    {
        colorMode(HSB,360,100,100);

        ccs[2] = new cc(0,"返回首页",width/12,height/12,1);
        ccs[3] = new cc(0,"触礁沉船",width/2,height/2 +210,11);
    }

    this.draw = function() 
    { 
        ccs[2].backani();
        ccs[2].menu(); 
        ccs[3].menu(); 
        ccs[2].number();        
    }
    
}

//场景3
//关于我们
function s03()
{
    this.setup = function() 
    {
        colorMode(HSB,360,100,100,1);

        ccs[2] = new cc(0,"返回首页",width/12,height/12,1);
    }

    this.draw = function() 
    {
        background(0,0,0);

        ccs[2].backani();
        ccs[2].menu();
        ccs[2].about();
        ccs[2].number();
    }
}

//场景4
//关卡1-1
function s11()
{
    this.setup = function() 
    {
        colorMode(HSB,360,100,100,1);
        ggs[0] = new gg(); 
    }

    this.draw = function() 
    {
        ggs[0].sea();
        ggs[0].boss();
        ggs[0].play();
        ggs[0].how();
        ggs[0].over();
        ggs[0].score();
    }
}

class cc
{
    constructor(s3rw1,s3t,s3x,s3y,s3s)
    {
        //菜单参数
        this.s3rw1 = s3rw1; //粉色倒计时
        this.s3t = s3t;     //按钮内容
        this.s3x = s3x;     //按钮x坐标
        this.s3y = s3y;     //按钮y坐标
        this.s3s = s3s;     //场景序号

        //动画
        this.theta=0.0
        this.m = 0;

        //关于我们
        this.s3tx = width/2;
        this.s3ty = height/3;
    }

     //按钮
    menu() 
    {
        //菜单按钮1
        strokeWeight(1);
        noStroke();
        fill(0, 51, 96);
        rectMode(CENTER);
        rect(this.s3x,this.s3y,this.s3rw1,40);

        fill(0, 3, 99);
        textAlign(CENTER);
        textSize(30);
        text(this.s3t, this.s3x,this.s3y+10);

        stroke(0, 3, 99);
        noFill();
        rectMode(CENTER);
        rect(this.s3x,this.s3y,150,40);
        
        if (this.s3x -75 <= mouseX && mouseX <= this.s3x +75 && this.s3y -20 <= mouseY && mouseY <= this.s3y+20)  
        {
            noStroke();
            fill(0, 51, 96);
            ellipse(this.s3x +75 +30, this.s3y, 20, 20);

            this.s3rw1++;
            if (this.s3rw1 == 150)  
            {
                if (this.s3s == 1) {
                    ss.showScene( s01 ); 
                } 
                if (this.s3s == 2) {
                    ss.showScene( s02 ); 
                } 
                if (this.s3s == 3) {
                    ss.showScene( s03 ); 
                } 
                if (this.s3s == 11) {
                    ss.showScene( s11 ); 
                }                      
            }
        }
        else
        {
            this.s3rw1=0;
        }
        
    }

    //鼠标数字
    number() 
    {
        //class内部的变量要有this.
        this.a3x = map(mouseX, 0, width, 0, 6); 
        this.a3c = map(mouseY, 0, height, 0, 360);
        this.a3s = map(mouseY, 0, height, 54, 45);
        this.a3b = map(mouseY, 0, height, 91, 81);
        this.a3t = int(map(mouseY, 0, height, 0, 9));

        push();
            translate(mouseX,mouseY);
            for (var i = 0; i < 2*this.a3x; i++) 
            {      
                push();
                    textSize(36);
                    textAlign(LEFT);  
                    rotate(PI *i /this.a3x);
                    noStroke();
                    fill(this.a3c,this.a3s,this.a3b);   
                    text(this.a3t ,0,0);  
                pop();     
            } 
        pop(); 
    }

    //背景动画
    backani() 
    { 
        background(0,0,0);

        //月亮
        for(var i = 1; i <= 25; i++){   
            fill(60, 100, 81,0.7);
            stroke(60, 100, 81,0.1); 
            strokeWeight(i);      //月亮轮廓发光算法 = 通过叠加轮廓实现 
            ellipse(width/2,0,width/2,width/2);
        }
        noStroke();
        fill(0);
        ellipse(this.m,0,width /2,width/2);
        this.m+=0.3;  


        noStroke();
        this.theta +=TAU/360;
        let y=this.theta;

        fill(240,90,30);
        beginShape();
            vertex(0, height);
            for(var x = 0 -width; x<width; x+=12)
            {
                vertex(x +6,height/2 +150 +sin(y) *60); 
                y += TAU/360 *1.2;
            }
            vertex(width, height);
        endShape();

        fill(240,90,51);
        beginShape();
            vertex(0, height);
            for(var x = 0 -width; x<width; x+=12)
            {
                vertex(x +6,height/2 +180  +sin(y) *60); 
                y += TAU/360 *0.8;
            }
            vertex(width, height);
        endShape();

        fill(240,90,72);
        beginShape();
            vertex(0, height);
            for(var x = 0 -width; x<width; x+=12)
            {
                vertex(x +6,height/2 +190 +sin(y) *60); 
                y += TAU/360 *0.6;
            }
            vertex(width, height);
        endShape();

        fill(240,90,99);
        beginShape();
            vertex(0, height);
            for(var x = 0 -width; x<width; x+=12)
            {
                vertex(x +6,height/2 +270  +sin(y) *30); 
                y += TAU/360 *0.3;
            }
            vertex(width, height);
        endShape();
    }

    //关于我们
    about() 
    {

        fill(0,0,99);
        textSize(30);
        text("作者：能吃两个西瓜", this.s3tx,this.s3ty +150);
        text("工具：p5.js", this.s3tx,this.s3ty +60 +180);
    }

}

class gg
{
    constructor()
    {
        //sea
        this.xx =random(width/2 -30,width/2 +30);
        this.x = 0;
        this.y = 0;
        this.yy =-30;

        //boss
        this.bx = random(width);
        this.bh = random(360);
        this.bw = random(90,width*3/4);
        this.by = -this.bw;

        this.bx1 = random(width);
        this.bh1 = random(360);
        this.bw1 = random(60,width/2);
        this.by1 = -this.bw1;

        this.bx2 = random(width);
        this.bw2 = random(30,width/6);
        this.by2 = -this.bw2;


        //how
        this.hx = width;
        this.str = [];
        this.str[0] = "夜深了，小船随时可能触礁沉海，请使用鼠标为桨，生存到日出";
        this.str[1] = "海里的深色小鱼不会撞到小船";
        this.str[2] = "暗礁的颜色亮度跟小船一样很容易识别";
        this.hr = 0;

        //得分
        this.scorex = 0;
    }

    sea()
    {  
        background(240,90,15,0.6);  //深海
        
        //太阳鱼
        stroke(60,51,30,0.6);
        fill(0,0,30,0.6);
        strokeWeight(sin(TAU/360 *this.x) *6);
        ellipse(this.xx +cos(TAU/360 * this.x) *51, this.yy, 9, 9);      
        this.x += 0.6;
        this.yy += 0.72;
        if (this.yy  >=height) 
        {
            this.yy = 0;
        } 

        //水星鱼
        stroke(240,51,30,0.6);
        strokeWeight(sin(TAU/360 *this.x) *9);
        ellipse(this.xx +cos(TAU/360 * this.x) *120, this.y, 3, 3);      
        this.x += 0.6;
        this.y += 0.6;
        if (this.y  >=height) 
        {
            this.y = 0;
        } 
    }

    play()
    {
        noStroke();
        fill(0,30,30);
        rectMode(CENTER);
        rect(mouseX, mouseY,15,30);
    }

    boss()
    { 
        //boss1
        noStroke();
        fill(0,0,60);
        ellipse(this.bx, this.by,this.bw,this.bw);
        fill(0,0,21);
        textAlign(CENTER);
        textSize(this.bw/3);
        text("冰川", this.bx, this.by);
        this.by +=0.6;
        if (this.by > height +this.bw) {
            this.by = -this.bw;
            this.bx = random(width);
            this.bh = random(360);
            this.scorex++;
        }

        //boos2
        noStroke();
        fill(this.bh1,30,30);
        ellipse(this.bx1, this.by1,this.bw1,this.bw1);
        fill(0,0,60);
        textAlign(CENTER);
        textSize(this.bw1/3);
        text("暗礁", this.bx1, this.by1);
        this.by1 += 1.5;
        if (this.by1 > height +this.bw1) {
            this.by1 = -this.bw1;
            this.bx1 = random(width);
            this.bh1 = random(360);
            this.scorex++;
        }

        //boos3
        noStroke();
        fill(0,0,15);
        ellipse(this.bx2, this.by2,this.bw2,this.bw2);
        fill(0,0,60);
        textAlign(CENTER);
        textSize(this.bw2/3);
        text("未知", this.bx2, this.by2);
        this.by2 += 4.2;
        if (this.by2 > height +this.bw2) {
            this.by2 = -this.bw2;
            this.bx2 = random(width);
            this.scorex++;
        }
    }
        
    how()
    {
        noStroke();
        fill(0,0,0,0.5);
        rectMode(CENTER)
        rect(width/2,height -10,width,21);

        noStroke();
        strokeWeight(1);
        fill(0,0,99);
        textSize(15);
        text(this.str[this.hr], this.hx,height -3);
        this.hx -=1;
        this.htw = textWidth(this.str[this.hr]);
        if (this.hx < - this.htw) {
           this.hx = width;
           this.hr = int(random(3));
        }
    }

    over()
    {
        if (dist(mouseX,mouseY,this.bx,this.by) < this.bw/2 ||
            dist(mouseX,mouseY,this.bx1,this.by1) < this.bw1/2 ||
            dist(mouseX,mouseY,this.bx2,this.by2) < this.bw2/2
            ) 
        {
            this.by =0;
            this.by1 = 0;
            this.by2 = 0;
            this.scorex = 0;
            ss.showScene( s02 );
            this.scorex=0;
        }
    }

    score()
    {
        noStroke();
        fill(0,0,90);
        text("躲避："+this.scorex + " 次", width/12,height/12);
    }
}
