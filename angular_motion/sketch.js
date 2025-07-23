let movers = Array(10);
let attractors = [];
let gravity;
let wind;
function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < movers.length; i++) {
    movers[i] = new Mover(random(width), random(height), random(20), 255);
  }
  gravity = createVector(0, 1);
  wind = createVector(0.2, 0);
  attractors[0] = new Attractor(width / 2, height / 2, 50);}
function mousePressed() {
  attractors.push(new Attractor(mouseX, mouseY, 50));
}
function draw() {
  background(0, 40);

  for (let mover of movers) {
    // mover.collisionDjetection();
    mover.draw();
    for (let attractor of attractors) {
      attractor.attract(mover);
      attractor.draw();
    }
  }
}
