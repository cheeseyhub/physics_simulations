class Particle {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.velocity = p5.Vector.random2D();
    this.color = color;
    this.lifetime = 255;
    this.radius = 5;
  }

  draw() {
    imageMode(CENTER);
    image(img, this.x, this.y, this.radius * 2, this.radius * 2);
    //ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
  }
  applyForce(force) {
    this.velocity.add(force);
  }
  update() {
    this.y += this.velocity.y;
    this.x += this.velocity.x;
    this.lifetime -= 2;
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
