let intext,insize,incolor,inclear,inlink;
function ui()
{
  intext = createInput("好");
  intext.position(0,0);
  
  insize = createSlider(1, 120, 15);
  insize.position(0,30);
  
  incolor = createColorPicker('#ffffff');
  incolor.position(0,60);
  
  inlink = createA('https://emojixd.com/group/smileys-emotion', 'emoji符号','_blank');
  inlink.position(0,90);
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
  ui();
  noStroke();
}

function draw() {

  if(mouseIsPressed)
  {
    push();
    translate(mouseX,mouseY);
    fill(incolor.color());
    textSize(insize.value());
    text(intext.value(),0,0);
    pop();
  }
}

function windowResized()
{
  resizeCanvas(windowWidth,windowHeight);
}
