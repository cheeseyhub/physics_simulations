let angle = 0;
let angleV = 0.0002;
let numPoints = 100;
let pointWidth = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  pointWidth = width / numPoints;
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(3);
  for (let i = 0; i < numPoints; i++) {
    let y = map(sin(angle), -1, 1, height / 2 - 100, height / 2 + 100);
    let x = pointWidth * i;
    point(pointWidth * i, y);
    angle += angleV;
  }
 }

