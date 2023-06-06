/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head, map = new Map()) {
  if (!head) return null;
  if (map.has(head)) return map.get(head);

  const clone = new Node(head.val);

  map.set(head, clone);
  clone.next = copyRandomList(head.next, map);
  clone.random = copyRandomList(head.random, map);

  return clone;
};
