/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num1 === "0" || num2 === "0") {
    return "0";
  }
  let res = new Array(num1.length + num2.length).fill(0);
  num1 = num1.split("").reverse().join("");
  num2 = num2.split("").reverse().join("");

  for (let i = 0; i < num1.length; ++i) {
    for (let j = 0; j < num2.length; ++j) {
      const digit = num1[i] * num2[j];
      res[i + j] += digit;
      res[i + j + 1] += Math.trunc(res[i + j] / 10);
      res[i + j] = res[i + j] % 10;
    }
  }
  res.reverse();
  let start = 0;

  while (start < res.length && res[start] === 0) {
    start++;
  }

  return res.slice(start).join("");
};
