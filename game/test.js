var ss;

var song;

function preload() {
  soundFormats('ogg', 'mp3');
  song = loadSound('data/sea.mp3');
}

//全屏设置画图区域
function setup() 
{  
    createCanvas(windowWidth, windowHeight); 
    colorMode(HSB,360,100,100);    

    ss = new SceneManager();
    ss.addScene ( s01 ); //启动页
    ss.addScene ( s02 ); //关卡目录
    ss.addScene ( s03 ); //关于我们
    ss.addScene ( s11 ); //关卡1
    ss.showNextScene(); //从第一个场景开始
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
    var a4r; var theta=0.0;
    var s1tx,s1ty,s1rw1,s1rw2,s1about;

    this.setup = function() 
    {
        song.play();

        s1tx = width/2;
        s1ty = height/2;
        s1rw1 = 0;
        s1rw2 = 0;
        s1about = 60;
    }

    this.draw = function() 
    {            
        this.backani();
        this.menu();
    }

    this.backani = function() 
    { 
        background(0,0,0);

        noStroke();
        fill(60, 100, 81);
        ellipse(width/2, 0, 520, 520);          

        noStroke();
        theta +=TAU/360;
        let y=theta;

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

    this.menu = function() 
    { 
        //菜单按钮1
        fill(0, 3, 99);
        textAlign(CENTER);
        textSize(30);
        text("开始划船", s1tx,s1ty +10);

        stroke(0, 3, 99);
        noFill();
        rectMode(CENTER);
        rect(width/2,height/2,150,40);

        noStroke();
        fill(0, 0, 99);
        rectMode(CENTER);
        rect(width/2,height/2,s1rw1,40);
        if (width/2 -75 <= mouseX && mouseX <= width/2 +75 &&
            height/2 -20 <= mouseY && mouseY <= height/2 +20)  
        {
            noStroke();
            fill(0, 51, 99);
            ellipse(width/2 -75 -30, height/2, 20, 20);
            s1rw1++;
            if (s1rw1 == 150)  
            {
                this.sceneManager.showScene( s02 );
            }
        }
        else
        {
            s1rw1=0;
        }

        //菜单按钮2
        fill(0, 3, 99);
        textAlign(CENTER);
        textSize(30);
        text("关于我们", s1tx,s1ty +10 +s1about);

        stroke(0, 3, 99);
        noFill();
        rectMode(CENTER);
        rect(width/2,height/2 +s1about,150,40);

        noStroke();
        fill(0, 0, 99);
        rectMode(CENTER);
        rect(width/2,height/2 +s1about,s1rw2,40);
        if (width/2 -75 <= mouseX && mouseX <= width/2 +75 &&
            height/2 +s1about -20 <= mouseY && mouseY <= height/2 +s1about +20)  
        {
            noStroke();
            fill(0, 51, 99);
            ellipse(width/2 -75 -30, height/2 +s1about, 20, 20);
            s1rw2++;
            if (s1rw2 == 150)  
            {
                this.sceneManager.showScene( s03 );
            }
        }
        else
        {
            s1rw2=0;
        }
    }

}

//场景2
//关卡页
function s02()
{
    this.setup = function() 
    {

    }

    this.draw = function() 
    {
        background(120,51,99);
        rect(width/2, height/2, 60,60);

        if (width* 1/3 <= mouseX && mouseX <= width* 2/3) 
        {
            this.sceneManager.showScene( s3 );
        }
    }

    // this.mousePressed = function() 
    // {
    //     this.sceneManager.showScene( s3 );
    // }
}

//场景3
//关于我们
function s03()
{
    this.setup = function() 
    {

    }

    this.draw = function() 
    {
        background(240,51,99);
        ellipse(width/2, height/2, 60,60);

        if (width* 2/3 <= mouseX && mouseX <= width* 3/3) 
        {
            this.sceneManager.showScene( s1 );
        }
    }

    // this.mousePressed = function() 
    // {
    //     this.sceneManager.showScene( s1 );
    // }
}

//场景4
//关于我们
function s11()
{
    this.setup = function() 
    {

    }

    this.draw = function() 
    {
        background(240,51,99);
        ellipse(width/2, height/2, 60,60);

        if (width* 2/3 <= mouseX && mouseX <= width* 3/3) 
        {
            this.sceneManager.showScene( s1 );
        }
    }

    // this.mousePressed = function() 
    // {
    //     this.sceneManager.showScene( s1 );
    // }
}

