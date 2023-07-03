/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (!preorder.length || !inorder.length) {
    return null;
  }

  return dfs(preorder, inorder);
};

const dfs = function (preorder, inorder) {
  const { leftInOrder, mid, rightInOrder } = getPointers(preorder, inorder);
  const root = new TreeNode(inorder[mid]);

  root.left = buildTree(preorder, leftInOrder);
  root.right = buildTree(preorder, rightInOrder);

  return root;
};

const getPointers = function (preorder, inorder) {
  const next = preorder.shift();
  const mid = inorder.indexOf(next);
  const leftInOrder = inorder.slice(0, mid);
  const rightInOrder = inorder.slice(mid + 1);

  return { leftInOrder, mid, rightInOrder };
};
