var twoSum = function (nums, target) {
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];

    if (hash.hasOwnProperty(diff)) {
      return [hash[diff], i];
    }
    hash[nums[i]] = i;
  }
  return;
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 9, 6], 10));
console.log(twoSum([3, 3], 6));
console.log(twoSum([2, 5, 5, 11], 10));
console.log(twoSum([3, 5, 9], 10));
