/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const wordSet = new Set(wordDict);
  const memo = new Array(s.length).fill(null);
  const start = 0;

  return canBreak(s, wordSet, start, memo);
};

var canBreak = (s, wordSet, start, memo) => {
  if (s.length === start) {
    return true;
  }

  if (memo[start] !== null) {
    return memo[start];
  }

  return dfs(s, wordSet, start, memo);
};

var dfs = (s, wordSet, start, memo) => {
  for (let end = start + 1; end <= s.length; ++end) {
    const word = s.slice(start, end);

    const _canBreak = wordSet.has(word) && canBreak(s, wordSet, end, memo);

    if (_canBreak) {
      memo[start] = true;
      return true;
    }
  }
  memo[start] = false;
  return false;
};
