/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  let dp = {};
  dp[s.length] = 1;

  for (let i = s.length - 1; i >= 0; --i) {
    if (s[i] === "0") {
      dp[i] = 0;
      continue;
    } else {
      dp[i] = dp[i + 1];
    }
    if (i + 1 < s.length && s.slice(i, i + 2) / 26 <= 1) {
      dp[i] += dp[i + 2];
    }
  }
  return dp[0];
};
