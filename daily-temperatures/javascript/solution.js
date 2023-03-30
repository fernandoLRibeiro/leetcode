/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let out = new Array(temperatures.length).fill(0);
  let stack = [];

  for (let i = 0; i < temperatures.length; ++i) {
    while (
      stack.length > 0 &&
      temperatures[i] > stack[stack.length - 1].temperature
    ) {
      let item = stack.pop();
      out[item.index] = i - item.index;
    }
    stack.push({
      temperature: temperatures[i],
      index: i,
    });
  }
  return out;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
// expect [1,1,4,2,1,1,0,0]
console.log(dailyTemperatures([55, 38, 53, 81, 61, 93, 97, 32, 43, 78]));
// expect [3,1,1,2,1,1,0,1,1,0]
