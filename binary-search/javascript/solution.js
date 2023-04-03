/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function (nums, target) {
  let startPointer = 0;
  let endPointer = nums.length;

  do {
    let index = Math.floor(startPointer + (endPointer - startPointer) / 2);

    if (nums[index] === target) {
      return index;
    } else if (nums[index] > target) {
      endPointer = index;
    } else if (nums[index] < target) {
      startPointer = index + 1;
    }
  } while (startPointer < endPointer);
  return -1;
};
console.log(search([-1, 0, 3, 5, 9, 12], 9));
