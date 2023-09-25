/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  const helper = (x, n) => {
    let res;
    if (x === 0) return 0;

    if (n === 0) return 1;

    res = helper(x * x, Math.trunc(n / 2));
    if (n % 2) return x * res;

    return res;
  };

  let res = helper(x, Math.abs(n));

  if (n >= 0) {
    return res;
  }

  return 1 / res;
};
