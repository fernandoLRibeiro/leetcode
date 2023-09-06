/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  let charMap = {};

  for (let i = 0; i < s.length; ++i) {
    const char = s[i];
    charMap[char] = i;
  }

  let curPartSize = 0;
  let end = 0;
  let parts = [];

  for (let i = 0; i < s.length; ++i) {
    const char = s[i];
    end = Math.max(end, charMap[char]);
    curPartSize++;

    if (i === end) {
      parts.push(curPartSize);
      curPartSize = 0;
    }
  }

  return parts;
};
