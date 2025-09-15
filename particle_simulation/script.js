let emitters = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  background(0);
  for (emitter of emitters) {
    emitter.emit();
  }
}

function mousePressed() {
  emitters.push(new Emitter(mouseX, mouseY, color(255)));
}
