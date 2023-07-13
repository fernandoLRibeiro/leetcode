/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  return dfs(candidates, target);
};

const dfs = (
  candidates,
  target,
  index = 0,
  combination = [],
  combinations = []
) => {
  if (target < 0) return combinations;

  if (target === 0) {
    if (combination.length) combinations.push(combination.slice());

    return combinations;
  }

  for (let i = index; i < candidates.length; ++i) {
    if (index < i && candidates[i - 1] === candidates[i]) continue;

    combination.push(candidates[i]);
    dfs(candidates, target - candidates[i], i + 1, combination, combinations);
    combination.pop();
  }
  return combinations;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
