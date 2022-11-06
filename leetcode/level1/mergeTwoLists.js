/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
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

mergeSortedArrays = function (arr1, arr2) {

  const mergeInto = function (arr1, arr2) {
    let i = 1, j = 0;
    let arr1Len = arr1.length;
    let arr2Len = arr2.length;
    let newArr = [arr1[0]];
    for (let k = 1; k < arr1Len + arr2Len; k++) {
      if (i == arr1Len) {
        newArr[k] = arr2[j];
        j++;
        continue;
      }
      if (j == arr2Len) {
        newArr[k] = arr1[i];
        i++;
        continue;
      }
      if (arr1[i] <= arr2[j]) {
        newArr[k] = arr1[i];
        i++;
        continue;
      }
      else {
        newArr[k] = arr2[j];
        j++;
        continue;
      }
    }
    return newArr;
  }
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;
  if (arr1.length === 0 && arr2.length) return [];

  if (arr2[0] >= arr1[0]) {
    return mergeInto(arr1, arr2);
  }
  return mergeInto(arr2, arr1);

}


var mergeTwoLists = function (list1, list2) {
  list1 = listFromArray(list1);
  list2 = listFromArray(list2);

  return listFromArray(mergeSortedArrays(arrayFromList(list1), arrayFromList(list2)));

};

//console.log(arrayFromList(mergeTwoLists([1, 2, 4], [1, 3, 4]))) // [1,1,2,3,4,4]
console.log((mergeTwoLists([], []))) // []
console.log(arrayFromList(mergeTwoLists([], [0]))) // [0]