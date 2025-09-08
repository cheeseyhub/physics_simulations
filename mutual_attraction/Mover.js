class Mover {
  constructor(x, y, vx, vy, mass) {
    this.pos = createVector(x, y);
    this.mouse = createVector(mouseX, mouseY);
    this.velocity = createVector(vx, vy);
    this.acceleration = createVector(0, 0);
    this.mass = mass;
    this.radius = sqrt(this.mass) * 7;
  }
  attract(mover) {
    let force = p5.Vector.sub(mover.pos, this.pos);
    let distance = constrain(force.magSq(), 100, 1000);

    let G = 1;
    let strength = G * (this.mass * mover.mass) / distance;
    force.setMag(strength);
    this.applyForce(force);
  }
  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }
  collisionDetection() {
    if (this.pos.x + this.radius >= width) {
      this.pos.x = width - this.radius;
      this.velocity.x *= -1;
    }
    if (this.pos.x - this.radius <= 0) {
      this.pos.x = this.radius;
      this.velocity.x *= -1;
    }

    if (this.pos.y + this.radius > height) {
      this.pos.y = height - this.radius;
      this.velocity.y *= -1;
    }

    if (this.pos.y < 0) {
      this.pos.y = 0;
      this.velocity.y *= -1;
    }
  }
  draw() {
    this.velocity.add(this.acceleration);
    this.pos.add(this.velocity);

    this.acceleration.set(0);
    circle(this.pos.x, this.pos.y, this.radius);
  }
}
