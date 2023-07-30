/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  let rows = board.length;
  let cols = board[0].length;

  const capture = (r, c) => {
    if (r < 0 || c < 0 || r === rows || c === cols || board[r][c] !== "O") {
      return;
    }
    board[r][c] = "T";
    capture(r + 1, c);
    capture(r - 1, c);
    capture(r, c + 1);
    capture(r, c - 1);
  };

  for (let r = 0; r < rows; ++r) {
    for (let c = 0; c < cols; ++c) {
      if (
        board[r][c] == "O" &&
        (r === 0 || r === rows - 1 || c === 0 || c === cols - 1)
      ) {
        capture(r, c);
      }
    }
  }

  for (let r = 0; r < rows; ++r) {
    for (let c = 0; c < cols; ++c) {
      if (board[r][c] !== "T") {
        board[r][c] = "X";
        continue;
      }
      board[r][c] = "O";
    }
  }
};
