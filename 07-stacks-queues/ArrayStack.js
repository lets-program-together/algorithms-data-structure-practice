class Node {
  constructor(value) {
    this.value = value;
  }
}

class Stack {
  constructor() {
    this.stack = [];
  }
  peek() {
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    return this.stack.push(newNode);
  }
  pop() {
    return this.stack.pop();
  }

  length() {
    return this.stack.length
  }

  isEmpty() {
    return this.length <= 0
  }
}