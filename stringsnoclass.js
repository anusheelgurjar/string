let w;
let n;
let size;
let canvasWidth;
let canvasHeight;

function setup() {
  canvasWidth = window.innerWidth; 
  canvasHeight = window.innerWidth;
  createCanvas(canvasWidth, canvasHeight);
  
  size=width / 10;
  w = width * 4 / 10;
  n = 10;
}

function windowResized() {
  canvasWidth = window.innerWidth; 
  canvasHeight = window.innerWidth; 
  resizeCanvas(canvasWidth, canvasHeight);
}

function draw() {
  background(255);
  strokeWeight(mouseX / 10);

  let p = int(map(mouseY, 0, width, 0, 1 + n / 2));
  stroke(0, 116, 255);

  push();
  translate(size, height / 2);
  st(p);
  rotate(PI + HALF_PI);
  circ(p);
  pop();

  push();
  translate(width - size, height / 2);
  rotate(PI);
  st(p);
  rotate(PI + HALF_PI);
  circ(p);
  pop();

}

function st(p_) {
    if (p_ <= 0) {
      line(0, 0, 0, w);
      line(0, w, w, w);
    } else {
      
      for (let i = 0; i <= p_ - 1; i++) {
        if(p_<=5){
        stroke(10 * i, 40 * i, 40 * i);
        }else{
          p_=5;
          stroke(10 * i, 40 * i, 40 * i); //additional code for color restriction outside canvas
        }
        line(0, (w * i) / n, (w * (i + 1)) / n, w);
        line(0,w - (w * (i + 1)) / n,w - (w * i) / n,w);}
      }
    }

function circ(p_) {
    let col = n;
    let angle = 90 / (n + 1);
    if (p_ <= 0) {
      line(0, 0, w, 0);
      line(0, w, w, 0);
    } else if (p_ >= n / 2) {
      let v = 0;
      for (let j = n; j <= 90; j += angle) {
        stroke(1 * j, 3 * j, 3 * j);
        let x = int(w * cos(radians(j)));
        let y = int(w * sin(radians(j)));
        line(v, 0, x, y);
        line(0, w, w, 0); //additional line
        v = v + w / n;
      }
    } else {
      let v1 = w - w / n;
      let v2 = 0;
      for (let j = n; j <= angle * (p_ + 1); j += angle) {
        stroke(1 * j, 3 * j, 3 * j);
        let x = int(w * cos(radians(j)));
        let y = int(w * sin(radians(j)));
        line(v2, 0, x, y);
        v2 += w / n;
      }
      for (let j = 90 - angle; j >= angle * (n - p_); j -= angle) {
        //increment diff than processing version
        stroke(1 * col, 3 * col, 3 * col);
        let x = int(w * cos(radians(j)));
        let y = int(w * sin(radians(j)));
        line(v1, 0, x, y);
        v1 -= w / n;
        col += angle;
      }
    }
  }
