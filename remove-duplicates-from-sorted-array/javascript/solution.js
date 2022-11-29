var removeDuplicates = function (nums) {

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] != nums[i]) {
      nums[insertIndex] = nums[i];
      insertIndex++;
    }
  }

  nums.splice(insertIndex, nums.length - insertIndex);
  return insertIndex;
};

let array = [
  0, 0, 0, 0, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 5, 5, 5, 5, 7, 7, 7, 7, 8, 8, 8,
];

console.log(array.length);

removeDuplicates(array);

console.log(array);
let array2 = [1, 1, 2];
removeDuplicates(array2);
console.log(array2);
