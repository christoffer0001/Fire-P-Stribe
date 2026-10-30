let Board = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
];

let ui, check, endTest;

let player = 1; //1 or 2

function setup() {
  createCanvas(1280, 720);
  check = new Checking(Board);
  ui = new UI(check);
  endTest = new WinCheck(Board);
}

function draw() {
  background(200);
  ui.drawBoard();
  if (endTest.checkWin(Board) == 1) {
    console.log("Player 1 won");
    noLoop(); //Stops the program (draw) from running.
  } else if (endTest.checkWin(Board) == 2) {
    console.log("Player 2 won");
    noLoop(); //Stops the program (draw) from running.
  } else if (endTest.checkDraw(Board)) {
    console.log("Draw");
    noLoop(); //Stops the program (draw) from running.
  }
}

function mousePressed() {
  if (ui.pressOnBoard(Board, player)) {
    player = player == 1 ? 2 : 1;
  }
}
