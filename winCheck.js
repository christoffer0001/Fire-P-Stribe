class WinCheck {
  constructor(board) {
    this.board = board;
  }

  checkWin() {}

  checkDraw() {
    //check horizontal
    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 7; j++) {
        if (this.board[i][j] == 0) {
          return false;
        } else {
          return true;
        }
      }
    }
  }
}
