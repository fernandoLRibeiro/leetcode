var longestCommonPrefix = function (strs) {
  let prefix = "";

  for (let i = 1; i <= strs[0].length; i++) {
    if (strs.every((str) => str.startsWith(strs[0].slice(0, i)))) {
      prefix = strs[0].slice(0, i);
    }
  }

  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["a"]));
console.log(longestCommonPrefix(["flower"]));
