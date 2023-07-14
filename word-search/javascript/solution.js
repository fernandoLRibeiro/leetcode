/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let rows = board.length;
  let columns = board[0].length;
  let visited = new Set();
  const dfs = (r, c, index) => {
    if (index === word.length) {
      return true;
    }
    if (
      r < 0 ||
      c < 0 ||
      r >= rows ||
      c >= columns ||
      word[index] !== board[r][c] ||
      visited.has(`${r}, ${c}`)
    ) {
      return false;
    }
    visited.add(`${r}, ${c}`);
    const res =
      dfs(r + 1, c, index + 1) ||
      dfs(r - 1, c, index + 1) ||
      dfs(r, c + 1, index + 1) ||
      dfs(r, c - 1, index + 1);
    visited.delete(`${r}, ${c}`);
    return res;
  };

  for (let r = 0; r < rows; ++r) {
    for (let c = 0; c < columns; ++c) {
      if (dfs(r, c, 0)) return true;
    }
  }

  return false;
};
