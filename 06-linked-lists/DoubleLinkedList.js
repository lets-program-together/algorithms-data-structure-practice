class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
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
    newNode.previous = this.tail;

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  pop() {
    let nodeToRemove = this.tail;
    nodeToRemove.previous.next = null;
    this.tail = nodeToRemove.previous;

    this.length--;
    return nodeToRemove;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;

    this.head.previous = newNode;
    this.head = newNode;

    this.length++;
    return this;
  }

  decapitate() {
    let nodeToRemove = this.head;
    nodeToRemove.next.previous = null;
    this.head = nodeToRemove.next;

    this.length--;
    return nodeToRemove;
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
    let nextNode = currentNode.next;
    // when we reach n - 1, create a new node with the input value.
    // set the newNode's next and previous to the appropriate values nodes.
    let newNode = new Node(value)
    newNode.next = nextNode;
    newNode.previous = currentNode;

    // update previousNode and nextNode pointer to correctly point to newNode.
    nextNode.previous = newNode;
    currentNode.next = newNode;
    this.length++
    return this
  }

  remove(idx) {
    if (idx >= this.length) {
      throw new Error('No value exists at that index');
    }
    if (idx === 0) {
      return this.decapitate();
    }
    if (idx === (this.length - 1)) {
      return this.pop();
    }

    // find the node to remove and update pointers to skip node.
    let nodeToRemove = this.get(idx);
    nodeToRemove.previous.next = nodeToRemove.next;
    nodeToRemove.next.previous = nodeToRemove.previous;

    this.length--;
    return nodeToRemove

  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }

    let first = this.head;
    let second = first.next;

    while (second) {
      let tmp = second.next;
      second.next = first;
      second.previous = tmp
      first = second;
      second = tmp;
    }
    this.tail = this.head;
    this.tail.previous = this.head.next;

    this.head.next = null;
    this.head = first;

    return this;
  }

  inspect() {
    let list = [];
    let currentNode = this.head;
    while (currentNode) {
      list.push({
        value: currentNode.value,
        next: currentNode.next && currentNode.next.value,
        previous: currentNode.previous && currentNode.previous.value
      });
      currentNode = currentNode.next;
    }
    console.log(list, `Length: ${list.length}`);
  }
}