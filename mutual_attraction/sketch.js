let movers = [];
let gravity;
let wind;

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 100; i++) {
    let center = createVector(width / 2, height / 2);
    let vector = p5.Vector.random2D();
    let velocity = vector.copy();
    velocity.rotate(Math.PI / 2);
    //change random value for patterns change the  second value for more spacing
    velocity.setMag(random(5, 15));

    vector.setMag(random(200, 300));
    vector = center.sub(vector);

    let mass = random(10);
    movers[i] = new Mover(vector.x, vector.y, velocity.x, velocity.y, mass); //last value for random colors
  }
}
function draw() {
  background(0, 25);
  for (let mover of movers) {
    for (let other of movers) {
      if (mover !== other) {
        mover.attract(other);
      }
    }
  }
  for (let mover of movers) {
    mover.draw();
    //for bouncing of the bounds
    //mover.collisionDetection();
  }
}
