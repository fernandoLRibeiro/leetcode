var removeElement = function (nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    nums[k] = nums[i];
    if (nums[i] !== val) {
      k++;
    }
  }
  nums.splice(k, nums.length - k);
  return k;
};

let testArray1 = [3, 2, 2, 3];

let testArray2 = [0, 1, 2, 2, 3, 0, 4, 2];

console.log(removeElement(testArray1, 3), testArray1);

console.log(removeElement(testArray2, 2), testArray2);
