let vechile1;
let target;
function setup() {
  createCanvas(windowWidth, windowHeight);

  vechile1 = new Vechile(0, 0, 16, 255);
  target = new Vechile(windowWidth / 2, windowHeight / 2, 16, 255);
}

function draw() {
  target.pos.x = mouseX;
  target.pos.y = mouseY;
  background(0);
  vechile1.draw();
  vechile1.move();
  let force = vechile1.pursue(target);
  vechile1.applyForce(force);
  vechile1.edges();
}
