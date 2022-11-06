var called = 0;
var hash = (string) => {
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
  this.add = function (key, value) {

    const hashedKey = hash(key);
    this.collection = !this.collection[hashedKey]
      ? { ...this.collection, [hashedKey]: [{ [key]: value }] }
      : {
        ...this.collection,
        [hashedKey]: [...this.collection[hashedKey], { [key]: value }],
      };
  };

  this.remove = function (key) {
    const hashedKey = hash(key);
    if (!this.collection[hashedKey]) return;

    const newEntry = this.collection[hashedKey].filter((i) => !i[key]);
    if (newEntry.length <= 0) {
      delete this.collection[hashedKey];
      return;
    }
    this.collection[hashedKey] = newEntry;
  };

  this.lookup = function (key) {
    if (!this.collection.hasOwnProperty(hash(key))) {
      return null;
    }
    const filter = this.collection[hash(key)].filter((i) => i[key])[0];
    return filter ? filter[key] : null;
  };
  // Only change code above this line
};
if (typeof HashTable !== "undefined") {
  test = new HashTable();
}
test.add("key", "value1");
test.add("yek", "value2");
test.add("altKey", "value3");
console.log(test.collection);
test.remove("yek");
console.log(test.lookup("yek"));
console.log(test.lookup("key"));
test.remove("key");
console.log(test.lookup("key"));
console.log(test.collection);

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
