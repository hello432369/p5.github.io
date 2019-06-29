//设置UI参数
var settings = {
    c_bg: '#000000', //背景色
    c_r:255 *0.98,
    c_g:255 *0.70,
    c_b:255 *0.00,
}

//定制UI界面
var bg,r,g,b;

window.onload = function () {
    gui = new dat.GUI();    //声明GUI

    var f1 = gui.addFolder('Folder'); //组件名称
    f1.open(); //折叠

    bg = f1.addColor(settings, "c_bg");  //添加组件参数
    bg.onChange(draw);  //添加组件

    r = f1.add(settings, 'c_r',0,255);
    r.onChange(draw);

    g = f1.add(settings, 'c_g',0,255);
    g.onChange(draw);

    b = f1.add(settings, 'c_b',0,255);
    b.onChange(draw);

};

var m;
//全屏设置画图区域
function setup() {
    createCanvas(windowWidth, windowHeight);
    m =0;
}

//画图动画
function draw() {
    background(settings.c_bg);

    for(var i=0; i<25; i++)  
    {
        strokeWeight(i);
        stroke(settings.c_r,settings.c_g, settings.c_b, 255 *0.04);
        fill(settings.c_r,settings.c_g, settings.c_b, 255 *0.1);
        ellipse(windowWidth *0.5, windowHeight *0.5, windowWidth *0.3, windowWidth *0.3);
    }

    noStroke();
    fill(settings.c_bg);
    ellipse(windowWidth *0.18 +m,windowHeight *0.5,windowWidth *0.3,windowWidth *0.3);
    if(m > windowWidth *0.7)
    {
        m=0;
        m++;
    }
    else
    {
        m+=1;
    }

    // fill(255);
    // textSize(32);
    // text('hi347.杂货铺', windowWidth *0.1, windowHeight *0.1);
}

重置全屏设置画图区域
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}