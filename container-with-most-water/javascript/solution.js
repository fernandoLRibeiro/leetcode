/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let maximumArea = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const currentArea = Math.min(height[left], height[right]) * (right - left);

    maximumArea = Math.max(maximumArea, currentArea);

    if (height[left] > height[right]) {
      --right;
      continue;
    }

    ++left;
  }
  return maximumArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
// expect 49
console.log(maxArea([1, 1]));
// expect 1
