let emitters = [];
let img;

function preload() {
  img = loadImage("texture.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  blendMode(ADD);
  background(0);
  for (emitter of emitters) {
    emitter.emit();
    emitter.applyForce(createVector(0, -0.1));
  }
}

function mousePressed() {
  emitters.push(
    new Emitter(mouseX, mouseY, color(random(255), random(255), random(255))),
  );
}
