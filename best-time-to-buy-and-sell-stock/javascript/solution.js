/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {
  let lo = 0;
  let hi = 1;
  let profit = 0;
  while (hi <= prices.length - 1) {
    if (prices[lo] < prices[hi]) {
      profit = Math.max(profit, prices[hi] - prices[lo]);
    } else if (prices[lo] >= prices[hi]) {
      lo = hi;
    }
    hi++;
  }
  return profit;
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// expect 5
console.log(maxProfit([7, 6, 4, 3, 1]));
// expect 0
console.log(maxProfit([2, 4, 1]));
// expect 2
console.log(maxProfit([1, 2]));
// expect 1
