/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let result = [nums[0]], lenght = nums.length;
  for (let i = 1; i < lenght; i++) {
    result[i] = result[i - 1] + nums[i];
  }
  return result;
};

console.log(runningSum([1, 2, 3, 4]))