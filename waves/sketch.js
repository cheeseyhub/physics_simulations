/***  Travelling sine wave.
 * 
 * 
 * let angle = 0;
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
    let y = map(sin(angles[i] * 0.2), -1, 1, 0, height);
    let x = pointWidth * i;
    point(x, y);
    angles[i] += angleV;
  }
} ***/

class Wave {
  constructor(amp, period, phase) {
    this.amp = amp;
    this.period = period;
    this.phase = phase;
  }
  calculate(x) {
    return sin(this.phase + (TWO_PI * x) / this.period) * this.amp;
  }

  update() {
    this.phase += 0.1;
  }
}

let waves = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 5; i++) {
    waves[i] = new Wave(random(20, 30), random(0, windowWidth), random(100));
  }
}

function draw() {
  background(0);
  for (let x = 0; x < windowWidth; x += 10) {
    let y = 0;
    for (let wave of waves) {
      y += wave.calculate(x);
    }
    ellipse(x, y + windowHeight / 2, 10);
  }
  for (let wave of waves) {
    wave.update();
  }
}
