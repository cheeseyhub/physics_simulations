
class Attractor {
  constructor(x, y, mass) {
    this.pos = createVector(x, y);
    this.mass = mass;
    this.radius = sqrt(mass) * 10;
  }
  attract(mover) {
    let force = p5.Vector.sub(this.pos, mover.pos);
    let disSq = constrain(force.magSq(), 2, 40);
    let G = 0.1;
    let strength = G * (this.mass * mover.mass / disSq);
    force.setMag(strength);
    mover.applyForce(force)
  }
  draw(x, y) {
    circle(x || this.pos.x, y || this.pos.y, this.radius);
  }
}
