/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let rob1 = 0;
  let rob2 = 0;
  
  for (let n = 0; n < nums.length; ++n) {
    let temp = Math.max(nums[n] + rob1, rob2);
    rob1 = rob2;
    rob2 = temp;
  }
  return rob2;
};
