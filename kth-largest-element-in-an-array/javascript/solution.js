/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  k = nums.length - k;

  const quickSelect = (l, r) => {
    let pivot = nums[r];
    let p = l;
    for (let i = l; i < r; ++i) {
      if (nums[i] <= pivot) {
        let tmp = nums[i];
        nums[i] = nums[p];
        nums[p] = tmp;
        p++;
      }
    }
    let tmp = nums[p];
    nums[p] = pivot;
    nums[r] = tmp;

    if (p > k) {
      return quickSelect(l, p - 1);
    } else if (p < k) {
      return quickSelect(p + 1, r);
    } else {
      return nums[p];
    }
  };
  return quickSelect(0, nums.length - 1);
};
