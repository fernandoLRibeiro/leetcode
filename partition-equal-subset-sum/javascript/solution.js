/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; ++i) {
    sum += nums[i];
  }
  if (sum % 2) return false;
  const target = sum / 2;
  let dp = {};
  dp[0] = 0;

  for (let i = nums.length - 1; i > -1; --i) {
    let nextDP = {};
    for (let key in dp) {
      nextDP[Number(key) + nums[i]] = dp[key] + nums[i];
      nextDP[key] = dp[key];
    }
    dp = nextDP;
  }

  if (dp[target]) return true;

  return false;
};
