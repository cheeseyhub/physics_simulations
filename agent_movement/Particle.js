class Vechile {
  constructor(x, y, length, color) {
    this.pos = createVector(x, y);
    this.velocity = createVector(10, 10);
    this.acceleration = createVector(0, 0);
    this.length = length;
    this.color = color;

    this.maxVelocity = 3;
    this.maxAcceleration = 150;
    this.maxForce = 0.7;

    this.proximity = 100;
  }

  seek(target) {
    let force = p5.Vector.sub(target.pos, this.pos);
    //The body will move according to the ratio of the distance
    //force.setMag(force.mag() / this.proximity);
    //The body will move as fast as possible
    force.setMag(this.maxVelocity);
    this.velocity.limit(this.maxVelocity);
    force.sub(this.velocity);

    force.limit(0.1);
    return force;
  }
  evade(target) {
    return this.seek(target).mult(-1);
  }
  pursue(vechile) {
    let target = { x: vechile.pos.x, y: vechile.pos.y };
    let force = p5.Vector.sub(target, this.pos);
    force.setMag(this.maxVelocity);
    this.velocity.limit(this.maxVelocity);
    force.sub(this.velocity);

    force.limit(0.1);
    return force;
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
  edges() {
    if (this.pos.x > windowWidth || this.pos.x < 0) {
      this.pos.x = -10;
    }
    if (this.pos.y >= windowHeight || this.pos.y < 0) {
      this.pos.y = -10;
    }
  }
}

class Target extends Vechile {
  constructor(x, y, length, color) {
    super(x, y, length, color);
    this.velocity = createVector(10, 10);
  }

  draw() {
    strokeWeight(5);
    fill(255, 255, 255);
    noStroke();
    push();
    translate(this.pos.x, this.pos.y);
    circle(0, 0, this.length);
    pop();
  }
}
