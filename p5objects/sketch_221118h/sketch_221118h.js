let intext,insize,incolor,inclear;
function ui()
{
  intext = createInput("好");
  intext.position(0,0);
  
  insize = createSlider(1, 120, 15);
  insize.position(0,30);
  
  incolor = createColorPicker('#ffffff');
  incolor.position(0,60);
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
  ui();
}

function draw() {

  if(mouseIsPressed)
  {
    push();
    translate(mouseX,mouseY)
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
