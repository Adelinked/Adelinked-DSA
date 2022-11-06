/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let sLength = s.length;
  let tLength = t.length;
  let current = 0;
  for (let i = 0; i < sLength; i++) {
    const index = t.slice(current).indexOf(s[i]);
    if (index < 0)
      return false;
    current += index + 1;
    if (current == tLength && i < sLength - 1)
      return false;
  }
  return true;
};


console.log(isSubsequence("ace", "abcde")) // true
console.log(isSubsequence("aec", "abcde")) // false
console.log(isSubsequence("abc", "ahbgdc")) // true
console.log(isSubsequence("axc", "ahbgdc")) // false
console.log(isSubsequence("aaaaaa", "bbaaaa")) // false
console.log(isSubsequence("twn", "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxtxxxxxxxxxxxxxxxxxxxxwxxxxxxxxxxxxxxxxxxxxxxxxxn")) // false
// true
