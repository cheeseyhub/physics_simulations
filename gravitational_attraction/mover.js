class Mover {
  constructor(x, y, mass, color) {
    this.pos = createVector(x, y);
    this.color = color;
    this.mouse = createVector(mouseX, mouseY);
    this.velocity = createVector(random(5), random(5));
    this.acceleration = createVector(0, 0);
    this.mass = mass;
    this.radius = sqrt(this.mass) * 7;
  }
  applyForce(force) {
    let f = p5.Vector.div(force,this.mass);
   this.acceleration.add(f)
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

    this.acceleration.setMag(0,0)
    circle(this.pos.x, this.pos.y, this.radius);
  }
}
