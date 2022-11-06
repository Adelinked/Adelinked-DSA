function binarySearch(searchList, value) {
  let arrayPath = [];
  let start = 0;
  let end = searchList.length - 1;
  let found = false;
  while (!found && start <= end) {
    const midIndex = Math.floor((end + start) / 2);
    arrayPath.push(searchList[midIndex])
    if (searchList[midIndex] === value) {
      found = true;
      break;
    } else if (value > searchList[midIndex]) {
      start = midIndex + 1;
    } else {
      end = midIndex - 1;
    }
  }
  return found ? arrayPath : "Value Not Found";
}

console.log(
  binarySearch(
    [
      0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 49, 70,
    ],
    0
  )
);