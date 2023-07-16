/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const digitHash = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  const res = [];
  const backtrack = (i, curStr) => {
    if (curStr.length === digits.length) {
      res.push(curStr);
      return;
    }
    for (char of digitHash[digits[i]]) {
      backtrack(i + 1, curStr + char);
    }
  };
  if (digits) {
    backtrack(0, "");
  }
  return res;
};
