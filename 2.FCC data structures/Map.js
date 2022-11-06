var Map = function () {
  this.collection = {};
  // Only change code below this line
  this.add = function (key, value) {
    this.collection = { ...this.collection, [key]: value };
  };
  this.remove = function (key, value) {
    delete this.collection[key];
  };
  this.get = function (key) {
    return this.collection[key];
  };
  this.has = function (key) {
    return this.collection.hasOwnProperty(key);
  };
  this.values = function () {
    return Object.values(this.collection);
  };
  this.size = function () {
    return this.values().length;
  };
  this.clear = function () {
    this.collection = {};
  };

  // Only change code above this line
};

const m = new Map();
m.add("name", "Max");
m.add("first_name", "Sax");
m.add("age", 22);

console.log(m.values());
console.log(m.get("name"));
console.log(m.has("ages"));
console.log(m.size());
m.clear();
console.log(m.values());
