/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
  let prices = new Array(n).fill(Infinity);
  prices[src] = 0;

  for (i = 0; i < k + 1; ++i) {
    let tmpPrices = prices.slice();
    for ([source, destination, price] of flights) {
      if (prices[source] === Infinity) {
        continue;
      }
      if (prices[source] + price < tmpPrices[destination]) {
        tmpPrices[destination] = prices[source] + price;
      }
    }
    prices = tmpPrices;
  }
  if (prices[dst] === Infinity) {
    return -1;
  }
  return prices[dst];
};
