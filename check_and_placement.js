class Checking {
  constructor(board) {
    this.r = 10;
    this.board = board;
  }

  validSquare(square, player) {
    for (let i = 5; i >= 0; i--) {
      if (this.board[i][square] == 0) {
        Board[i][square] = player;
        return true;
      }
    }
    return false;
  }

  placeSquare(square, board, player) {
    this.player = player;
    this.currentBoard = board;

    let placed = this.validSquare(square, player);

    return placed;
  }
}
