var isPalindrome = function (x) {
  const str = x.toString();
  let reverse = "";

  for (let i = str.length; i >= 0; i--) {
    reverse += str.charAt(i);
  }
  if (reverse === str) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
console.log(isPalindrome(1001));
console.log(isPalindrome(1010));
