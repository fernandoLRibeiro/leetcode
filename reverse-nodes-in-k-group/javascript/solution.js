/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  let dummy = new ListNode(0, head);
  let groupPrev = dummy;
  let groupNext;
  let prev;
  let curr;
  let tmp;

  while (true) {
    kth = getKth(groupPrev, k);
    if (!kth) {
      break;
    }
    groupNext = kth.next;
    prev = kth.next;
    curr = groupPrev.next;

    while (curr !== groupNext) {
      tmp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = tmp;
    }
    tmp = groupPrev.next;
    groupPrev.next = kth;
    groupPrev = tmp;
  }
  return dummy.next;
};

const getKth = function (current, k) {
  while (current && k > 0) {
    current = current.next;
    k--;
  }
  return curr;
};
