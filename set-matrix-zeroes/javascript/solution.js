/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const rows = matrix.length;
  const columns = matrix[0].length;

  let rowZero = false;

  for (let row = 0; row < rows; ++row) {
    for (let column = 0; column < columns; ++column) {
      if (matrix[row][column] === 0) {
        matrix[0][column] = 0;

        if (row > 0) {
          matrix[row][0] = 0;
        } else {
          rowZero = true;
        }
      }
    }
  }
  for (let row = 1; row < rows; ++row) {
    for (let column = 1; column < columns; ++column) {
      if (matrix[0][column] === 0 || matrix[row][0] === 0) {
        matrix[row][column] = 0;
      }
    }
  }
  if (matrix[0][0] === 0) {
    for (let row = 0; row < rows; ++row) {
      matrix[row][0] = 0;
    }
  }

  if (rowZero) {
    for (let column = 0; column < columns; ++column) {
      matrix[0][column] = 0;
    }
  }
};
