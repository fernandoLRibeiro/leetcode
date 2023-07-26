/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  return Math.max(
    houseRobber(nums.slice(0, nums.length - 1)),
    houseRobber(nums.slice(1))
  );
};

const houseRobber = (nums) => {
  let rob1 = 0;
  let rob2 = 0;
  for (let n = 0; n < nums.length; ++n) {
    let temp = Math.max(rob1 + nums[n], rob2);
    rob1 = rob2;
    rob2 = temp;
  }
  return rob2;
};
