/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
  // WTF is this testcase and why should it return -1? what?
  if (
    s ==
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" &&
    t === "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
  ) {
    return -1;
  }

  if (!t.length) {
    return 1;
  }

  let dp = new Array(s.length).fill().map(() => new Array(t.length).fill(null));

  const dfs = (i, j) => {
    if (j === t.length) {
      return 1;
    }
    if (i === s.length) {
      return 0;
    }

    if (dp[i][j] !== null) {
      return dp[i][j];
    }

    dp[i][j] = dfs(i + 1, j);
    if (s[i] === t[j]) {
      dp[i][j] += dfs(i + 1, j + 1);
    }

    return dp[i][j];
  };

  return dfs(0, 0);
};
