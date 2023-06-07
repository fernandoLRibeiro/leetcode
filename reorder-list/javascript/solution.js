/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  let slow = head;
  let fast = head.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let second = slow.next;
  slow.next = null;
  let prev = null;
  let tmp;

  while (second) {
    tmp = second.next;
    second.next = prev;
    prev = second;
    second = tmp;
  }
  let first = head;
  second = prev;
  let temp1;
  let temp2;

  while (second) {
    temp1 = first.next;
    temp2 = second.next;
    first.next = second;
    second.next = temp1;
    first = temp1;
    second = temp2;
  }
  return head;
};
