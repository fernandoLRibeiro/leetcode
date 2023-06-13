/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head || !head.next) {
    return false;
  }

  let slow = head;
  let fast = head.next;

  while (fast) {
    if (slow && fast && slow !== fast) {
      if (!fast.next || !fast.next.next) {
        return false;
      }
      slow = slow.next;
      fast = fast.next.next;
    } else {
      return true;
    }
  }
  return false;
};
