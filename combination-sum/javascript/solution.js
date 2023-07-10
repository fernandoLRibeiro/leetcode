/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let res = [];

  function dfs(i, cur, total) {
    if (total === target) {
      res.push(cur.slice(0));
      return;
    }
    if (i >= candidates.length || total > target) {
      return;
    }
    candidates[i];

    cur.push(candidates[i]);
    dfs(i, cur, total + candidates[i]);
    cur.pop();
    dfs(i + 1, cur, total);
  }
  dfs(0, [], 0);
  return res;
};

console.log(combinationSum([2, 3, 6, 7], 7));
// expect [[2, 2, 3], [7]]

console.log(combinationSum([2, 3, 5], 8));

console.log(combinationSum([2], 1));
