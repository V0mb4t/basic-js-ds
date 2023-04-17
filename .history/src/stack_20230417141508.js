const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.items = []
  }
  push(el) {
   return this.items.push(el)
  }

  pop() {
    return this.items.pop()
  }

  peek() {
      let lastChild = this.items[this.items.length - 1]
      return lastChild
  }
}
module.exports = {
  Stack
};
