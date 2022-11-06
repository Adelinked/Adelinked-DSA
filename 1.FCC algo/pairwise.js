function pairwise(arr, arg) {
  const len = arr.length;
  let foundIndexes = [];
  for (let i = 0; i < len; ++i) {
    if (foundIndexes.indexOf(i) >= 0) {
      continue;
    }
    console.log("i=", i)
    for (let j = i + 1; j < len; ++j) {
      if (foundIndexes.indexOf(i) >= 0 || foundIndexes.indexOf(j) >= 0) {
        continue;
      }
      console.log("j=", j)
      if (arr[i] + arr[j] === arg) {
        foundIndexes.push(i);
        foundIndexes.push(j);
      }
    }
  }
  return foundIndexes.reduce((acc, curr) => acc + curr, 0);
}
//console.log(pairwise([1, 4, 2, 3, 0, 5], 7));
//console.log(pairwise([1, 1, 1], 2))

