class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  get(idx) {
    if (idx >= this.length) {
      return null;
    }

    let currentNode = this.head;
    let counter = 0;
    while (counter < idx) {
      currentNode = currentNode.next;
      counter++
    }
    return currentNode;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(value, n) {
    // if n is greater than or equal to the length of the list, just append the value as a newNode.
    if (n >= this.length) {
      return this.append(value);
    }
    // if n is less than or equal to zero, just prepend the value as a newNode.
    if (n <= 0) {
      return this.prepend(value);
    }
    // traverse the list incrementing n by one each time.
    let currentNode = this.get(n - 1);
    // when we reach n - 1, create a new node with the input value.
    let newNode = new Node(value)
    // make the new node's next point to (n - 1)' next.
    let nextNode = currentNode.next;
    newNode.next = nextNode;
    // make (n - 1)'s next point to the new node.
    currentNode.next = newNode;
    this.length++
    return this
  }

  remove(idx) {
    if (idx >= this.length) {
      throw new Error('No value exists at that index');
    }

    if (idx === 0) {
      this.head = this.head.next;
      return this.head;
    }

    let previousNode = this.get(idx - 1);
    let nodeToRemove = previousNode.next;
    previousNode.next = nodeToRemove.next;

    if (idx >= this.length) {
      this.tail = previousNode;
    }

    this.length--;
    return nodeToRemove;
  }

  inspect() {
    let list = [];
    let currentNode = this.head;
    while (currentNode) {
      list.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(list);
  }
}