let points = [];
let n = 100;
let pointpos;
let vx = 0.001;
function setup() {
  createCanvas(windowWidth, windowHeight);
  pointpos = windowWidth / n;
}

function draw() {
  background(0);
  translate(0,height / 2)

  strokeWeight(7);
  stroke(255);
  for (let i = 0; i < n; i++) {
    point(pointpos * i, (windowHeight / 2) * sin(i * vx));
  }
  vx += 0.001;
}
