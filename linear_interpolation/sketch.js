//Goal: Draw Two points linear interpolate between those two points;
// -- Draw Two ponts on the edges;

let point1;
let point2;
let point3;

function linearInterpolation(a, b, slope) {
  return a + (b - a) * slope;
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  point1 = createVector(30, windowHeight / 2);
  point2 = createVector(windowWidth - 30, windowHeight / 2);
  point3 = createVector(
    linearInterpolation(point1.x, point2.x, random()),
    linearInterpolation(point1.y, point2.y, random())
  );
}

function draw() {
  background(0);
  strokeWeight(4);
  stroke(255);

  point(point1.x, point1.y);
  point(point2.x, point2.y);
  point(point3.x, point3.y);
}
