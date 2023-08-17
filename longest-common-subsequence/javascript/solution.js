/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const grid = new Array(text1.length + 1)
    .fill()
    .map(() => new Array(text2.length + 1).fill(0));

  for (let x = text1.length - 1; x >= 0; x--) {
    for (let y = text2.length - 1; y >= 0; y--) {
      if (text1[x] === text2[y]) {
        grid[x][y] = grid[x + 1][y + 1] + 1;
      } else {
        grid[x][y] = Math.max(grid[x][y + 1], grid[x + 1][y]);
      }
    }
  }

  return grid[0][0];
};
