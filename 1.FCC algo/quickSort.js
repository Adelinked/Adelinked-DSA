function quickSort(array) {
  // Only change code below this line
  const len = array.length;
  if (len <= 1) return array;
  const pivot = array[0];
  const gt = array.slice(1).filter((i) => i > pivot);
  const lt = array.slice(1).filter((i) => i <= pivot);
  return [...quickSort(lt), pivot, ...quickSort(gt)];
  // Only change code above this line
}

console.log(
  quickSort([
    1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
  ])
);
