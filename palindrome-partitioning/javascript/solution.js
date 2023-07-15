/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  let res = [];
  let partition = [];

  const dfs = (index) => {
    console.log(index, s.length);
    if (index >= s.length) {
      res.push(partition.slice());
      return;
    }
    // possible bug  \/
    for (let j = index; j >= index && j <= s.length; ++j) {
      if (isPalindrome(s, index, j)) {
        partition.push(s.slice(index, j + 1));
        dfs(j + 1);
        partition.pop();
      }
    }
  };
  dfs(0);
  return res;
};

const isPalindrome = (string, l, r) => {
  while (l < r) {
    if (string[l] !== string[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
};

console.log(partition("aab"));
