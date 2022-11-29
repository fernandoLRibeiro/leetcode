var removeElement = function (nums, val) {
  let i = 0;

  while (i < nums.length) {
    if (nums[i] === val) {
      nums.splice(i, 1);
    } else {
      i++;
    }
  }

  return nums.length;
};

let testArray1 = [3, 2, 2, 3];

let testArray2 = [0, 1, 2, 2, 3, 0, 4, 2];

console.log(removeElement(testArray1, 3), testArray1);

console.log(removeElement(testArray2, 2), testArray2);
