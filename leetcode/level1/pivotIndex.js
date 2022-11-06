/**
 * @param {number[]} nums
 * @return {number}
 */
var runningSumLeft = function (nums) {
  let result = [nums[0]],
    lenght = nums.length;
  for (let i = 1; i < lenght; i++) {
    result[i] = result[i - 1] + nums[i];
  }
  return [0, ...result.slice(0, lenght - 1)];
};

var runningSumRight = function (nums) {
  let lenght = nums.length;
  let result = [nums[lenght - 1]];
  for (let i = lenght - 2; i >= 0; i--) {
    result[lenght - 1 - i] = result[lenght - 2 - i] + nums[i];
  }
  return [0, ...result.slice(0, lenght - 1)];
};

var sumArr = function (nums) {
  let lenght = nums.length;
  let somme = 0;
  for (let i = 0; i < lenght; i++) {
    somme += nums[i];
  }
  return somme;
};

var pivotIndex = function (nums) {
  let leftSommeArr = runningSumLeft(nums);
  let rightSommeArr = runningSumRight(nums);
  for (let i = 0; i < leftSommeArr.length; i++) {
    if (
      rightSommeArr.indexOf(leftSommeArr[i]) >= 0 &&
      sumArr(nums.slice(0, i)) === sumArr(nums.slice(i + 1, nums.length))
    ) {
      return i;
    }
  }
  return -1;
};

console.log(pivotIndex([2, 1, -1])) //0
console.log(pivotIndex([-1, -1, 0, 1, 1, 0])) //5
console.log(pivotIndex([-1, -1, -1, 1, 1, 1])) //-1