/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */

function Node(val, children) {
  this.val = val;
  this.children = children;
};

const treeFromArray = (arr, index) => {
  const nodesArr = arr.map(i => i != null ? new Node(i, null) : null);
  len = nodesArr.length;
  let start; let newChildren = [];
  const findChildren = (arr, begin) => {
    const arrLen = arr.length;

    let start; let end;
    for (let i = begin; i < arrLen; i++) {
      if (start == undefined) {
        if (arr[i] == null) {
          start = i;
        }
      }
      else {
        if (arr[i] == null) {
          end = i;
          break;
        }
        else if (i == arrLen - 1) {
          end = i + 1;
          break;
        }
      }
    }
    return [arr.slice(start + 1, end), end];
  }
  let begin = 0;
  for (let i = 0; i < len; i++) {
    if (nodesArr[i] != null) {
      const children = findChildren(arr, begin);
      nodesArr[i].children = children[0];
      begin = children[1];
      //console.log(children[1])
      if (children[1] >= len) {
        break;
      }
    }
  }
  return nodesArr;
}

var preorder = function (root) {
  return treeFromArray(root)
};

console.log(preorder([1, null, 3, 2, 4, null, 5, 6]))
//console.log(preorder([1, null, 2, 3, 4, 5, null, null, 6, 7, null, 8, null, 9, 10, null, null, 11, null, 12, null, 13, null, null, 14]))