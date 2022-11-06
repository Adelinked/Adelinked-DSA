function selectionSort(array) {
  // Only change code below this line
  const arrMin = (arr) => {
    let j = 0,
      min = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
        j = i;
      }
    }
    return j;
  };
  const sortedArr = [...array];
  let len = sortedArr.length;
  for (let i = 0; i < len; i++) {
    const minIndex = arrMin(sortedArr.slice(i)) + i;
    [sortedArr[i], sortedArr[minIndex]] = [sortedArr[minIndex], sortedArr[i]];
  }
  return sortedArr;
  // Only change code above this line
}

console.log(
  selectionSort([
    1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
  ])
);
