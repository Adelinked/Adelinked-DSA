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
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
listFromArray = function (arr) {
  if (arr.length == 0) return null;
  const list = arr.map(element => new ListNode(element, null));
  const listLength = list.length;
  list.forEach((element, index) => {
    if (index < listLength - 1) {
      element.next = list[index + 1]
    }
  });
  list[listLength - 1].next = list[1]; //make a cycle
  return list[0];
}

var detectCycle = function (head) {
  head = listFromArray(head);
  let tmp = head;

  let index = 0;

  const clean = (head, index) => {
    let cleanIndex = 0;
    tmp = head;
    while (cleanIndex < index) {
      delete tmp.order;
      tmp = tmp.next;
      cleanIndex++;
    }
  }

  while (tmp != null) {
    if (tmp.order != null) {
      clean(head, index);
      return tmp;
    }
    tmp.order = index;
    tmp = tmp.next;
    index++;
  }

  return null;
};

console.log(detectCycle([3, 2, 0, -4]))