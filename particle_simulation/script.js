let particles = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  background(0);
  for (let i = 0; i < 1; i++) {
    particles.push(
      new Particle(
        random(0, windowWidth),
        random(0, windowHeight),
        createVector(0, 0),
        255
      )
    );
  }
  for (let particle of particles) {
    particle.draw();
    particle.edgeDetection();
    particle.update();
  }
  for (let i = 0; i < particles.length; i++) {
    if (particles[i].remove()) {
      particles.splice(i, 1);
    }
  }
}
