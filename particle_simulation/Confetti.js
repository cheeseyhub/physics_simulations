class Confetti extends Particle {
  constructor(x, y, color) {
    super(x, y, color);
    this.size = 5;
    
  }
  draw() {
    push();
    translate(this.x, this.y)
    rotate(random(TWO_PI))
    stroke(this.color);
    strokeWeight(5);
    square(0, 0, this.size)
    pop();
  }
}