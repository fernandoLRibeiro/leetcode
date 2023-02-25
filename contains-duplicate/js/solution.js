/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let numsHash = {};

  for (let i = 0; i < nums.length; i++) {
    if (numsHash[nums[i]]) {
      return true;
    } else {
      numsHash[nums[i]] = 1;
    }
  }

  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
/** expect true */

console.log(containsDuplicate([1, 2, 3, 4]));
/** expect false */

console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
/** expect true */
