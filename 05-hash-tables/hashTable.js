class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = []
    }
    this.data[address].push([key, value])
  }

  get(key) {
    let address = this._hash(key);
    if (this.data[address]) {
      for (let index = 0; index < this.data[address].length; index++) {
        if (this.data[address][index][0] === key) {
          return this.data[address][index][1]
        }
      }
    }
  }

  keys() {
    let keys = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        for (let j = 0; j < this.data[i].length; j++) {
          const element = this.data[i][j]
          keys.push(element[0])
        }
      }
    }
    return keys
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
// myHashTable.get('grapes')
myHashTable.set('apples', 9)
// myHashTable.get('apples')
