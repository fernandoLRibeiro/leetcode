/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let sumGas = 0;
  let sumCost = 0;

  for (let i = 0; i < gas.length; ++i) {
    sumGas += gas[i];
    sumCost += cost[i];
  }

  if (sumCost > sumGas) {
    return -1;
  }

  let total = 0;
  let res = 0;

  for (let i = 0; i < gas.length; ++i) {
    total += gas[i] - cost[i];

    if (total < 0) {
      total = 0;
      res = i + 1;
    }
  }

  return res;
};
