/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  nums.sort((a, b) => a - b);
  return bfs(nums);
};

const bfs = function (nums, subsets = [[]]) {
  for (const num of nums) {
    const levels = subsets.length;

    for (let level = 0; level < levels; level++) {
      const nextLevel = [...subsets[level], num];
      subsets.push(nextLevel);
    }
  }
  return subsets;
};
