class Confetti extends Particle{
  constructor(x,y) {
    super(x, y, color);
    this.size = 5;
    
  }
  draw() {
    stroke(255);
    strokeWeight(5);
    square(this.x,this.y,this.size)
  }
}