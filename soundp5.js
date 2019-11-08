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


function p52h5() {
    var s = document.getElementById("t1").value;
    s = s.replace(/\b(0|1|2|3|4|5|6|7|8|9|a|b|c|d|e|f|g|A|B|C|D|E|F|G)\b/g, function ($0, $1) {
        return {

            "0": "396,",
            "1": "432,",
            "2": "504,",
            "3": "540,",
            "4": "612,",
            "5": "648,",
            "6": "720,",
            "7": "792,",
            "8": "864,",
            "9": "1008,",

            "a": "432,",
            "b": "504,",
            "c": "540,",
            "d": "612,",
            "e": "648,",
            "f": "720,",
            "g": "792,",

            "A": "432,",
            "B": "504,",
            "C": "540,",
            "D": "612,",
            "E": "648,",
            "F": "720,",
            "G": "792,"

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
