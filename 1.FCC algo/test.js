let arr = [1, 2, 3, 4];

const eliminate = (i, arr) => {
  return [...arr.slice(0, i), ...arr.slice(i + 1)];
};

console.log(eliminate(5, arr));
