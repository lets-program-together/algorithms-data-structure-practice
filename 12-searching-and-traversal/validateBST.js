/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var isValidNode = function (node, lowest, highest) {
  if (node === null) {
    return true
  }

  if (lowest !== null && node.val <= lowest ||
    highest !== null && node.val >= highest) {
    return false
  }

  return isValidNode(node.left, lowest, node.val) && isValidNode(node.right, node.val, highest)
}

var isValidBST = function (root) {
  return isValidNode(root, null, null)
};