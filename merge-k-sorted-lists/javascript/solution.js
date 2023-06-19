/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  let previous = null;

  for (let i = 0; i < lists.length; i++) {
    previous = mergeTwoLists(previous, lists[i]);
  }

  return previous;
};

const mergeTwoLists = function (list1, list2) {
  let sentinel = (tail = new ListNode(0));

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    tail = tail.next;
  }

  tail.next = list1 || list2;

  return sentinel.next;
};
