function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let head = (tail = new ListNode());

  while (l1 || l2) {
    if ((l1 ? l1.val : 0) + (l2 ? l2.val : 0) + tail.val < 10) {
      tail.val = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + tail.val;
      if (l1?.next || l2?.next) {
        tail.next = new ListNode();
      }
    } else {
      tail.val = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + tail.val - 10;
      tail.next = new ListNode(1);
    }
    tail = tail.next;
    l1 = l1?.next;
    l2 = l2?.next;
  }

  return head;
};
