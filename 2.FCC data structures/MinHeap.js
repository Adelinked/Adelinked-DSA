const isDefined = (value) => value !== undefined && value !== null;

var MinHeap = function () {
  // Only change code below this line
  this.data = [null];

  this.insert = (value) => {
    this.data.push(value);

    const place = (index) => {
      const parentIndex = Math.floor(index / 2);
      if (parentIndex <= 0) return;
      if (this.data[index] < this.data[parentIndex]) {
        [this.data[parentIndex], this.data[index]] = [
          this.data[index],
          this.data[parentIndex],
        ];
        place(parentIndex);
      }
    };
    place(this.data.length - 1);
  };
  //
  this.print = () => {
    return this.data;
  };
  //
  this.remove = () => {
    const removed = this.data[1];
    this.data[1] = this.data[this.data.length - 1];
    this.data.splice(this.data.length - 1, 1);

    const place = (index) => {
      if (index === this.data.length - 1) return;
      const child1Index = 2 * index;
      const child2Index = child1Index + 1;
      const child1 = this.data[child1Index];
      const child2 = this.data[child2Index];
      let newIndex = index;
      if (
        (!isDefined(child1) || this.data[newIndex] <= child1) &&
        (!isDefined(child2) || this.data[newIndex] <= child2)
      ) {
        return;
      }
      if (isDefined(child1) && this.data[newIndex] > child1) {
        newIndex = child1Index;
      }
      if (isDefined(child2) && this.data[newIndex] > child2) {
        newIndex = child2Index;
      }
      if (index !== newIndex) {
        [this.data[index], this.data[newIndex]] = [
          this.data[newIndex],
          this.data[index],
        ];
        place(newIndex);
      }
    };
    place(1);
    return removed;
  };
  this.sort = () => {
    let arr = [];
    while (this.data.length > 1) {
      arr.push(this.remove());
    }
    return arr;
  };
  // Only change code above this line
};

let heap = new MinHeap();

function isSorted(a) {
  for (let i = 0; i < a.length - 1; i++) if (a[i] > a[i + 1]) return false;
  return true;
}
// Generate a randomly filled array
function createRandomArray(size = 5) {
  let a = new Array(size);
  for (let i = 0; i < size; i++) a[i] = Math.floor(Math.random() * 100);

  return a;
}
const array = createRandomArray(25);
array.forEach((i) => heap.insert(i));

console.log(isSorted(heap.sort()));
