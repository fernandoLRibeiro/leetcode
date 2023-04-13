/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
  let stringArray = s.split("");
  let stringSet = new Set();
  let left = 0;
  let res = 0;

  for (let right = 0; right < stringArray.length; ++right) {
    while (stringSet.has(stringArray[right])) {
      stringSet.delete(stringArray[left]);
      ++left;
    }
    stringSet.add(stringArray[right]);
    res = Math.max(res, right - left + 1);
  }
  return res;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
// expect 3
console.log(lengthOfLongestSubstring("bbbbb"));
// expect 1
console.log(lengthOfLongestSubstring("pwwkew"));
// expect 3
console.log(lengthOfLongestSubstring("aab"));
// expect 2
