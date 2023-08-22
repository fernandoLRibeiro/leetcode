/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  let dp = {};

  const backtrack = (index, total) => {
    if (index === nums.length) {
      if (total === target) {
        return 1;
      }
      return 0;
    }
    if (dp[index] && dp[index][total]) {
      return dp[index][total];
    }
    if (!dp[index]) {
      dp[index] = {};
    }
    dp[index][total] =
      backtrack(index + 1, total + nums[index]) +
      backtrack(index + 1, total - nums[index]);

    return dp[index][total];
  };

  return backtrack(0, 0);
};
