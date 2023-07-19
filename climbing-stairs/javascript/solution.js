/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let one = 1;
  let two = 1;
  let temp;
  for (let i = 0; i < n - 1; ++i) {
    temp = one;
    one = one + two;
    two = temp;
  }
  return one;
};
