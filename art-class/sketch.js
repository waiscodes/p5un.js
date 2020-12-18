function setup() {
  createCanvas(400, 400);
}

function draw() {
  mouseIsPressed ? fill(0) : fill(255);

  ellipse(mouseX, mouseY, 80, 80);
}
