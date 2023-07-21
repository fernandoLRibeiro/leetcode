/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  let nodeHash = {};

  const clone = (node) => {
    if (nodeHash[node.val] !== undefined) {
      return nodeHash[node.val];
    }

    let copy = new Node(node.val);
    nodeHash[node.val] = copy;

    for (neighbor of node.neighbors) {
      copy.neighbors.push(clone(neighbor));
    }

    return copy;
  };

  if (!node) {
    return null;
  }

  return clone(node);
};
