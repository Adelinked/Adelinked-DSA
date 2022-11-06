const exclude = (i, arr) => {
  if (i < 0) return;
  return [...arr.slice(0, i), ...arr.slice(i + 1)];
};

let arr = [0, 4, 7, 2, 9, 1];

function sym0(args) {
  return []
    .concat(...arguments)
    .filter(
      (i, ind, arr2) =>
        ![...arr2.slice(0, ind), ...arr2.slice(ind + 1)].includes(i)
    );
}

function sym(args) {
  const n = arguments.length;
  if (n < 2) return;
  const delta = (arr1, arr2) => [
    ...arr1.filter((i) => !arr2.includes(i)),
    ...arr2.filter((i) => !arr1.includes(i)),
  ];

  let i = 2;
  let newArr = delta(Array.from(new Set(arguments[0])), Array.from(new Set(arguments[1])));
  while (i < n) {
    newArr = delta(newArr, Array.from(new Set(arguments[i])));
    i++;
  }
  return newArr;
}

console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]));


