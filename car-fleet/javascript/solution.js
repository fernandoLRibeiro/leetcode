/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
  let pair = [];
  for (let i = 0; i < position.length; ++i) {
    pair.push([position[i], speed[i]]);
  }
  pair = pair.sort(function (a, b) {
    return b[0] - a[0];
  });
  let stack = [];
  for (let i = 0; i < pair.length; ++i) {
    let [position, speed] = pair[i];
    stack.push((target - position) / speed);
    if (
      stack.length >= 2 &&
      stack[stack.length - 1] <= stack[stack.length - 2]
    ) {
      stack.pop();
    }
  }
  return stack.length;
};
