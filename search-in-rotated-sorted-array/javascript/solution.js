/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let hi = nums.length - 1;
  let lo = 0;
  let mid;

  while (hi >= lo) {
    mid = Math.floor((lo + hi) / 2);

    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] >= nums[lo]) {
      if (target > nums[mid] || target < nums[lo]) {
        lo = mid + 1;
      } else {
        hi = mid - 1;
      }
    } else {
      if (target < nums[mid] || target > nums[hi]) {
        hi = mid - 1;
      } else {
        lo = mid + 1;
      }
    }
  }
  return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
// expect 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 6));
// expect 2
console.log(search([4, 5, 6, 7, 0, 1, 2], 2));
// expect 6
console.log(search([4, 5, 6, 7, 0, 1, 2], 4));
// expect 0
console.log(search([3, 1], 1));
// expect 1
console.log(search([3, 1], 3));
// expect 0
console.log(search([5, 3, 1], 3));
// expect 1
console.log(search([5, 3, 1], 5));
// expect 0
console.log(search([1], 0));
// expect -1
console.log(search([4, 5, 6, 7, 8, 1, 2, 3], 8));
// expect 4
console.log(search([5, 1, 3], 3));
// expect 2
