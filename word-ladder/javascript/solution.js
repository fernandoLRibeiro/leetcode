/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) {
    return 0;
  }

  let neighbors = {};

  if (!wordList.includes(beginWord)) {
    wordList.push(beginWord);
  }

  for (let word of wordList) {
    for (let j = 0; j < word.length; ++j) {
      let pattern = word.substring(0, j) + "*" + word.substring(j + 1);
      if (!neighbors[pattern]) {
        neighbors[pattern] = [];
      }

      neighbors[pattern].push(word);
    }
  }

  const visit = new Set(beginWord);
  let queue = [beginWord];
  let res = 1;

  while (queue.length) {
    const currLength = queue.length;
    for (let i = 0; i < currLength; ++i) {
      const word = queue.shift();

      if (word === endWord) {
        return res;
      }

      for (let j = 0; j < word.length; ++j) {
        let pattern = word.substring(0, j) + "*" + word.substring(j + 1);

        for (let neighborWord of neighbors[pattern]) {
          if (!visit.has(neighborWord)) {
            visit.add(neighborWord);
            queue.push(neighborWord);
          }
        }
      }
    }
    res++;
  }
  return 0;
};
