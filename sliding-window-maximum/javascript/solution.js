/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let output = [];
  let left = 0;
  let right = 0;
  let deque = [];

  while (right < nums.length) {
    while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[right]) {
      deque.pop();
    }
    deque.push(right);

    if (left > deque[0]) {
      deque.shift();
    }

    if (right + 1 >= k) {
      output.push(nums[deque[0]]);
      left++;
    }
    right++;
  }
  return output;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
console.log(maxSlidingWindow([1], 1));
console.log(maxSlidingWindow([1, -1], 1));
