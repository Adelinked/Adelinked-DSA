function updateInventory(arr1, arr2) {
  return [
    ...arr1.map((i) => {
      const newVal = arr2.filter((j) => j[1] === i[1]);
      if (newVal?.length > 0) {
        newVal[0][0] = newVal[0][0] + i[0];
        return newVal[0];
      }
      return i;
    }),
    ...arr2
      .map((i) => (arr1.filter((j) => j[1] === i[1]).length > 0 ? null : i))
      .filter(Boolean),
  ]
    .sort((a, b) => a[1].localeCompare(b[1]))
}
// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"],
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"],
];

//updateInventory(curInv, newInv).map((i) => console.log(...i));

updateInventory(
  [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"],
  ],
  [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"],
  ]
).map((i) => console.log(i));
/*[
  [88, "Bowling Ball"],
  [2, "Dirty Sock"],
  [3, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [5, "Microphone"],
  [7, "Toothpaste"],
];*/
