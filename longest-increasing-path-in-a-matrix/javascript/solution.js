/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;

  let dp = new Array(matrix.length)
    .fill()
    .map(() => new Array(matrix[0].length).fill(null));

  const dfs = (r, c, prevVal) => {
    if (r < 0 || r == rows || c < 0 || c == cols || matrix[r][c] <= prevVal)
      return 0;

    if (dp[r][c]) {
      return dp[r][c];
    }
    let res = 1;
    res += Math.max(
      dfs(r + 1, c, matrix[r][c]),
      dfs(r - 1, c, matrix[r][c]),
      dfs(r, c + 1, matrix[r][c]),
      dfs(r, c - 1, matrix[r][c])
    );
    dp[r][c] = res;

    return res;
  };

  let max = 0;
  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < cols; ++j) {
      max = Math.max(max, dfs(i, j, -1));
    }
  }

  return max;
};
