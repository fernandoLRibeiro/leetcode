const TrieNode = function () {
  this.children = {};
  this.word = false;
};

var WordDictionary = function () {
  this.root = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let current = this.root;
  for (character of word) {
    if (!current.children[character]) {
      current.children[character] = new TrieNode();
    }
    current = current.children[character];
  }
  current.word = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  const dfs = function (j, root) {
    let current = root;
    for (let i = j; i < word.length; ++i) {
      const character = word[i];

      if (character === ".") {
        for (child of Object.values(current.children)) {
          if (dfs(i + 1, child)) {
            return true;
          }
        }
        return false;
      } else {
        if (!current.children[character]) {
          return false;
        }
        current = current.children[character];
      }
    }
    return current.word;
  };
  return dfs(0, this.root);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
