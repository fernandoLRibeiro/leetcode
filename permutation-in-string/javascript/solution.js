/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let sortedS1 = s1.split("").sort().join("");
  let left = 0;
  let right = s1.length;
  let comparisonSlice;

  while (right <= s2.length) {
    comparisonSlice = s2.slice(left, right).split("").sort().join("");
    console.log(comparisonSlice, sortedS1);
    // Seems like a bad way to do it
    if (s2.slice(left, right).split("").sort().join("") !== sortedS1) {
      left++;
      right++;
    } else {
      return true;
    }
  }
  return false;
};

console.log(checkInclusion("ab", "eidbaooo"));
// expect true
console.log(checkInclusion("ab", "eidboaoo"));
// expect false
console.log(checkInclusion("adc", "dcda"));
