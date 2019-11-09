//鑷姩淇濆瓨涓庡厜鏍囩粨鍚�-----------------------------------------------------start
var editor = document.getElementById("t1");

// 绂诲紑鏈〉涔嬪墠淇濆瓨鏁版嵁-----------------------------------------------------start
window.onbeforeunload = function () {
    localStorage.setItem('editor-text', editor.value);
};

//鍏夋爣锛氳幏鍙栧厜鏍囦綅缃�-----------------------------------------------------start
var lastInput = null;
window.onload = function () {
    editor.value = localStorage.getItem('editor-text');

    textares = document.getElementsByTagName("textarea");
    for (var i = 0; i < textares.length; i++) {
        textares[i].onfocus = function () {
            lastInput = this;
        }
    }
}

// 娓呯┖鍔熻兘-----------------------------------------------------start
document.getElementById("clear").onclick = function () {
    editor.value = "";
    if (!window.localStorage) {
        UserData.remove('editor-text');
    } else {
        localStorage.removeItem('editor-text');
    }
};


//鐐瑰嚮鎸夐挳锛氬鍒舵枃鏈t1鍐呭-----------------------------------------------------start
function copy() {
    var text = document.getElementById("t1");
    text.select();
    document.execCommand("copy");
    alert("复制成功");
}

//鐐瑰嚮鎸夐挳锛氬鍔犲唴瀹�-----------------------------------------------------start
function AddContent(str) {
    if (lastInput) {
        lastInput.focus();
    }
    if (typeof document.selection != "undefined") {
        document.selection.createRange().text = str;
    }
    else {
        lastInput.value = lastInput.value.substr(0, lastInput.selectionStart) + str + lastInput.value.substring(lastInput.selectionStart, lastInput.value.length);
    }
}

//鎸夐挳锛歱5杞琱5-----------------------------------------------------start
function p52h5() {
    var s = document.getElementById("t1").value;
    s = s.replace(/\b(void|size|float|int|boolean|char|String|PImage|PFont|PShape|pushMatrix()|popMatrix()|mousePressed)\b/g, function ($0, $1) {
        return {
            "void": "function",
            "size": "createCanvas",

            "float": "var",
            "int": "var",
            "boolean": "var",
            "char": "var",
            "String": "var",
            "PImage": "var",
            "PFont": "var",
            "PShape": "var",

            "pushMatrix()": "push()",
            "popMatrix()": "pop()",

            "mousePressed": "mouseIsPressed"

        }[$1];

    });

    document.getElementById("t2").value = s;
    $('#myModal').on('okHide', function (e) { console.log('okHide') })
    $('#myModal').on('okHidden', function (e) { console.log('okHidden') })
    $('#myModal').on('cancelHide', function (e) { console.log('cancelHide') })
    $('#myModal').on('cancelHidden', function (e) { console.log('cancelHidden') })
}

//鎸夐挳锛氬鍒秔5js-----------------------------------------------------start
function copyp5js() {
    var text = document.getElementById("t2");
    text.select();
    document.execCommand("copy");
    alert("复制成功");
}

//杩愯,鍋滄鎸夐挳-----------------------------------------------------start
var Pjs = new Array(1);

function stop(num) {
    if (Pjs[num]) Pjs[num].exit();
}

function run(num) {
    stop(num);
    var canvas = document.getElementById('canvas' + String(num));
    var code = document.getElementsByName('t1')[0].value;
    try {
        Pjs[num] = new Processing(canvas, code);
    } catch (e) {
        alert(e);
    }
}


