const TrieNode = function () {
  this.children = {};
  this.isWord = false;
};

TrieNode.prototype.insert = function (word) {
  let current = this;
  for (let i = 0; i < word.length; ++i) {
    if (!current.children[word[i]]) {
      current.children[word[i]] = new TrieNode();
    }
    current = current.children[word[i]];
  }
  current.isWord = true;
};

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  let root = new TrieNode();

  for (let i = 0; i < words.length; ++i) {
    root.insert(words[i]);
  }

  const rows = board.length;
  const cols = board[0].length;
  let res = new Set();
  let visit = new Set();

  const dfs = function (r, c, node, w) {
    if (
      r < 0 ||
      c < 0 ||
      r === rows ||
      c === cols ||
      visit.has(`${r}, ${c}`) ||
      !node.children[board[r][c]]
    ) {
      return;
    }
    visit.add(`${r}, ${c}`);

    node = node.children[board[r][c]];
    w += board[r][c];

    if (node.isWord) {
      res.add(w);
    }
    dfs(r - 1, c, node, w);
    dfs(r + 1, c, node, w);
    dfs(r, c - 1, node, w);
    dfs(r, c + 1, node, w);
    visit.delete(`${r}, ${c}`);
  };
  for (let r = 0; r < rows; ++r) {
    for (let c = 0; c < cols; ++c) {
      dfs(r, c, root, "");
    }
  }
  const output = [];

  res.forEach((value) => output.push(value));
  return output;
};
