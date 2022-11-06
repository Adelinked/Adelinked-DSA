var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
  this.add = function (data) {
    let added = true;
    const nodeData = new Node(data);
    if (this.root === null) {
      this.root = nodeData;
      return undefined;
    }
    const addNode = (node) => {
      if (nodeData.value === node.value) {
        added = false;
        return;
      } else if (nodeData.value < node.value) {
        if (node.left === null) {
          node.left = nodeData;
        } else {
          addNode(node.left);
        }
      } else {
        if (node.right === null) {
          node.right = nodeData;
        } else {
          addNode(node.right);
        }
      }
    };
    addNode(this.root);
    if (added === false) return null;
  };

  this.findMin = () => {
    if (this.root === null) return null;
    let tmp = this.root;
    while (tmp.left) {
      tmp = tmp.left;
    }
    return tmp.value;
  };

  this.findMax = () => {
    if (this.root === null) return null;
    let tmp = this.root;
    while (tmp.right) {
      tmp = tmp.right;
    }
    return tmp.value;
  };

  this.isPresent = (value) => {
    let found = false;
    if (this.root === null) {
      return false;
    }
    const findValue = (node) => {
      if (value === node.value) {
        found = true;

      } else if (value < node.value) {
        if (node.left === null) {
          return;
        } else {
          findValue(node.left);
        }
      } else {
        if (node.right === null) {
          return;
        } else {
          findValue(node.right);
        }
      }
    };
    findValue(this.root);
    return found;
  };
  //
  this.findMaxHeight = () => {
    if (this.root === null) return -1;
    const explore = (node) => {
      if (node.left === null && node.right === null) {
        return 0;
      }
      return Math.max(
        node.left !== null ? explore(node.left) + 1 : 0,
        node.right !== null ? explore(node.right) + 1 : 0
      );
    };
    return explore(this.root);
  };

  this.findMinHeight = () => {
    if (this.root === null) return -1;
    const explore = (node) => {
      if (node.left === null && node.right === null) {
        return 0;
      }
      return Math.min(
        node.left !== null ? explore(node.left) + 1 : 0,
        node.right !== null ? explore(node.right) + 1 : 0
      );
    };
    return explore(this.root);
  };

  this.isBalanced = () => {
    const maxHeight = this.findMaxHeight();
    const minHeight = this.findMinHeight();
    return minHeight === maxHeight || minHeight === maxHeight - 1;
  };

  this.preorder = () => {
    if (this.root === null) return null;

    const explore = (node) => {
      if (node === null) return null;
      let arr = [];
      if (node.left === null && node.right === null) {
        return arr.concat(node);
      }
      return arr.concat(node, explore(node.left), explore(node.right));
    };
    return explore(this.root)
      .filter(Boolean)
      .map((n) => n.value);
  };

  this.postorder = () => {
    if (this.root === null) return null;

    const explore = (node) => {
      if (node === null) return null;
      let arr = [];
      if (node.left === null && node.right === null) {
        return arr.concat(node);
      }
      return arr.concat(explore(node.left), explore(node.right), node);
    };
    return explore(this.root)
      .filter(Boolean)
      .map((n) => n.value);
  };
  this.inorder = () => {
    if (this.root === null) return null;

    const explore = (node) => {
      if (node === null) return null;
      let arr = [];
      if (node.left === null && node.right === null) {
        return arr.concat(node);
      }
      return arr.concat(explore(node.left), node, explore(node.right));
    };
    return explore(this.root)
      .filter(Boolean)
      .map((n) => n.value);
  };
  function Queue() {
    var collection = [];
    this.print = function () {
      console.log(collection);
    };
    this.enqueue = function (element) {
      collection.push(element);
    };
    this.dequeue = function () {
      return collection.shift();
    };
    this.isEmpty = function () {
      return collection.length > 0 ? false : true;
    };
  }
  this.levelOrder = () => {
    let q = new Queue();
    let arr = [];
    if (this.root === null) return null;
    q.enqueue(this.root);
    while (!q.isEmpty()) {
      const node = q.dequeue();
      arr.push(node);
      if (node.left !== null) q.enqueue(node.left);
      if (node.right !== null) q.enqueue(node.right);
    }
    return arr.map((i) => i.value);
  };
  this.reverseLevelOrder = () => {
    let q = new Queue();
    let arr = [];
    if (this.root === null) return null;
    q.enqueue(this.root);
    while (!q.isEmpty()) {
      const node = q.dequeue();
      arr.push(node);
      if (node.right !== null) q.enqueue(node.right);
      if (node.left !== null) q.enqueue(node.left);
    }
    return arr.map((i) => i.value);
  };

  this.remove = (value) => {
    let removed = null;
    const nodeData = new Node(value);
    if (this.root === null) {
      return null;
    }
    if (this.root.value === value) {
      if (this.root.left === null && this.root.right === null) {
        this.root = null;
        return true;
      }
      if (this.root.left !== null && this.root.right === null) {
        this.root = this.root.left;
        return true;
      }
      if (this.root.right !== null && this.root.left === null) {
        this.root = this.root.right;
        return true;
      }
      if (this.root.left !== null && this.root.right !== null) {
        const saveLeft = this.root.left;
        this.root = this.root.right;
        this.root.left = saveLeft;
        return true;
      }
    }
    const findValue = (node, parentNode, side) => {
      if (nodeData.value === node.value) {
        removed = true;
        const leftChild = node.left;
        const rightChild = node.right;

        if (leftChild === null && rightChild === null) {
          if (side === "left") {
            parentNode.left = null;
          }
          if (side === "right") {
            parentNode.right = null;
          }
          return;
        }
        if (leftChild !== null && rightChild === null) {
          if (side === "left") {
            parentNode.left = leftChild;
          }
          if (side === "right") {
            parentNode.right = leftChild;
          }
          return;
        }
        if (rightChild !== null && leftChild === null) {
          if (side === "left") {
            parentNode.left = rightChild;
          }
          if (side === "right") {
            parentNode.right = rightChild;
          }
          return;
        }
        if (rightChild !== null && leftChild !== null) {
          const addNode = (nodeData, node) => {
            if (nodeData.value === node.value) {
              added = false;
              return;
            } else if (nodeData.value < node.value) {
              if (node.left === null) {
                node.left = nodeData;
              } else {
                addNode(node.left);
              }
            } else {
              if (node.right === null) {
                node.right = nodeData;
              } else {
                addNode(node.right);
              }
            }
          };

          if (side === "left") {
            parentNode.left = rightChild;
            addNode(leftChild, parentNode.left);
          }
          if (side === "right") {
            parentNode.right = rightChild;
            addNode(leftChild, parentNode.right);
          }
          return;
        }
      } else if (nodeData.value < node.value) {
        if (node.left === null) {
          return;
        } else {
          findValue(node.left, node, "left");
        }
      } else {
        if (node.right === null) {
          return;
        } else {
          findValue(node.right, node, "right");
        }
      }
    };
    findValue(this.root);
    return removed;
  };
  this.invert = () => {
    if (this.root === null) return null;

    const explore = (node) => {
      if (node === null) return null;
      if (node.left === null && node.right === null) {
        return node;
      }
      [node.left, node.right] = [node.right, node.left];
      if (node.left) explore(node.left);
      if (node.right) explore(node.right);
    };
    return explore(this.root);
  };
  // Only change code above this line
}

function isBinarySearchTree(tree) {
  // Only change code below this line
  const testTree = (t) => {
    if (t.left === null && t.right === null) return true;
    const leftEval =
      t.left !== null ? t.value > t.left.value && testTree(t.left) : true;
    const rightEval =
      t.right !== null ? t.value < t.right.value && testTree(t.right) : true;
    return leftEval && rightEval;
  };
  return testTree(tree.root);
  // Only change code above this line
}

let test = new BinarySearchTree();
test.add(7);
test.add(1);
test.add(9);
test.add(0);
test.add(3);
test.add(8);
test.add(10);
//test.add(2);
//test.add(5);
//test.add(4);
//test.add(6);
//test.add(11);
//console.log(displayTree(test))
//test.invert();
test.remove(7);
displayTree(test)
