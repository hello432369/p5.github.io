let shijin;
let videoEnded = false;
let greetings = ["张三", "李四","王五","赵六"]; // 添加一个问候语数组
let randomIndex;

function preload() 
{
   shijin = createVideo("assets/shijin.mp4");
}

function setup() 
{
   createCanvas(windowWidth, windowHeight);

   textAlign(CENTER, CENTER);
   textStyle(BOLD);


   shijin.hide(); //播放之前隐藏视频
   shijin.onended(videoEnd);

   randomIndex = floor(random(greetings.length)); // 生成一个随机索引
}

function draw() 
{
   background(255);

   textSize(450);
   fill(233);
   text("天选之人",width/2,height/2);
   textSize(210);
   fill(0);
   text("天选之人",width/2,height/2);

   image(shijin,0,0,width,height);

   if(videoEnded)
   {
      
      fill(0,255,255); 
      textSize(390);
      text(greetings[randomIndex],width/2-9,height/2-9); 

      fill(255,0,255); 
      textSize(390);
      text(greetings[randomIndex],width/2+9,height/2+9); 

      fill(0); 
      textSize(390);
      text(greetings[randomIndex],width/2,height/2); 
   }
}

function mousePressed() 
{
   shijin.play();
}

function videoEnd() 
{
   videoEnded = true;
}

function windowResized() 
{
    resizeCanvas(windowWidth, windowHeight);
}