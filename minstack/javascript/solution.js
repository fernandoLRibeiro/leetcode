var MinStack = function () {
  this.stack = [];
  this.minStack = [];
  // I'm using a custom length property to avoid having to shift
  // all values by 1 index at every push and pop (which would make this O(n) as opposed to O(1))
  // and to avoid having to type out this.stack.length-1 everytime I need to access the last index.
  //There is most likely a better way to do this, but this is what I came up with.
  this.length = 0;
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.length++;
  this.stack.push(val);

  if (this.minStack.length === 0) {
    this.minStack.push(val);
  } else {
    this.minStack.push(Math.min(val, this.minStack[this.length - 2]));
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.length--;
  this.stack.pop();
  this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack[this.length - 1];
};

let minStack = new MinStack();
console.log(minStack.push(-2));
console.log(minStack.push(0));
console.log(minStack.push(-3));
console.log(minStack.getMin());
console.log(minStack.pop());
console.log(minStack.top());
console.log(minStack.getMin());
/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
