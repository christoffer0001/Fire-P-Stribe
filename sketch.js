let Board = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
];

let ui, check, winCheck;

function setup() {
  createCanvas(1280, 720);
  ui = new UI(width, height);
  check = new Checking();
  winCheck = new WinCheck(Board);
}

function draw() {
  background(200);
  ui.drawBoard();
}
