class CircularQueue {
  constructor(size) {
    this.queue = [];
    this.read = 0;
    this.write = 0;
    this.max = size - 1;

    while (size > 0) {
      this.queue.push(null);
      size--;
    }
  }

  print() {
    return this.queue;
  }

  enqueue(item) {
    // Only change code below this line
    if (!this.queue[this.read] || this.write != this.read) {
      this.queue[this.write] = item;
      this.write = this.write == this.max ? 0 : this.write + 1;
      return item;
    }
    return null;
    // Only change code above this line
  }

  dequeue() {
    // Only change code below this line
    if (this.read != this.write || (this.queue[this.max])) {
      const readVal = this.queue[this.read];
      this.queue[this.read] = null;
      this.read = this.read == this.max ? 0 : this.read + 1;
      return readVal;
    }
    return null;
    // Only change code above this line
  }
}

var test = new CircularQueue(3);
/*
test.enqueue(17);
test.enqueue(32);
test.enqueue(591);
console.log(test.print());
console.log(test.dequeue());
console.log(test.dequeue());
console.log(test.dequeue());
console.log(test.dequeue());
console.log(test.dequeue());
console.log(test.dequeue());
console.log(test.dequeue());
console.log(test.enqueue(100));
console.log(test.dequeue());*/
console.log(
  (function () {
    var test = new CircularQueue(3);
    test.enqueue(17);
    test.enqueue(32);
    test.enqueue(591);
    return (
      test.dequeue() === 17 &&
      test.dequeue() === 32 &&
      test.dequeue() === 591 &&
      test.dequeue() === null &&
      test.dequeue() === null &&
      test.dequeue() === null &&
      test.dequeue() === null &&
      test.enqueue(100) === 100 &&
      test.dequeue() === 100
    );
  })()
);
