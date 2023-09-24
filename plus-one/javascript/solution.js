/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let carry = 1;
  let i = digits.length - 1;

  while (carry) {
    if (i >= 0) {
      if (digits[i] === 9) {
        digits[i] = 0;
      } else {
        digits[i]++;
        carry = 0;
      }
    } else {
      digits.unshift(1);
      carry = 0;
    }
    i--;
  }

  return digits;
};
