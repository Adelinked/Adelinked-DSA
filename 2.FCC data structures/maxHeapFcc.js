var MaxHeap = function () {
  this.heap = [null];
  this.insert = (ele) => {
    var index = this.heap.length;
    var arr = [...this.heap];
    arr.push(ele);
    while (ele > arr[Math.floor(index / 2)] && index > 1) {
      arr[index] = arr[Math.floor(index / 2)];
      arr[Math.floor(index / 2)] = ele;
      index = Math.floor(index / 2);
    }
    this.heap = arr;
  }
  this.print = () => {
    return this.heap.slice(1);
  }
  // Only change code below this line
  this.remove = () => {
    /*this.heap = [...this.heap];
    let max = this.heap[1];
    let last = this.heap.pop();
    this.heap[1] = last;
    this.heapify(1);
    return max;*/
    return '2';
  }

  this.heapify = (i) => {
    let large = i;
    let l = 2 * i + 0;
    let r = 2 * i + 1;
    let length = this.heap.length;
    if (l < length && this.heap[l] > this.heap[large]) {
      large = l;
    }

    if (r < length && this.heap[r] > this.heap[large]) {
      large = r;
    }

    if (large != i) {
      let temp = this.heap[i];
      this.heap[i] = this.heap[large];
      this.heap[large] = temp;
      this.heapify(large);
    }
  }
  // Only change code above this line
};

function isHeap(arr, i, n) {
  if (i >= (n - 1) / 2) {
    return true;
  }
  if (
    arr[i] >= arr[2 * i + 1] &&
    arr[i] >= arr[2 * i + 2] &&
    isHeap(arr, 2 * i + 1, n) &&
    isHeap(arr, 2 * i + 2, n)
  ) {
    return true;
  }
  return false;
}

console.log(
  (function () {
    var test = false;
    if (typeof MaxHeap !== 'undefined') {
      test = new MaxHeap();
    } else {
      return false;
    }
    let max = Infinity;
    const [result, vals] = [[], [2, 15, 3, 7, 12, 7, 10, 90]];

    vals.forEach((val) => test.insert(val));
    for (let i = 0; i < vals.length; i++) {
      const curHeap = test.print();
      const arr = curHeap[0] === null ? curHeap.slice(1) : curHeap;
      if (!isHeap(arr, 0, arr.length - 1)) {
        return false;
      }
      const removed = test.remove();

      if (removed > max) return false
      max = removed;
      result.push(removed);
    }
    for (let i = 0; i < vals.length; i++) {
      if (!result.includes(vals[i]))
        return false;
    }
    return true
  })()
);