//涓嶅叏浠ｇ爜-----------------------------------------------------start
$(function () {
    $.fn.atwho.debug = true
    var p5json = [
        "()", ",", ".", "/* */ ", "/** */ ", "// ", "; ", "= ", "[] ", "{}", "catch", "class", "draw();", "exit();",
        "extends", "FALSE", "final", "implements", "import", "loop();", "new", "noLoop();", "null", "popStyle();", "private",
        "public", "pushStyle();", "redraw();", "return", "setup();", "static", "super", "this", "thread();", "TRUE", "try",
        "void", "cursor();", "delay();", "displayDensity();", "focused", "frameCount", "frameRate();", "frameRate",
        "fullScreen();", "height", "noCursor();", "noSmooth();", "pixelDensity();", "pixelHeight", "pixelWidth", "settings();",
        "size();", "smooth();", "width", "boolean", "byte", "char", "color", "double", "float", "int", "long",
        "Array", "ArrayList", "FloatDict", "FloatList", "HashMap", "IntDict", "IntList", "JSONArray", "JSONObject",
        "Object", "String", "StringDict", "StringList", "Table", "TableRow", "XML",
        "binary();", "boolean();", "byte();", "char();", "float();", "hex();", "int();", "str();", "unbinary();", "unhex();",
        "join();", "match();", "matchAll();", "nf();", "nfc();", "nfp();", "nfs();", "split();", "splitTokens();", "trim();",
        "append();", "arrayCopy();", "concat();", "expand();", "reverse();", "shorten();", "sort();", "splice();", "subset();",
        "!=", "<", "<=", "==", "> ", ">= ", "for", "while", "?: ", "break", "case", "continue", "default", "else",
        "if", "switch", "!", "&&", "||",

        "createShape();", "loadShape();", "PShape", "arc();", "ellipse();", "line();", "point();", "quad();", "rect();", "triangle();",
        "bezier();", "bezierDetail();", "bezierPoint();", "bezierTangent();", "curve();", "curveDetail();", "curvePoint();",
        "curveTangent();", "curveTightness();", "box();", "sphere();", "sphereDetail();", "ellipseMode();", "rectMode();",
        "strokeCap();", "strokeJoin();", "strokeWeight();", "beginContour();", "beginShape();", "bezierVertex();",
        "curveVertex();", "endContour();", "endShape();", "quadraticVertex();", "vertex();", "shape();", "shapeMode();",
        "mouseButton", "mouseClicked();", "mouseDragged();", "mouseMoved();", "mousePressed();", "mousePressed", "mouseReleased();",
        "mouseWheel();", "mouseX", "mouseY", "pmouseX", "pmouseY", "key", "keyCode", "keyPressed();", "keyPressed",
        "keyReleased();", "keyTyped();", "BufferedReader", "createInput();", "createReader();", "launch();", "loadBytes();",
        "loadJSONArray();", "loadJSONObject();", "loadStrings();", "loadTable();", "loadXML();", "parseJSONArray();",
        "parseJSONObject();", "parseXML();", "selectFolder();", "selectInput();", "day();", "hour();", "millis();", "minute();",
        "month();", "second();", "year();", "print();", "printArray();", "println();", "save();", "saveFrame();",
        "beginRaw();", "beginRecord();", "createOutput();", "createWriter();", "endRaw();", "endRecord();", "PrintWriter",
        "saveBytes();", "saveJSONArray();", "saveJSONObject();", "saveStream();", "saveStrings();", "saveTable();", "saveXML();",
        "selectOutput();", "applyMatrix();", "popMatrix();", "printMatrix();", "pushMatrix();", "resetMatrix();", "rotate();",
        "rotateX();", "rotateY();", "rotateZ();", "scale();", "shearX();", "shearY();", "translate();", "ambientLight();",
        "directionalLight();", "lightFalloff();", "lights();", "lightSpecular();", "noLights();", "normal();", "pointLight();",
        "spotLight();", "beginCamera();", "camera();", "endCamera();", "frustum();", "ortho();", "perspective();",
        "printCamera();", "printProjection();", "modelX();", "modelY();", "modelZ();", "screenX();", "screenY();", "screenZ();",
        "ambient();", "emissive();", "shininess();", "specular();",

        "background();", "clear();", "colorMode();", "fill();", "noFill();", "noStroke();", "stroke();", "alpha();", "blue();",
        "brightness();", "color();", "green();", "hue();", "lerpColor();", "red();", "saturation();", "createImage();",
        "PImage", "image();", "imageMode();", "loadImage();", "noTint();", "requestImage();", "tint();", "texture();",
        "textureMode();", "textureWrap();", "blend();", "copy();", "filter();", "get();", "loadPixels();", "pixels[]",
        "set();", "updatePixels();", "blendMode();", "clip();", "createGraphics();", "noClip();", "PGraphics",
        "loadShader();", "PShader", "resetShader();", "shader();", "PFont", "createFont();", "loadFont();",
        "text();", "textFont();", "textAlign();", "textLeading();", "textMode();", "textSize();", "textWidth();",
        "textAscent();", "textDescent();", "PVector", "%", "*", "*=", "+", "++", "+=", "-", "--", "-=",
        "/", "/=", "&", "<<", ">>", "|", "abs();", "ceil();", "constrain();", "dist();", "exp();", "floor();",
        "lerp();", "log();", "mag();", "map();", "max();", "min();", "norm();", "pow();", "round();", "sq();", "sqrt();",
        "acos();", "asin();", "atan();", "atan2();", "cos();", "degrees();", "radians();", "sin();", "tan();", "noise();",
        "noiseDetail();", "noiseSeed();", "random();", "randomGaussian();", "randomSeed();", "HALF_PI", "PI", "QUARTER_PI",
        "TAU", "TWO_PI"

    ]
    var jeremy = decodeURI("J%C3%A9r%C3%A9my") // J茅r茅my

    var p5json = $.map(p5json, function (value, i) { return { key: value, name: value } });

    var p5json_config = {
        at: ":",
        data: p5json,
        displayTpl: "<li>${name}</li>",
        insertTpl: '${key}',
        delay: 400
    }
    $inputor = $('#t1').atwho(p5json_config);
    $inputor.caret('pos', 47);
    $inputor.focus().atwho('run');

});
