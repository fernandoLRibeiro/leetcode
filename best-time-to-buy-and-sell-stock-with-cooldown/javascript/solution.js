/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let dp = {};

  const dfs = (i, buying) => {
    if (i >= prices.length) {
      return 0;
    }
    if (dp[i] && dp[i][buying]) {
      return dp[i][buying];
    }

    let cooldown = dfs(i + 1, buying);
    if (buying) {
      let buy = dfs(i + 1, !buying) - prices[i];
      if (!dp[i]) {
        dp[i] = {};
      }
      dp[i][buying] = Math.max(buy, cooldown);
    } else {
      let sell = dfs(i + 2, !buying) + prices[i];

      if (!dp[i]) {
        dp[i] = {};
      }
      dp[i][buying] = Math.max(sell, cooldown);
    }
    return dp[i][buying];
  };
  return dfs(0, true);
};
