/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const heap = new MaxPriorityQueue();
  for (let i = 0; i < nums.length; ++i) {
    heap.enqueue(nums[i]);
  }

  let curr;
  while (k > 0) {
    curr = heap.dequeue().element;
    k--;
  }
  return curr;
};
