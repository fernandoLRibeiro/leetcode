/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxLeft = height[left];
  let maxRight = height[right];
  let totalArea = 0;

  while (left < right) {
    if (maxLeft > maxRight) {
      right--;
      totalArea += Math.max(0, maxRight - height[right]);
      maxRight = Math.max(height[right], maxRight);
      continue;
    }

    left++;
    totalArea += Math.max(0, maxLeft - height[left]);
    maxLeft = Math.max(height[left], maxLeft);
  }
  return totalArea;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
// expect 6
console.log(trap([4, 2, 0, 3, 2, 5]));
//expect 9
