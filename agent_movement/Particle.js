class Particle {
  constructor(x, y, length, color) {
    this.pos = createVector(x, y);
    this.velocity = createVector(10, 10);
    this.acceleration = createVector(0, 0);
    this.length = length;
    this.color = color;

    this.maxVelocity = 3;
    this.maxAcceleration = 150;
    this.maxForce = 1;

    this.proximity = 100;
  }

  seek(otherParticle) {
    let force = p5.Vector.sub(otherParticle.pos, this.pos);
    //The body will move according to the ratio of the distance
    force.setMag(force.mag() / this.proximity);
    force.sub(this.velocity);
    force.limit(this.maxForce);
    this.applyForce(force);
  }
  applyForce(force) {
    this.acceleration.add(force);
  }

  move() {
    this.pos.add(this.velocity);
    this.velocity.add(this.acceleration);
    this.acceleration.mult(0);
  }

  draw() {
    strokeWeight(this.radius);
    fill(255, 255, 255);
    noStroke();
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.velocity.heading());
    //Make a pointy triangle towards the center
    triangle(
      -this.length,
      -this.length / 2,
      -this.length,
      this.length / 2,
      this.length,
      0,
    );
    pop();
  }
}
