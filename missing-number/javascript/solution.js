/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let missing = nums.length;
  for (let i = 0; i < nums.length; ++i) {
    const xor = i ^ nums[i];
    missing ^= xor;
  }
  return missing;
};
