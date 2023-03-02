/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let results = Array(nums.length);
  results.fill(1, 0, results.length);

  prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    results[i] = prefix;
    prefix *= nums[i];
  }

  postfix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    results[i] = results[i] * postfix;
    postfix *= nums[i];
  }

  return results;
};

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
