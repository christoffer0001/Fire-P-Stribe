class WinCheck {
  constructor(board) {
    this.board = board;
    this.rows = this.board.length;
    this.cols = this.board[0].length;
  }

  checkWin(board) {
    this.board = board;
    // 7x6
    //check horizontal
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        const current = this.board[r][c];

        if (current == 0) continue;

        if (c + 3 < this.cols && this.board[r][c + 1] == current && this.board[r][c + 2] == current && this.board[r][c + 3] == current) {
          return current;
        }
        //check vertical
        if (r + 3 < this.rows && this.board[r + 1][c] == current && this.board[r + 2][c] == current && this.board[r + 3][c] == current) {
          return current;
        }
        // Check diagonal down-right
        if (r + 3 < this.rows && c + 3 < this.cols && this.board[r + 1][c + 1] === current && this.board[r + 2][c + 2] === current && this.board[r + 3][c + 3] === current) {
          return current;
        }

        // Check diagonal down-left
        if (r + 3 < this.rows && c - 3 >= 0 && this.board[r + 1][c - 1] === current && this.board[r + 2][c - 2] === current && this.board[r + 3][c - 3] === current) {
          return current;
        }
      }
    }
    return 0;
  }

  checkDraw(board) {
    this.board = board;
    //check horizontal
    for (let i = 0; i < this.rows; i++) {
      //check vertical
      for (let j = 0; j < this.cols; j++) {
        if (this.board[i][j] == 0) {
          return false;
        }
      }
    }
    return true;
  }
}
