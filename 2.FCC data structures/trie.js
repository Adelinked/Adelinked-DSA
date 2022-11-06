var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
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
    const length = word.length;
    let position = this.root;

    for (let i = 0; i < length; i++) {
      const present = position?.keys.get(word[i]);
      if (present) {
        position = present;
        continue;
      } else {
        let node = new Node();
        if (i === length - 1) {
          node.setEnd();
        }
        position.keys.set(word[i], node);
        position = node;
      }
    };
  }

  this.isWord = (word) => {
    const length = word.length;
    let position = this.root;
    let test = true;
    for (let i = 0; i < length; i++) {
      const present = position?.keys.get(word[i]);
      test = test && present !== undefined;
      position = present;
      if (i === length - 1) {
        test = test && present.isEnd();
      }
      if (!test) return false;
    }
    return test;
  };

  this.print = () => {
    const fusion = (l, arr) => {
      return arr.map((i) => [l + i]);
    };
    const flaten = (arr) => {
      const newArr = [].concat(...arr);
      return newArr.some((i) => Array.isArray(i)) ? flaten(newArr) : newArr;
    };
    const explore = (node) => {
      if (node.isEnd()) {
        return [
          [""],
          [...node.keys.entries()].map((value) =>
            fusion(value[0], [].concat(...explore(value[1])))
          ),
        ];
      }
      return [...node.keys.entries()].map((value) =>
        fusion(value[0], [].concat(...explore(value[1])))
      );
    };

    return flaten(explore(this.root));
  };
};
// Only change code above this line

let test = new Trie();

test.add("jump");
test.add("jumps");
/*test.add("jumped");
test.add("house");
test.add("mouse");*/

//console.log(test.root.keys);

console.log(test.print());

/*
console.log(
  (function testTrie() {
    var test = false;
    if (typeof Trie !== "undefined") {
      test = new Trie();
    } else {
      return false;
    }
    test.add("jump");
    test.add("jumps");
    test.add("jumped");
    test.add("house");
    test.add("mouse");
    var added = test.print();
    return (
      added.indexOf("jump") != -1 &&
      added.indexOf("jumps") != -1 &&
      added.indexOf("jumped") != -1 &&
      added.indexOf("house") != -1 &&
      added.indexOf("mouse") != -1 &&
      added.length == 5
    );
  })()
);
*/