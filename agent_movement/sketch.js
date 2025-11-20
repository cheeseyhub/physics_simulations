let particle1;
let target = {
  pos: {},
};

function setup() {
  createCanvas(windowWidth, windowHeight);

  particle1 = new Particle(0, 0, 16, 255);
}

function draw() {
  background(0);
  target.pos = createVector(mouseX, mouseY);
  particle1.draw();
  particle1.move();
  particle1.seek(target);
}
