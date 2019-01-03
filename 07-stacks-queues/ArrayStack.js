class Stack {
  constructor() {
    this.stack = [];
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }
  push(value) {
    return this.stack.push(value);
    return this;
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