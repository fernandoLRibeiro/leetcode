/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k, stack = []) {
  while (k--) {
    root = moveLeft(root, stack);
    if (k === 0) return root.val;

    root = root.right;
  }
};

const moveLeft = function (root, stack) {
  while (root !== null) {
    stack.push(root);
    root = root.left;
  }
  return stack.pop();
};
