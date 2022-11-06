/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
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
  return list[0];
}
arrayFromList = function (list) {
  let tmp = list;
  let arr = [];
  while (tmp != null && tmp.val != null) {
    arr.push(tmp.val)
    tmp = tmp.next
  }
  return arr;
}
var middleNode = function (head) {
  head = listFromArray(head);
  let listLength = 0;
  let tmp = head;
  while (tmp !== null) {
    tmp = tmp.next;
    listLength++;
  }
  let middleIndex = Math.floor(listLength / 2);
  tmp = head;
  let i = 0;
  while (i < middleIndex) {
    tmp = tmp.next;
    i++;
  }
  return tmp
};


console.log(middleNode([1, 2, 3, 4, 5, 6]))
console.log(middleNode([1, 2, 3, 4, 5]))


