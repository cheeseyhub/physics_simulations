class Emitter {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.particles = [];
    this.color = color;
  }
  emit() {
    this.particles.push(new Particle(this.x, this.y, this.color));
    this.particles.push(new Confetti(this.x, this.y, this.color));
    this.removeParticles();
    this.updateParticles();
  }
  removeParticles() {
    this.particles.forEach((particle) => {
      if (particle.remove()) {
        this.particles.splice(this.particles.indexOf(particle), 1);
      }
    });
  }
  updateParticles() {
    this.particles.forEach((particle) => {
      particle.draw();
      particle.update();
      particle.edgeDetection();
    });
  }
}
