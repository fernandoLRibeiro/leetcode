const isValid = (string) => {
  const splitArray = string.split("");
  const charactersArray = [];

  for (i = 0; i < splitArray.length; i++) {
    if (
      splitArray[i] === "(" ||
      splitArray[i] === "[" ||
      splitArray[i] === "{"
    ) {
      charactersArray.unshift(splitArray[i]);
    } else if (splitArray[i] === ")") {
      if (charactersArray[0] === "(") {
        charactersArray.splice(0, 1);
      } else {
        return false;
      }
    } else if (splitArray[i] === "]") {
      if (charactersArray[0] === "[") {
        charactersArray.splice(0, 1);
      } else {
        return false;
      }
    } else if (splitArray[i] === "}") {
      if (charactersArray[0] === "{") {
        charactersArray.splice(0, 1);
      } else {
        return false;
      }
    }
  }
  if (charactersArray.length > 0) {
    return false;
  } else {
    return true;
  }
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([{}])"));
console.log(isValid("[]"));
console.log(isValid("{[}]"));
