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
 * @return {number[]}
 */
var rightSideView = function (root) {
  const res = [];
  const q = [root];

  while (q.length > 0) {
    let rightSide = null;
    for (let i = q.length - 1; i >= 0; i--) {
      const node = q.shift();
      if (node) {
        rightSide = node;
        q.push(node.left);
        q.push(node.right);
      }
    }
    if (rightSide) res.push(rightSide.val);
  }
  return res;
};
