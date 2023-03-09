/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let results = [];
  const sortedNums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    let [left, right] = [i + 1, nums.length - 1];
    if (i > 0 && sortedNums[i] === sortedNums[i - 1]) {
      continue;
    }
    while (left < right) {
      sum = sortedNums[i] + sortedNums[left] + sortedNums[right];
      if (sum === 0) {
        results.push([sortedNums[i], sortedNums[left], sortedNums[right]]);
        left++;

        while (sortedNums[left] === sortedNums[left - 1] && left < right) {
          left++;
        }
      }

      if (sum > 0) {
        right--;
      }

      if (sum < 0) {
        left++;
      }
    }
  }
  return results;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 1, 1]));
console.log(threeSum([0, 0, 0]));
console.log(threeSum([-2, 0, 0, 2, 2]));
console.log(threeSum([0, 0, 0, 0]));
console.log(threeSum([-2, 0, 1, 1, 2]));
console.log(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]));
