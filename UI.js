class UI {
  constructor(check) {
    this.s = 100;
    this.xstart = 280;
    this.ystart = 90;
    this.check = check;
  }
  drawBoard() {
    push();
    if (player == 1) {
      fill(200, 0, 0);
    } else {
      fill(255, 255, 0);
    }
    circle(mouseX, 45, this.s * 0.9);
    pop();

    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 6; j++) {
        push();
        fill(0, 0, 200);
        noStroke();
        rect(this.xstart + this.s * i, this.ystart + this.s * j, this.s, this.s);

        fill(200);
        stroke(1);

        circle(this.s * i + this.xstart + this.s / 2, this.ystart + this.s / 2 + this.s * j, this.s);
        pop();

        let value = this.check.board[j][i];

        if (value != 0) {
          push();
          if (value == 1) {
            fill(200, 0, 0);
          } else {
            fill(255, 255, 0);
          }

          circle(this.xstart + this.s * i + this.s / 2, this.ystart + this.s * j + this.s / 2, this.s);
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
