function mergeInto(arr1, arr2) {
  let newArr = [arr1[0]];
  let i = 1;
  let j = 0;
  const len1 = arr1.length;
  const len2 = arr2.length;
  let arr1Finished = false;
  let arr2Finished = false;
  for (let k = 1; k < len1 + len2; k++) {
    if (!arr2Finished && i == len1) {
      newArr[k] = arr2[j];
      j++;
      arr1Finished = true;
      continue;
    }
    if (!arr1Finished && j == len2) {
      newArr[k] = arr1[i];
      i++;
      arr2Finished = true;
      continue;
    }
    if (!arr1Finished && !arr2Finished) {
      if (arr2[j] > arr1[i]) {
        newArr[k] = arr1[i];
        i++;
      } else {
        newArr[k] = arr2[j];
        j++;
      }
    }

  }
  return newArr;
}

function merge(arr1, arr2) {
  if (arr2[0] > arr1[0]) {
    return mergeInto(arr1, arr2);
  }
  return mergeInto(arr2, arr1);
}

function mergeSort(array) {
  // Only change code below this line
  const len = array.length;
  const midIndex = Math.floor(len / 2);
  if (len <= 1) return array;
  return merge(
    mergeSort(array.slice(0, midIndex)),
    mergeSort(array.slice(midIndex))
  );
  // Only change code above this line
}

console.log(
  mergeSort([
    1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
  ])
);
