/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
  nums.unshift(1);
  nums.push(1);
  let dp = {};

  const dfs = (l, r) => {
    if (l > r) {
      return 0;
    }
    const key = `${l}, ${r}`;
    if (dp[key]) {
      return dp[key];
    }

    dp[key] = 0;
    for (let i = l; i < r + 1; ++i) {
      let coins = nums[l - 1] * nums[i] * nums[r + 1];
      coins += dfs(l, i - 1) + dfs(i + 1, r);
      dp[key] = Math.max(dp[key], coins);
    }
    return dp[key];
  };

  return dfs(1, nums.length - 2);
};
