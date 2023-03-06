/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let numsSet = new Set(nums);
  let longest = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!numsSet.has(nums[i] - 1)) {
      let length = 0;
      while (numsSet.has(nums[i] + length)) {
        length++;
      }
      longest = Math.max(length, longest);
    }
  }
  return longest;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
