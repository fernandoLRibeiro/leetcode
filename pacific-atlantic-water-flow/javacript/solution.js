/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  let rows = heights.length;
  let cols = heights[0].length;
  let pac = new Set();
  let atl = new Set();
  let res = [];

  const dfs = (r, c, visit, prevHeight) => {
    const coordinatesString = "" + r + "," + c;
    if (
      visit.has(coordinatesString) ||
      r < 0 ||
      c < 0 ||
      r === rows ||
      c === cols ||
      heights[r][c] < prevHeight
    ) {
      return;
    }
    visit.add(coordinatesString);
    dfs(r + 1, c, visit, heights[r][c]);
    dfs(r - 1, c, visit, heights[r][c]);
    dfs(r, c + 1, visit, heights[r][c]);
    dfs(r, c - 1, visit, heights[r][c]);
  };

  for (let c = 0; c < cols; ++c) {
    dfs(0, c, pac, heights[0][c]);
    dfs(rows - 1, c, atl, heights[rows - 1][c]);
  }

  for (let r = 0; r < rows; ++r) {
    dfs(r, 0, pac, heights[r][0]);
    dfs(r, cols - 1, atl, heights[r][cols-1]);
  }
  for (let r = 0; r < rows; ++r) {
    for (let c = 0; c < cols; ++c) {
      const coordinatesString = "" + r + "," + c;
      if (pac.has(coordinatesString) && atl.has(coordinatesString)) {
        res.push([r, c]);
      }
    }
  }
  return res;
};
