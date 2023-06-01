/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (t.length > s.length) {
    return "";
  }
  if (t.length === 0) {
    return "";
  }

  let tMap = {};
  let window = {};

  for (let i = 0; i < t.length; ++i) {
    tMap[t[i]] = tMap[t[i]] ? tMap[t[i]] + 1 : 1;
  }
  let need = t.length;
  let have = 0;
  let l = 0;
  let res = [-1, -1];
  let resLen = Number.POSITIVE_INFINITY;

  for (let r = 0; r < s.length; ++r) {
    window[s[r]] = window[s[r]] ? window[s[r]] + 1 : 1;

    if (tMap[s[r]] && window[s[r]] <= tMap[s[r]]) {
      have += 1;
    }

    while (have === need) {
      if (r - l + 1 < resLen) {
        res = [l, r];
        resLen = r - l + 1;
      }
      window[s[l]] = window[s[l]] - 1;
      if (tMap[s[l]] && window[s[l]] < tMap[s[l]]) {
        have--;
      }
      l++;
    }
  }
  if (resLen < Number.POSITIVE_INFINITY) {
    return s.slice(res[0], res[1] + 1);
  }
  return "";
};

console.log(minWindow("ADOBECODEBANC", "ABC"));
console.log(minWindow("a", "a"));
console.log(minWindow("a", "aa"));
console.log(minWindow("aa", "aa"));
