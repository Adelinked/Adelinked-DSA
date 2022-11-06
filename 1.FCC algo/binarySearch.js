function binarySearch(searchList, value) {
  let arrayPath = [];
  let found = false;
  let begin = 0;
  let end = searchList.length - 1;
  while (!found && begin <= end) {
    const midIndex = Math.floor((begin + end) / 2);
    arrayPath.push(searchList[midIndex]);
    if (value == searchList[midIndex]) {
      found = true;
    } else if (value > searchList[midIndex]) {
      begin = midIndex + 1;
    } else {
      end = midIndex - 1;
    }
  }
  if (!found) return "Value Not Found";
  return arrayPath;
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
