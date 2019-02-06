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
* Does Path Exist
* Can be slow
* In-order - *Elements will be looked up from lowest to highest.*
* Pre-order - *Output can be easily used to recreate the tree.*
* Post-order - *Lowest level elements from left to right will be added first.*

[BFS vs DFS](https://stackoverflow.com/questions/9844193/what-is-the-time-and-space-complexity-of-a-breadth-first-and-depth-first-tree-tr)