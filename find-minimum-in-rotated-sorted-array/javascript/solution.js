/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let lo = 0;
  let hi = nums.length;
  let current = Math.floor((lo + hi) / 2);

  while (lo < hi) {
    if (nums[current - 1] > nums[current] || nums[current - 1] === undefined) {
      return nums[current];
    }
    if (nums[current - 1] < nums[current]) {
      if (nums[current] > nums[nums.length - 1]) {
        lo = current;
        current = Math.floor((lo + hi) / 2);
      } else {
        hi = current;
        current = Math.floor((lo + hi) / 2);
      }
    }
  }
};

console.log(findMin([3, 4, 5, 1, 2]));
// expect 1
console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
// expect 0
console.log(findMin([11, 13, 15, 17]));
// expect 11
