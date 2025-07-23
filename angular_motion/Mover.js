class Mover {
  constructor(x, y, mass, color) {
    this.pos = createVector(x, y);
    this.color = color;
    this.mouse = createVector(mouseX, mouseY);
    this.velocity = createVector(random(5), random(5));
    this.acceleration = createVector(0, 0);
    this.mass = mass;
    this.radius = sqrt(this.mass) * 7;

    this.angle = 0;
    // this.angleV = 0;
    // this.angleA = 0;;
  }
  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f)
  }
  draw() {
    this.velocity.add(this.acceleration);
    this.pos.add(this.velocity);
    this.acceleration.setMag(0, 0)

    stroke('plum')
    strokeWeight(2);
    this.angle = this.velocity.heading();
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.angle)
    line(0, 0, this.radius, 0)
    triangle(-this.radius, -this.radius, 0, this.radius, this.radius, 0);
    pop();

  }
}
