var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
var Node = function () {
  this.keys = new Map();
  this.end = false;
  this.setEnd = function () {
    this.end = true;
  };
  this.isEnd = function () {
    return this.end;
  };
};
var Trie = function () {
  // Only change code below this line
  this.root = new Node();
  this.add = (word) => {
    const explore = (node) => {

    }
    explore(this.root)
  }
  // Only change code above this line
};