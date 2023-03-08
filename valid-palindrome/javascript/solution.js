/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let regex = /[A-Za-z0-9]/g;
  let sArray = s.toLowerCase().match(regex) || [];

  if (sArray.length === 0) {
    return true;
  }

  let startPointer = 0;
  let endPointer = sArray.length - 1;

  while (startPointer < endPointer) {
    if (sArray[startPointer] !== sArray[endPointer]) {
      return false;
    }
    startPointer++;
    endPointer--;
  }
  return true;
};

//expect true
console.log(isPalindrome("A man, a plan, a canal: Panama"));
//expect false
console.log(isPalindrome("race a car"));
//expect true
console.log(isPalindrome(" "));
//expect true
console.log(isPalindrome("aa"));
//expect false
console.log(isPalindrome("0P"));
