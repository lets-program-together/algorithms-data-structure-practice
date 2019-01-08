## Trees

### Binary Trees:
* Each node can have 0-2 child nodes.
  * Perfect Binary Tree: all nodes have two children (with the exception of leaf-nodes) and all leaves are at the same level.
    * O(log n): given N, how many steps needed?
  * Binary Search Tree:
    | **action* | **Big-O** |
    | lookup    | O(log N) |
    | insert    | O(log N) |
    | delete    | O(log N) |
    * Binary search trees allow us to preserve relationships.
  * Unbalanced Search Trees loses the search optimization and can quickly become linked lists.


#### Pros:
* better than O(n), O(log N)
* ordered
* flexible Size

#### Cons:
* No O(1) Operations


#### AVL Trees:
#### R&B Trees;