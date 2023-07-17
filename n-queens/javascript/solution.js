/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const cols = new Set();
  const positiveDiagonal = new Set();
  const negativeDiagonal = new Set();
  const res = [];
  const board = new Array(n).fill().map(() => new Array(n).fill("."));

  const backtracking = (r) => {
    if (r === n) {
      const rows = board.map((_row) => _row.join(""));
      res.push(rows);
      return;
    }
    for (let c = 0; c < n; ++c) {
      if (
        cols.has(c) ||
        positiveDiagonal.has(r + c) ||
        negativeDiagonal.has(r - c)
      ) {
        continue;
      }
      cols.add(c);
      positiveDiagonal.add(r + c);
      negativeDiagonal.add(r - c);
      board[r][c] = "Q";
      backtracking(r + 1);

      cols.delete(c);
      positiveDiagonal.delete(r + c);
      negativeDiagonal.delete(r - c);
      board[r][c] = ".";
    }
  };
  backtracking(0);
  return res;
};
