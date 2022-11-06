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
    let isAdded = true;
    const nodeData = new Node(data);
    if (this.root === null) {
      this.root = nodeData;
      return undefined;
    }

    const addNode = (node) => {
      if (nodeData.value === node.value) {
        isAdded = false;
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
    if (isAdded === false) return null;
  };

  this.findMin = () => {
    if (!this.root) return null;
    let min;
    searchMin = (node) => {
      min = node.value;
      if (node.left !== null) {
        node = node.left;
        searchMin(node);
      }
    }
    searchMin(this.root)
    return min
  }

  this.findMax = () => {
    if (!this.root) return null;
    let max;
    searchMax = (node) => {
      max = node.value;
      if (node.right !== null) {
        node = node.right;
        searchMax(node);
      }
      return max;
    }
    searchMax(this.root)
    return max;
  }
  this.isPresent = (x) => {
    let found = false;
    if (!this.root) return null;
    const checkPresence = (x, node) => {
      if (node.value === x) {
        found = true; return found;
      }
      else if (x > node.value) {
        if (node.right) {
          checkPresence(x, node.right)
        }
        return false
      }
      else {
        if (node.left) {
          checkPresence(x, node.left)
        }
        return false
      }
    }
    checkPresence(x, this.root)
    return found;
  }

  this.isBinarySearchTree = () => {
    let test = true;
    if (!this.root) return false;
    const check = (node) => {
      if (node && node.right) {
        if (node.right.value <= node.value) {
          test = false;
          return test;
        }
        check(node.right)
      }
      if (node && node.left) {
        if (node.left.value >= node.value) {
          test = false;
          return test;
        }
        check(node.left)
      }
      return test;
    }
    return check(this.root);
  }


  this.findMaxHeight = () => {
    if (this.root === null) return -1;
    explore = (node) => {
      if (!node) return 0;
      if (node.left === null && node.right === null) {
        return 0;
      }
      else {
        return Math.max(explore(node.left), explore(node.right)) + 1;
      }
    }
    return explore(this.root);
  }
  this.findMinHeight = () => {
    if (this.root === null) return -1;
    const myMin = (a, b) => {
      if (a != null && b != null) return Math.min(a, b);
      else if (a != null) return a;
      else if (b != null) return b;
    }
    explore = (node) => {
      if (!node) return null;
      if (node.left === null && node.right === null)
        return 0;
      return myMin(explore(node.left), explore(node.right)) + 1;
    }
    return explore(this.root);
  }

  this.isBalanced = () => {
    const maxHeight = this.findMaxHeight();
    const minHeight = this.findMinHeight();
    return (maxHeight === minHeight || maxHeight === minHeight + 1);
  }

  this.inorder = () => {
    if (this.root === null) return null;
    let result = []
    const explore = (node) => {
      if (!node) return null;
      if (!node.left && !node.right) result.push(node.value);
      else {
        if (node.left) { explore(node.left); }
        result.push(node.value);
        if (node.right) { explore(node.right); }
      }
    }
    explore(this.root)
    return result;
  }
  this.preorder = () => {
    if (this.root === null) return null;
    let result = []
    const explore = (node) => {
      if (!node) return null;
      if (node.left || node.right) {
        result.push(node.value);
        if (node.left) { explore(node.left); }
        if (node.right) { explore(node.right); }
      }
      else { result.push(node.value); }
    }
    explore(this.root)
    return result;
  }
  this.postorder = () => {
    if (this.root === null) return null;
    let result = []
    const explore = (node) => {
      if (!node) return null;
      if (!node.left && !node.right) result.push(node.value);
      else {
        if (node.left) { explore(node.left); }
        if (node.right) { explore(node.right); }
        result.push(node.value);
      }
    }
    explore(this.root)
    return result;
  }
  this.levelOrder = () => {
    if (!this.root) return null;
    let queue = [];
    let result = []
    queue.push(this.root);
    const explore = (node) => {

      if (node.left) { queue.push(node.left); }
      if (node.right) { queue.push(node.right); }
      if (node.left) { explore(node.left); }
      if (node.right) { explore(node.right); }
    }
    explore(this.root)
    result.push(this.root.value)
    queue.forEach(node => {
      if (node.left) result.push(node.left.value)
      if (node.right) result.push(node.right.value)
    })
    return result;
  }
  this.reverseLevelOrder = () => {
    if (!this.root) return null;
    let queue = [];
    let result = []
    queue.push(this.root);
    const explore = (node) => {
      if (node.right) { queue.push(node.right); }
      if (node.left) { queue.push(node.left); }
      if (node.right) { explore(node.right); }
      if (node.left) { explore(node.left); }

    }
    explore(this.root)
    result.push(this.root.value)
    queue.forEach(node => {
      if (node.right) result.push(node.right.value)
      if (node.left) result.push(node.left.value)
    })
    return result;
  }

  this.placeNode = function (nodeToPlace, startNode) {
    let isPlaced = true;
    if (startNode === null) {
      startNode = nodeToPlace;
      return;
    }

    const addNode = (node) => {
      if (nodeToPlace.value === node.value) {
        isPlaced = false;
        return;
      } else if (nodeToPlace.value < node.value) {
        if (node.left === null) {
          node.left = nodeToPlace;
        } else {
          addNode(node.left);
        }
      } else {
        if (node.right === null) {
          node.right = nodeToPlace;
        } else {
          addNode(node.right);
        }
      }
    };
    addNode(startNode);
    if (isPlaced === false) return null;
  };



  this.remove = (value) => {
    let isRemoved = null;
    if (!this.root) return null;

    const deleteValue = (node, value, parentNode, branch) => {
      if (this.root.value === value) {
        isRemoved = true;
        if (this.root.left === null && this.root.right === null) {
          this.root = null;
        }
        else if (this.root.left !== null && this.root.right === null) {
          this.root = this.root.left;
        }
        else if (this.root.left === null && this.root.right !== null) {
          this.root = this.root.right;
        }
        else if (this.root.left !== null && this.root.right !== null) {
          const saveleft = this.root.left; const saveRight = this.root.right;
          /*this.root = this.root.right;
          this.placeNode(saveleft, saveRight);*/
          // OR  
          this.root = this.root.left;
          this.placeNode(saveRight, saveleft);
        }
      }
      else if (node.value === value) {
        if (!node.left && !node.right) {
          parentNode[branch] = null;
        }
        else if (node.left && !node.right) {
          parentNode[branch] = node.left;
        }
        else if (!node.left && node.right) {
          parentNode[branch] = node.right;
        }
        else if (node.left && node.right) {
          parentNode[branch] = node.right;
          this.placeNode(node.left, node.right);
          // OR
          /* parentNode[branch] = node.left;
          this.placeNode(node.right, node.left);*/
        }
        node = null; isRemoved = true; return isRemoved;
      }
      else {
        if (node.left) {
          deleteValue(node.left, value, node, "left");
        }
        if (node.right) {
          deleteValue(node.right, value, node, "right");
        }
      }
    }
    deleteValue(this.root, value, null, null)
    return isRemoved;
  }
  this.invert = () => {
    if (this.root === null) return;
    const explore = (node) => {
      if (!node) return;
      const tmp = node.left;
      node.left = node.right;
      node.right = tmp;
      explore(node.left);
      explore(node.right);
    }
    explore(this.root)
  }
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
