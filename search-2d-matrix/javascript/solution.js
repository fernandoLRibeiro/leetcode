/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let hiRow = matrix.length;
  let loRow = 0;

  do {
    let row = Math.floor(loRow + (hiRow - loRow) / 2);

    let hiColumn = matrix[row].length;
    let loColumn = 0;

    do {
      let column = Math.floor(loColumn + (hiColumn - loColumn) / 2);

      if (matrix[row][column] === target) {
        return true;
      } else if (matrix[row][column] < target) {
        loRow = row + 1;
        loColumn = column + 1;
      } else {
        hiRow = row;
        hiColumn = column;
      }
    } while (loColumn < hiColumn);
  } while (loRow < hiRow);
  return false;
};

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
);
// expect true
console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    13
  )
);
// expect false
