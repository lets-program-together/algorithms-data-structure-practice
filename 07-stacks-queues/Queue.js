class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.last) {
      this.last.next = newNode;
    }

    this.last = newNode;

    if (!this.first) {
      this.first = this.last;
    }
    this.length++;
    return this;

  }
  dequeue() {
    const output = this.first.value;
    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    this.length--;
    return output;
  }
  //isEmpty;
  isEmpty() {
    return this.length <= 0;
  }
}

module.exports = Queue;

