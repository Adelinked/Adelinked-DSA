/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
listFromArray = function (arr) {
  if (arr.length == 0) return null;
  const list = arr.map(element => new ListNode(element));
  const listLength = list.length;
  list.forEach((element, index) => {
    if (index < listLength - 1) {
      element.next = list[index + 1]
    }
  });
  list[listLength - 1].next = list[0]; //make a cycle
  return list[0];
}

var detectCycle = function (head) {
  head = listFromArray(head);
  let tmp = head;
  let exploreArr = [];
  while (tmp != null) {
    const check = exploreArr.indexOf(tmp);
    if (check >= 0) {
      return tmp;
    }
    exploreArr.push(tmp);
    tmp = tmp.next;
  }
  return null;
};

console.log(detectCycle([3, 2, 0, -4]))