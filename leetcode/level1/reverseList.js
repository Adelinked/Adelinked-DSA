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


var reverseList = function (head) {
  list = listFromArray(head);
  return listFromArray(arrayFromList(list).reverse())

};

console.log(arrayFromList(reverseList([1, 2, 3])));
