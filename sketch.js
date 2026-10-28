let ui;
function setup() {
  ui=new UI(width, height);

  createCanvas(1280,720);
}

function draw() {
  background(200);

  ui.drawBoard();
}
