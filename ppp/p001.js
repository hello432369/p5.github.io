let str;
        let font;
        let str_arr = [];

        function preload() {
            font = loadFont("AlibabaPuHuiTi-2-65-Medium.otf");
            str = loadStrings('p001.txt');
        }

        function setup() {
            createCanvas(windowWidth, windowHeight, WEBGL);
            noCursor();

            textAlign(CENTER, CENTER);
            textFont(font);
            textSize(30);

            for (let i = 0; i < str.length * 10; i++) {
                let x = random(-width / 2, width / 2);
                let y = random(-height / 2, height / 2);
                let z = random(-width * 6, width / 2);
                let typeInstance = new Type(str[i % str.length], x, y, z);
                str_arr.push(typeInstance);
            }
        }

        function draw() {
            background(0);
            orbitControl();

            for (let i = 0; i < str_arr.length; i++) {
                str_arr[i].update();
                str_arr[i].display();
            }
        }

        function windowResized() {
            resizeCanvas(windowWidth, windowHeight);
        }

        class Type {
            constructor(_str, _x, _y, _z) {
                let str = _str;
                let x = _x;
                let y = _y;
                let z = _z;

                this.update = function () {
                    z += 3;

                    if (z > width / 2) {
                        z = -width * 6;
                    }
                };

                this.display = function () {
                    push();
                    translate(x, y, z);
                    text(str, 0, 0);
                    pop();
                };
            }
        }