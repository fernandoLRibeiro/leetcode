/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  let leftMin = 0;
  let leftMax = 0;

  for (char of s) {
    if (char === "(") {
      leftMin++;
      leftMax++;
    } else if (char === ")") {
      leftMin--;
      leftMax--;
    } else {
      leftMin--;
      leftMax++;
    }

    if (leftMax < 0) {
      return false;
    }

    if (leftMin < 0) {
      leftMin = 0;
    }
  }
  return leftMin === 0;
};
