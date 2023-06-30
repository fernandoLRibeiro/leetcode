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
 * @return {number}
 */
var goodNodes = function (root) {
  const dfs = function (node, maxVal) {
    if (!node) {
      return 0;
    }
    let res;

    if (node.val >= maxVal) res = 1;
    else res = 0;
    maxVal = Math.max(maxVal, node.val);
    res += dfs(node.left, maxVal);
    res += dfs(node.right, maxVal);
    return res;
  };
  return dfs(root, root.val);
};
