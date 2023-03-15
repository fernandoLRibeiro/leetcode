const isValid = (string) => {
  const splitArray = string.split("");
  const openingStack = [];
  const parenthesisHash = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (i = 0; i < splitArray.length; i++) {
    if (
      splitArray[i] === "(" ||
      splitArray[i] === "[" ||
      splitArray[i] === "{"
    ) {
      openingStack.unshift(splitArray[i]);
    } else {
      if (parenthesisHash[splitArray[i]] === openingStack[0]) {
        openingStack.splice(0, 1);
      } else {
        return false;
      }
    }
  }
  if (openingStack.length > 0) {
    return false;
  }

  return true;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([{}])"));
console.log(isValid("[]"));
console.log(isValid("{[}]"));
