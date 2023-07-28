/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let res = "";
  resLen = 0;

  for (let i = 0; i < s.length; ++i) {
    let l = i;
    let r = i;

    while (l >= 0 && r < s.length && s[l] === s[r]) {
      if (r - l + 1 > resLen) {
        res = s.slice(l, r + 1);
        resLen = res.length;
      }

      l--;
      r++;
    }

    l = i;
    r = i + 1;
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      if (r - l + 1 > resLen) {
        res = s.slice(l, r + 1);
        resLen = res.length;
      }

      l--;
      r++;
    }
  }

  return res;
};
