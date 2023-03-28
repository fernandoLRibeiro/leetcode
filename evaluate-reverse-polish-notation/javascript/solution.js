/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let operandStack = [];
  let total = 0;

  if (tokens.length === 1) {
    return parseInt(tokens[0]);
  }

  for (let i = 0; i < tokens.length; ++i) {
    if (isNaN(parseInt(tokens[i]))) {
      const b = operandStack.pop();
      const a = operandStack.pop();
      switch (tokens[i]) {
        case "+":
          total = a + b;
          operandStack.push(total);
          break;
        case "-":
          total = a - b;
          operandStack.push(total);
          break;
        case "*":
          total = a * b;
          operandStack.push(total);
          break;
        case "/":
          total = Math.trunc(a / b);
          operandStack.push(total);
        default:
          break;
      }
    } else {
      operandStack.push(parseInt(tokens[i]));
    }
  }

  return total;
};

console.log(evalRPN(["2", "1", "+", "3", "*"]));
// expect 9
console.log(evalRPN(["4", "13", "5", "/", "+"]));
//expect 6
console.log(
  evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
);
// expect 22
