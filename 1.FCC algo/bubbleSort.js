function bubbleSort(array) {
  // Only change code below this line
  let sortedArr = [...array];

  const testSort = (sortedArr) => {
    for (let i = 0; i < sortedArr.length; i++) {
      if (sortedArr[i] > sortedArr[i + 1]) {
        return false;
      }
    }
    return true;
  };
  while (!testSort(sortedArr)) {
    for (let i = 0; i < sortedArr.length - 1; i++) {
      if (sortedArr[i] > sortedArr[i + 1]) {

        [sortedArr[i], sortedArr[i + 1]] = [sortedArr[i + 1], sortedArr[i]];
      }
    }
  }

  return sortedArr;
  // Only change code above this line
}

console.log(bubbleSort([5, 2, 0, 7, 8, 1]));
