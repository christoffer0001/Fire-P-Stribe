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
    push();
    textSize(125);
    fill(0);
    text("Rød spiller har vundet!", 0, height / 2 + 50);
    pop();
    noLoop();
  } else if (endTest.checkWin(Board) == 2) {
    push();
    textSize(125);
    fill(0);
    text("Gul spiller har vundet!", 0, height / 2 + 50);
    pop();
    noLoop();
  } else if (endTest.checkDraw(Board)) {
    push();
    textSize(200);
    fill(0);
    text("Uafgjort :(", width / 10, height / 2);
    pop();
    noLoop();
  }
}

function mousePressed() {
  if (ui.pressOnBoard(Board, player)) {
    player = player == 1 ? 2 : 1;
  }
}

function restart() {
  Board = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ];
  check = new Checking(Board);
  ui = new UI(check);
  endTest = new WinCheck(Board);
  loop();
}
