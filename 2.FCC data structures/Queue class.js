function Queue() {
  var collection = [];
  this.print = function () {
    console.log(collection);
  };
  // Only change code below this line
  this.enqueue = function (element) {
    collection.unshift(element);
  };
  this.dequeue = function () {
    return collection.pop();
  };
  this.front = function () {
    return collection[this.size() - 1];
  };
  this.size = function () {
    return collection.length;
  };
  this.isEmpty = function () {
    return collection.length > 0 ? false : true;
  };
  // Only change code above this line
}

let q = new Queue();

q.enqueue("1"); q.enqueue("2"); q.enqueue("3");
q.print();
q.dequeue();
q.print();
