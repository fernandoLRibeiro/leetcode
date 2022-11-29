var twoSum = function (nums, target) {
  for (let index1 = 0; index1 <= nums.length; index1++) {
    for (let index2 = index1 + 1; index2 <= nums.length; index2++) {
      if (nums[index1] + nums[index2] === target) {
        return [index1, index2];
      }
    }
  }
  return `Numbers couldn't be found`;
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 9, 6], 10));
console.log(twoSum([3, 3], 6));
console.log(twoSum([2, 5, 5, 11], 10));
console.log(twoSum([3, 5, 9], 10));
