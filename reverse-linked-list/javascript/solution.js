//  * Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

//  * @param {ListNode} head
//  * @return {ListNode}
//  */
var reverseList = function (head) {
  let currentNode = head;
  let temp;
  let prev = null;

  while (currentNode) {
    temp = currentNode.next;
    currentNode.next = prev;
    prev = currentNode;
    currentNode = temp;
  }
  return prev;
};
