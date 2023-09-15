/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const MAX = 2 ** 31 - 1;
  const MIN = -(2 ** 31);

  let res = 0;

  while (x) {
    let digit = x % 10;
    x = Math.trunc(x / 10);

    if (res > MAX / 10 || (res === MAX && digit >= MAX % 10)) {
      return 0;
    }
    if (res < MIN / 10 || (res === MIN && digit <= MIN % 10)) {
      return 0;
    }
    res = res * 10 + digit;
  }
  return res;
};
