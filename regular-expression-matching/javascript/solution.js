/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  let cache = new Array(s.length + 1)
    .fill()
    .map(() => new Array(p.length + 1).fill(undefined));

  cache[s.length][p.length] = true;

  const dfs = (i, j) => {
    if (cache[i][j] !== undefined) return cache[i][j];

    if (i >= s.length && j >= p.length) return true;

    if (j >= p.length) return false;

    const match = i < s.length && (s[i] === p[j] || p[j] === ".");

    if (j + 1 < p.length && p[j + 1] === "*") {
      cache[i][j] = dfs(i, j + 2) || (match && dfs(i + 1, j));

      return cache[i][j];
    }

    if (match) {
      cache[i][j] = dfs(i + 1, j + 1);
      return cache[i][j];
    }
    cache[i][j] = false;
    return false;
  };

  return dfs(0, 0);
};
