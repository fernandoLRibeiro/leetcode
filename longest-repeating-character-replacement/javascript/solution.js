/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let left = 0;
  let right = 0;
  let res = 0;

  let characterHash = {};

  do {
    if (characterHash[s[right]] !== undefined) {
      characterHash[s[right]] = characterHash[s[right]] + 1;
    } else {
      characterHash[s[right]] = 1;
    }

    let maxValue = Math.max.apply(null, Object.values(characterHash));

    if (right - left + 1 - maxValue <= k) {
      res = Math.max(res, right - left + 1);
      right++;
    } else {
      characterHash[s[left]] = characterHash[s[left]] - 1;
      characterHash[s[right]] = characterHash[s[right]] - 1;
      left++;
    }
  } while (left <= right && right < s.length);
  return res;
};

console.log(characterReplacement("ABAB", 2));
// expect 4
console.log(characterReplacement("AABABBA", 1));
// expect 4
