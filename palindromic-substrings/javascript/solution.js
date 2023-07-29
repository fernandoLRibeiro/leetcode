/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  const res = [];
  for (let i = 0; i < s.length; ++i) {
    let r = i;
    let l = i;

    while (l >= 0 && r < s.length && s[l] == s[r]) {
      res.push(s.slice(l, r + 1));
      l--;
      r++;
    }

    l = i;
    r = i + 1;
    while (l >= 0 && s.length && s[l] === s[r]) {
      res.push(s.slice(l, r + 1));
      l--;
      r++;
    }
  }

  return res.length;
};

console.log(countSubstrings("abc"));
console.log(countSubstrings("aaa"));
console.log(countSubstrings("hello"));
console.log(countSubstrings("aba"));
