let Board=
[[0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0]];

let ui, check;

let player = 1; //1 or 2


function setup() {
  createCanvas(1280,720);
  check = new Checking(Board);
  ui=new UI(width, height, check, Board);
  
}

function draw() {
  background(200);
  ui.drawBoard();

}

function mousePressed(){
ui.pressOnBoard(Board, player);
}