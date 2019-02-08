## Algorithms: Searching

### Linear Search
| Best Case | Worst Case |
|-----------|------------|
|    O(1)   |    O(n)    |


### Binary Search
*Requirement: data is sorted*

| Best Case | Worst Case |
|-----------|------------|
|    O(1)   |  O(log n)  |

## Algorithms: (Graph / Tree) Traversal

### Breadth-First Search

* Shortest Path
* Closer Nodes
* Requires more resources in-memory since nodes from each level needs to be kept in memory.

### Depth-First Search
* Less Memory
* Checks to see if a path exists between one node and another.
* Can be slow
* Space complexity is dependent on height of tree.
* Tree types of DFS:
  * In-order - *Elements will be looked up after traversing left and before traversing right*
  * Pre-order - *Elements will be looked before traversing traverse the tree.*
  * Post-order - *Elements will be looked up after traversing*

[BFS vs DFS](https://stackoverflow.com/questions/9844193/what-is-the-time-and-space-complexity-of-a-breadth-first-and-depth-first-tree-tr)