/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const visit = new Set();

  const dfs = (r, c) => {
    if (
      r < 0 ||
      r === rows ||
      c < 0 ||
      c === cols ||
      grid[r][c] === 0 ||
      visit.has("" + r + "," + c)
    ) {
      return 0;
    }
    visit.add("" + r + "," + c);
    return 1 + dfs(r + 1, c) + dfs(r - 1, c) + dfs(r, c + 1) + dfs(r, c - 1);
  };
  let area = 0;
  for (let r = 0; r < rows; ++r) {
    for (let c = 0; c < cols; ++c) {
      area = Math.max(area, dfs(r, c));
    }
  }
  return area;
};
