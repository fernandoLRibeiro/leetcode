/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  hashGroup = {};
  for (let i = 0; i < strs.length; i++) {
    let sortedString = strs[i].split("").sort().toString();
    if (hashGroup[sortedString] === undefined) {
      hashGroup[sortedString] = [strs[i]];
    } else {
      hashGroup[sortedString] = [...hashGroup[sortedString], strs[i]];
    }
  }
  return Object.values(hashGroup);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));
console.log(groupAnagrams(["", "", ""]));
