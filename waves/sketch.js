let angle = 0;
let angleV = 0.1;
let numPoints = 50;
let pointWidth = 0;
let angles = [];
let points = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  pointWidth = width / numPoints;
  for (let i = 0; i < numPoints; i++) {
    angles[i] = i;
  }
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(pointWidth);
  for (let i = 0; i < numPoints; i++) {
    let y = map(
      sin(angles[i] * 0.2),
      -1,
      1,
      height / 2 - 100,
      height / 2 + 100
    );
    let x = pointWidth * i;
    point(x, y);
    angles[i] += angleV;
  }
}
