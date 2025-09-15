let triangles = [];
let numberOfTriangle = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < numberOfTriangle; i++) {
    let trianglePos = createVector(random(width), random(height));
    triangles.push(new Triangle(trianglePos, random(10,20)));
  }
}
function draw() {
  background(0, 100);
  triangles.forEach((triangle) => {
    triangle.calculate();
    triangle.draw();
  });
}
