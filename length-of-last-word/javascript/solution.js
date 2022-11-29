var lengthOfLastWord = function (s) {
  sArr = s.split(" ");

  for (let i = sArr.length - 1; i >= 0; i--) {
    console.log(sArr[i]);
    if (sArr[i].length > 0) {
      return sArr[i].length;
    }
  }
};

console.log(lengthOfLastWord("Hello World"));

console.log(lengthOfLastWord("   fly me   to   the moon  "));

console.log(lengthOfLastWord("a"));
