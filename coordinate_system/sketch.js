let radius = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  radius = 100;
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  noFill();
  strokeWeight(2);
  stroke("white");

  let increment = map(mouseX, 0, width, 0, TWO_PI);
  beginShape();
  for (let angle = 0; angle < TWO_PI; angle += increment) {
    let x = radius * cos(angle);
    let y = radius * sin(angle);

    vertex(x, y);
  }

  endShape(CLOSE);
}
