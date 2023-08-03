/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let max = nums[0];
  let currMin = 1;
  let currMax = 1;

  for (let n = 0; n < nums.length; ++n) {
    const temp = currMax;

    currMax = Math.max(nums[n] * temp, nums[n] * currMin, nums[n]);
    currMin = Math.min(nums[n] * temp, nums[n] * currMin, nums[n]);
    max = Math.max(currMax, max);
  }

  return max;
};
