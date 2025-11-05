let vx = 0;
let vy = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  vx += 0.01;
  vy += 0.01;
  for (let i = 0; i < 100; i++) {
    let y = map(sin(i + vy), -1, 1, 0, windowWidth);
    let x = map(cos(i), -1, 1, 0, windowHeight);
    stroke(255);
    strokeWeight(14);
    point(x, y);
  }
}
