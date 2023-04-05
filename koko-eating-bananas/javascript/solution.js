/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let hi = Math.max(...piles);
  let lo = 1;
  let res = hi;

  do {
    let k = Math.floor((lo + hi) / 2);
    hours = 0;

    for (let i = 0; i < piles.length; ++i) {
      hours += Math.ceil(piles[i] / k);
    }

    if (hours <= h) {
      res = Math.min(res, k);
      hi = k - 1;
    }

    if (hours > h) {
      lo = k + 1;
    }
  } while (lo <= hi);
  return res;
};

console.log(minEatingSpeed([3, 6, 7, 11], 8));
// expect 4
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5));
// expect 30
console.log(minEatingSpeed([30, 11, 23, 4, 20], 6));
// expect 23
