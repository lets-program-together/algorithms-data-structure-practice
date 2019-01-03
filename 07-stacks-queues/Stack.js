class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.bottom = newNode;
    }
    newNode.next = this.top;
    this.top = newNode;
    this.length++;
    return this
  }
  pop() {
    if (this.isEmpty()) {
      return this.top
    }
    let top = this.top;
    this.top = this.top.next;
    if (top == this.bottom) {
      this.bottom = null;
    }
    this.length--;
    return top;
  }

  isEmpty() {
    return this.length <= 0
  }
}