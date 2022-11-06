function insertionSort(array) {
  // Only change code below this line
  const insertEltArr = (arr, end, elt) => {
    let i = 0;
    while (i < end) {
      if (elt <= arr[i]) {
        break;
      }
      i++;
    }
    arr.splice(i, 0, elt);
  };
  for (let i = 1; i < array.length; i++) {
    insertEltArr(array, i, array.splice(i, 1)[0]);
  }
  return array;
  // Only change code above this line
}

console.log(
  insertionSort([
    101, 4, 2,
    8, 345, 123,
    43, 32, 5643,
    63, 123, 43,
    2, 55, 1,
    234, 92,
  ])
);

/*
function make(arr) {
  arr.splice(4, 1);
  return arr
}

console.log(make([1, 2, 3, 4]))*/
