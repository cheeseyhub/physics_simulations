class Triangle {
  constructor(pos, size) {
    this.pos = pos;
    this.size = size;
    this.velocity = createVector(0, 0);
  }

  calculate() {
    /*The particle moves towards the mouse */
    let force = createVector(mouseX - this.pos.x, mouseY - this.pos.y);
    force.normalize();
    force.setMag(0.001);
    this.velocity.add(force);
  }
  update() {
    this.pos.add(this.velocity);
  }
  draw() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.velocity.heading());
    triangle(this.size, -this.size, -this.size, -this.size, 0, 0);
    pop();
    this.update();
  }
}
