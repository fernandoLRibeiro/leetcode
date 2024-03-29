function TrieNode() {
  this.children = {};
  this.endOfWord = false;
}

var Trie = function () {
  this.root = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let current = this.root;
  for (character of word) {
    if (!current.children[character]) {
      current.children[character] = new TrieNode();
    }
    current = current.children[character];
  }
  current.endOfWord = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let current = this.root;

  for (character of word) {
    if (!current.children[character]) {
      return false;
    }
    current = current.children[character];
  }
  return current.endOfWord;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let current = this.root;

  for (character of prefix) {
    if (!current.children[character]) {
      return false;
    }
    current = current.children[character];
  }
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
