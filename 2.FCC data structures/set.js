class Set {
  constructor() {
    // Dictionary will hold the items of our set
    this.dictionary = {};
    this.length = 0;
  }

  // This method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] != undefined;
  }

  // This method will return all the values in the set
  values() {
    return Object.values(this.dictionary);
  }

  // Only change code below this line
  add(value) {
    if (this.values().indexOf(value) >= 0) {
      return false;
    }

    this.dictionary = { ...this.dictionary, [value]: value };
    return true;
  }

  remove(value) {
    if (this.values().indexOf(value) < 0) {
      return false;
    }
    this.dictionary = this.values()
      .filter((val) => val != value)
      .reduce((acc, obj) => {
        acc = { ...acc, [obj]: obj };
        return acc;
      }, {});
    return true;
  }
  size() {
    return this.values().length;
  }
  // Only change code above this line
}

const s = new Set();
console.log(s.add(1));
console.log(s.add(2));
console.log(s.add(3));
console.log(s.add(2));
console.log(s.values());
console.log(s.remove(2));
console.log(s.values());
