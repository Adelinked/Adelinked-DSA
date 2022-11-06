const letters = ["a", "b", "c"];
/*function permAlone(str) {
  const letters = ["a", "b"];
  const test = (str, l) => {
    let re = new RegExp(`${l}${l}`);
    return re.test(str);
  };
  return letters.filter((i) => test(str, i));
}
*/

const strings = (len) => {
  const numLetter = letters.length;
  let strArr = [];
  for (let i = 0; i < numLetter; i++) {
    let str = "";
    for (let j = i; j < len + i; j++) {
      str += letters[j % numLetter];
    }

    strArr = strArr.concat([str]);
  }
  for (let i = 0; i < numLetter; i++) {
    let str = "";
    for (let j = i; j > -1 * (len - i); j--) {
      str += letters[(j + numLetter) % numLetter];
    }

    strArr = strArr.concat([str]);
  }

  return strArr;
};

function combAlone(str) {
  let len = str.length;
  let letters = Array.from(new Set(str));

  stringsRec = (len, letters) => {
    if (len == 1) return [...letters];

    let arr = stringsRec(len - 1, letters);

    arr.forEach((i, ind) => {
      letters.forEach((j) => {
        if (i[i.length - 1] !== j) {
          arr.push(arr[ind] + j);
        }
      });
    });

    return arr.filter((i) => i.length === len);
  };
  return stringsRec(len, letters) /*.length*/;
}

const permAlone = (str) => {
  let arr = str.split("");
  let regex = /(.)\1+/;

  if (str.match(regex) !== null && str.match(regex)[0] === str) return 0;

  if (str.length == 1) return 1;

  const swap = ([a, b]) => [b, a];

  const distribute = (a, arr) => {
    let newArr = [];

    arr.forEach((r) => {
      newArr.push([a, ...r]);
    });
    return newArr;
  };

  const generate = (arr) => {
    const len = arr.length;
    let newArr = [];

    if (len === 2) return [[...arr], swap(arr)];
    arr.forEach((i, ind, arr0) => {
      newArr.push(
        ...distribute(
          i,
          generate([...arr0.slice(0, ind), ...arr0.slice(ind + 1)])
        )
      );
      //console.log(...newArr);
    });
    return newArr;
  };
  return generate(arr)
    .map((i) => i.join(""))
    .filter((i) => !regex.test(i)).length;
};
console.log(permAlone("a"));
//console.log(...perm("12"));
