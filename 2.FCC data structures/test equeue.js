let arr = [
  ["kitten", 2],
  ["dog", 2],
  ["rabbit", 2],
];

const element = ["fish", 4];
const pos = arr.filter((i) => element[1] >= i[1]).length;
arr.splice(arr.filter((i) => element[1] >= i[1]).length, 0, element);

console.log(arr.map((i) => i[0]));
