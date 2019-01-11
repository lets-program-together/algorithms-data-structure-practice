### Edge List
Shows the connection of a graph.
```javascript
const = graph = [
  [0, 2], // represents the edge connecting zero and two.
  [2, 3], // represents the edge connecting two and three.
  [2, 1], // ... 
  [1, 3]  // ... 
]
```

### Adjacent List
Shows all the adjacent values of a node. The value of the node is represented by the array.
```javascript
const = graph = [
  [2],       // Node value zero has one adjacent node of 2.
  [2, 3],    // Node value one has adjacent nodes 2 and 3.
  [0, 1, 3], // Node value two has adjacent nodes 1, 3, and 0.
  [1, 2]     // Node value three has adjacent nodes 1 and 2.
]
```

### Adjacent Matrix
Shows all the node values that the currect node values have a connection to.
```javascript
const = graph = [
  [0,0,1,0], // Node value of zero has a connection with node value 2.
  [0,0,1,1], // Node value of one has connections with node value 2 and 3.
  [1,1,0,1], // Node value of two has connections with 0, 1, and 3.
  [0,1,1,0]  // Node value of three has connections with 1 and 2.
]
```