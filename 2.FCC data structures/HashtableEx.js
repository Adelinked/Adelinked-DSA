var called = 0;
var hash = string => {
  called++;
  var hashed = 0;
  for (var i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed;
};
var HashTable = function () {
  this.collection = {};
  // Only change code below this line
  this.add = (key, value) => {
    const keyHash = hash(key);
    if (this.collection.hasOwnProperty(keyHash)) {
      this.collection[keyHash] = [...this.collection[keyHash], { [key]: value }]
    }
    else
      this.collection = {
        ...this.collection, [keyHash]: [{ [key]: value }]
      }
  }
  this.remove = (key) => {
    const keyHash = hash(key);
    if (!this.collection.hasOwnProperty(keyHash))
      return;
    const newEntry = this.collection[keyHash].filter(i => !i.hasOwnProperty(key))
    this.collection[keyHash] = newEntry;
    if (this.collection[keyHash].length <= 0) {
      delete this.collection[keyHash];
    }
  }
  this.lookup = (key) => {
    const keyHash = hash(key);

    if (this.collection.hasOwnProperty(keyHash)) {
      const filter = this.collection[hash(key)].filter(i => i.hasOwnProperty(key))
      return filter?.length > 0 ? filter[0][key] : null;
    }
    return null;
  }

  // Only change code above this line
};

console.log(
  (function () {
    var test = false;
    var hashValue = hash("key");
    if (typeof HashTable !== "undefined") {
      test = new HashTable();
    }
    test.add("key", "value");
    test.add("yek", "value");
    test.add("altKey", "value");

    test.remove("yek");
    if (test.lookup("yek") || !test.lookup("key") || !test.lookup("altKey")) {
      return false;
    }

    test.remove("key");

    return !test.collection.hasOwnProperty(hashValue) && test.lookup("altKey");
  })()
);