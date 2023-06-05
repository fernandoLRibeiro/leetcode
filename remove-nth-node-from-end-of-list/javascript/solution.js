/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

var getLength = function (head) {
  let node = head;
  let length = 1;
  while (node.next !== (undefined || null)) {
    node = node.next;
    length++;
  }
  return length;
};

var removeNthFromEnd = function (head, n) {
  const stopAt = getLength(head) - n;
  let currentNode = head;
  let prevNode;

  if (stopAt === 0) {
    if (currentNode.next) {
      head = currentNode.next;
    } else {
      head = null;
    }

    return head;
  }

  for (let i = 0; i < stopAt; ++i) {
    prevNode = currentNode;
    currentNode = currentNode.next;
  }

  if (prevNode) {
    if (currentNode.next) {
      prevNode.next = currentNode.next;
      currentNode.next = null;
    } else {
      prevNode.next = null;
    }
  }

  currentNode = null;

  return head;
};
