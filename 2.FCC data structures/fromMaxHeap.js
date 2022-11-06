const isDefined = (value) => value !== undefined && value !== null;

var MaxHeap = function () {
  // Only change code below this line
  this.heap = [null];

  this.insert = (value) => {
    this.heap.push(value);

    const place = (index) => {
      const parentIndex = Math.floor(index / 2);
      if (parentIndex <= 0) return;
      if (this.heap[index] > this.heap[parentIndex]) {
        [this.heap[parentIndex], this.heap[index]] = [
          this.heap[index],
          this.heap[parentIndex],
        ];
        place(parentIndex);
      }
    };
    place(this.heap.length - 1);
  };
  //
  this.print = () => {
    return this.heap;
  };
  //
  this.remove = () => {
    const removed = this.heap[1];
    this.heap[1] = this.heap[this.heap.length - 1];
    this.heap.splice(this.heap.length - 1, 1);

    const place = (index) => {
      if (index === this.heap.length - 1) return;
      const child1Index = 2 * index;
      const child2Index = child1Index + 1;
      const child1 = this.heap[child1Index];
      const child2 = this.heap[child2Index];

      if (
        (!isDefined(child1) || this.heap[index] >= child1) &&
        (!isDefined(child2) || this.heap[index] >= child2)
      ) {
        return;
      }
      if (isDefined(child1) && this.heap[index] < child1) {
        [this.heap[index], this.heap[child1Index]] = [
          this.heap[child1Index],
          this.heap[index],
        ];
      } else if (isDefined(child2) && this.heap[index] < child2) {
        [this.heap[index], this.heap[child2Index]] = [
          this.heap[child2Index],
          this.heap[index],
        ];
      }
      place(index);
    };
    place(1);
    return removed;
  };
  // Only change code above this line
};

console.log(
  (function () {
    var test = false;
    if (typeof MaxHeap !== "undefined") {
      test = new MaxHeap();
    } else {
      return false;
    }
    test.insert(30);
    test.insert(300);
    test.insert(500);
    test.insert(10);
    let result = [];
    result.push(test.remove());
    result.push(test.remove());
    result.push(test.remove());
    result.push(test.remove());
    return result.join("") == "5003003010";
  })()
);
