/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid, islands = 0) {
  const [rows, cols] = [grid.length, grid[0].length];
  for (let row = 0; row < rows; ++row) {
    for (let col = 0; col < cols; ++col) {
      if (grid[row][col] === "1") islands++;

      dfs(grid, row, rows, col, cols);
    }
  }
  return islands;
};

const dfs = (grid, row, rows, col, cols) => {
  if (grid[row][col] === "0") {
    return;
  }
  grid[row][col] = "0";
  for (const [_row, _col] of getNeighbors(row, rows, col, cols)) {
    dfs(grid, _row, rows, _col, cols);
  }
};

const getNeighbors = (row, rows, col, cols) =>
  [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]
    .map(([_row, _col]) => [row + _row, col + _col])
    .filter(
      ([_row, _col]) => 0 <= _row && _row < rows && 0 <= _col && _col < cols
    );
