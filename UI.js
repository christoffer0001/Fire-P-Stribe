class UI {
  constructor(check) {
    this.c = 0;
    this.s = 100;
    this.xstart = 280;
    this.ystart = 90;
    this.check = check;
  }
  drawBoard() {
    push();
    if (player == 1){
        fill(200,0,0);
        
    }else{
        fill(0,0,200);
    }
    circle(mouseX,45,this.s*0.8);
    pop();

    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 6; j++) {
        rect(this.xstart + this.s * i, this.ystart + this.s * j, this.s, this.s);

        let value = this.check.board[j][i];

        if (value != 0) {
          push();
          if (value == 1) {
            fill(200, 0, 0);
          } else {
            fill(0, 0, 200);
          }

          circle(this.xstart + this.s * i + this.s / 2, this.ystart + this.s * j + this.s / 2, this.s * 0.8);
          pop();
        }
      }
    }
  }
  pressOnBoard(board, player) {
    this.board = board;

    for (let i = 0; i < 7; i++) {
      if (mouseX > i * this.s + this.xstart && mouseX < this.xstart + this.s + this.s * i) {
        return this.check.placeSquare(i, this.board, player);
      }
    }
    return false;
  }

}
