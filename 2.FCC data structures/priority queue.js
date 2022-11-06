function PriorityQueue() {
  var collection = [];
  this.printCollection = function () {
    console.log(...collection);
  };
  // Only change code below this line
  this.enqueue = function ([element, priority]) {
    collection.splice(collection.filter((i) => priority >= i[1]).length, 0, [
      element,
      priority,
    ]);
  };
  this.dequeue = function () {
    return collection.shift()[0];
  };
  this.front = function () {
    return collection[0][0];
  };
  this.size = function () {
    return collection.length;
  };
  this.isEmpty = function () {
    return collection.length > 0 ? false : true;
  };
  // Only change code above this line
}

let q = new PriorityQueue();

q.enqueue(["kitten", 2]);
q.enqueue(["dog", 2]);
q.enqueue(["shark", 1]);
q.enqueue(["rabbit", 3]);
q.enqueue(["fish", 2]);
q.printCollection();
console.log(q.dequeue());
q.printCollection();
