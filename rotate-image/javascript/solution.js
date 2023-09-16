/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  matrix.reverse();
  const rows = matrix.length;

  for (let row = 0; row < rows; ++row) {
    for (let col = 0; col < row; ++col) {
      [matrix[row][col], matrix[col][row]] = [
        matrix[col][row],
        matrix[row][col],
      ];
    }
  }
};
