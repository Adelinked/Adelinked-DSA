function Stack() {
  var collection = [];
  this.print = function () {
    console.log(collection);
  };
  // Only change code below this line
  this.pop = function () {
    return collection.pop();
  };
  this.push = function (element) {
    collection.push(element);
  };
  this.peek = function () {
    return collection[collection.length - 1];
  };
  this.isEmpty = function () {
    return collection.length > 0 ? false : true;
  };
  this.clear = function () {
    collection = [];
  };

  // Only change code above this line
}
