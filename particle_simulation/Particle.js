class Particle {
  constructor(x, y, velocity, color) {
    this.x = x;
    this.y = y;
    this.velocity = p5.Vector.random2D();
    this.color = color;
    this.lifetime = 255;
    this.gravity = 0.9;
  }

  draw() {
    stroke(this.color, this.lifetime);
    strokeWeight(2);
    fill(this.color, this.lifetime);
    ellipse(this.x, this.y, 10, 10);
  }
  update() {
    this.y += this.velocity.y += this.gravity;
    this.x += this.velocity.x;
    this.lifetime -= 1;
  }
  remove() {
    if (this.lifetime < 100) {
      return true;
    }
  }

  edgeDetection() {
    if (this.y > windowHeight) {
      this.y = windowHeight;
      this.velocity.y *= -1;
    } else if (this.y <= 0) {
      this.y = 0;
      this.velocity.y *= -1;
    } else if (this.x > windowWidth) {
      this.x = windowWidth;
      this.velocity.x *= -1;
    } else if (this.x <= 0) {
      this.x = 0;
      this.velocity.x *= -1;
    } else if (this.lifetime < 0) {
      this.velocity.x *= -1;
    }
  }
}
