var assert = require('assert');
class Set {
  constructor() {
    // This will hold the set
    this.dictionary = {};
    this.length = 0;
  }
  // This method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] != undefined;
  }
  // This method will return all the values in the set
  values() {
    return Object.keys(this.dictionary);
  }
  // This method will add an element to the set
  add(element) {
    if (!this.has(element)) {
      this.dictionary[element] = true;
      this.length++;
      return true;
    }

    return false;
  }
  // This method will remove an element from a set
  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element];
      this.length--;
      return true;
    }

    return false;
  }
  // This method will return the size of the set
  size() {
    return this.length;
  }
  // This is our union method
  union(set) {
    const newSet = new Set();
    this.values().forEach((value) => {
      newSet.add(value);
    });
    set.values().forEach((value) => {
      newSet.add(value);
    });

    return newSet;
  }
  // Only change code below this line
  intersection(set) {
    const newSet = new Set();
    this.values()
      .filter((v) => set.values().includes(v))
      .forEach((value) => {
        newSet.add(value);
      });

    return newSet;
  }
  difference(set) {
    const newSet = new Set();
    this.values()
      .filter((v) => !set.values().includes(v))
      .forEach((value) => {
        newSet.add(value);
      });

    return newSet;
  }
  /*isSubsetOf(set) {
    return (
      this.values().filter((v) => this.intersection(set).values().includes(v))
        .length === this.values().length
    );
  }*/
  isSubsetOf(set) {
    try {
      assert.deepEqual(this.intersection(set).values(), this.values())
    }
    catch (e) {
      return false;
    }
    // return (this.intersection(set).length === this.values().length);
    return true;
  }
  // Only change code above this line
}
s = new Set();
s.add("a");
s.add("b");

ss = new Set();
ss.add("c");
/*ss.add("b");
ss.add("d");*/
//console.log(s.intersection(ss).values())
console.log(ss.isSubsetOf(s));
