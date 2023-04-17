const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
      this.items = []
  }

  getUnderlyingList() {
    let obj = null;
    for (let i = this.items.length - 1; i >= 0; i--) {
      obj = { value: this.items[i], next: obj };
    }
    return obj;
  }

  enqueue(value) {
    return this.items.push(value)
  }

  dequeue() {
    return this.items.shift()
  }
}



module.exports = {
  Queue
};