/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let a = nums1;
  let b = nums2;
  let total = a.length + b.length;
  let half = Math.floor(total / 2);

  if (b.length < a.length) {
    let temp = a;
    a = b;
    b = temp;
  }
  let left = 0;
  let right = a.length - 1;
  while (true) {
    let i = Math.floor((left + right) / 2);
    let j = half - i - 2;

    let aLeft = i >= 0 ? a[i] : Number.NEGATIVE_INFINITY;
    let aRight = i + 1 < a.length ? a[i + 1] : Number.POSITIVE_INFINITY;
    let bLeft = j >= 0 ? b[j] : Number.NEGATIVE_INFINITY;
    let bRight = j + 1 < b.length ? b[j + 1] : Number.POSITIVE_INFINITY;

    if (aLeft <= bRight && bLeft <= aRight) {
      if (total % 2) {
        return Math.min(aRight, bRight);
      }

      return (Math.max(aLeft, bLeft) + Math.min(aRight, bRight)) / 2;
    } else if (aLeft > bRight) {
      right = i - 1;
    } else {
      left = i + 1;
    }
  }
};

// console.log(findMedianSortedArrays([1, 3], [2]));
// console.log(findMedianSortedArrays([1, 2, 4], [1, 3, 4]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
// console.log(findMedianSortedArrays([], []));
// console.log(findMedianSortedArrays([], [0]));
