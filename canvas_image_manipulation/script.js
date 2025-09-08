/**@type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas");
/**@type {CanvasRenderingContext2D} */
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

class Particle {
  constructor(effect, x, y, color) {
    this.effect = effect;
    this.x = x;
    this.y = y;

    this.vx = 0;
    this.vy = 0;

    this.dx = 0;
    this.dy = 0;

    this.distance = 0;
    this.force = 0;
    this.friction = 0.95;
    this.angle = 0;

    this.originX = Math.floor(x);
    this.originY = Math.floor(y);
    this.color = color;
    this.size = this.effect.gap;

    this.ease = 0.2;
  }
  draw(ctx) {
    this.dx = this.effect.mouseX - this.x;
    this.dy = this.effect.mouseY - this.y;
    this.distance = this.dx * this.dx + this.dy * this.dy;
    this.distance = this.distance < 100 ? 50 : this.distance;
    this.force = -this.effect.radius / this.distance;

    if (this.distance < this.effect.radius) {
      this.angle = Math.atan2(this.dy, this.dx);
      this.vx += Math.cos(this.angle) * this.force;
      this.vy += Math.sin(this.angle) * this.force;
    }
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.size, this.size);
  }
  update() {
    this.x += (this.vx *= this.friction) + (this.originX - this.x) * this.ease;
    this.y += (this.vy *= this.friction) + (this.originY - this.y) * this.ease;
  }
  warp() {
    this.x = Math.random() * this.effect.width;
    this.y = Math.random() * this.effect.height;
  }
}
class Effect {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.centerX = this.width / 2;
    this.centerY = this.height / 2;
    this.particleArray = [];
    this.image = document.querySelector("img");

    this.x = this.centerX - this.image.width * 0.5;
    this.y = this.centerY - this.image.height * 0.5;

    this.gap = 10;

    this.radius = 400;
    this.mouseX = 0;
    this.mouseY = 0;
    window.addEventListener("mousemove", (event) => {
      this.mouseX = event.clientX;
      this.mouseY = event.clientY;
    });
  }
  init(ctx) {
    ctx.drawImage(this.image, this.x, this.y);
    const pixels = ctx.getImageData(0, 0, this.width, this.height).data;
    for (let y = 0; y < this.height; y += this.gap) {
      for (let x = 0; x < this.width; x += this.gap) {
        const index = (y * this.width + x) * 4;
        const red = pixels[index];
        const green = pixels[index + 1];
        const blue = pixels[index + 2];
        const alpha = pixels[index + 3];
        const rgb = `rgba(${red}, ${green}, ${blue},${alpha})`;
        if (alpha > 0) {
          this.particleArray.push(new Particle(this, x, y, rgb));
        }
      }
    }
  }
  draw(ctx) {
    this.particleArray.forEach((particle) => particle.draw(ctx));
  }
  update() {
    this.particleArray.forEach((particle) => particle.update());
  }
  warp() {
    this.particleArray.forEach((particle) => particle.warp());
  }
}
const effect = new Effect(canvas.width, canvas.height);
effect.init(ctx);

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  effect.draw(ctx);
  effect.update();
  requestAnimationFrame(animate);
}
animate();
const warp_btn = document.getElementById("warp_button");
warp_btn.addEventListener("click", () => {
  effect.warp();
});
