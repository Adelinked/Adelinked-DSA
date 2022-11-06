/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  let counts = {};
  let sLength = s.length;

  for (let i = 0; i < sLength; i++) {
    if (s[i] in counts) {
      counts[s[i]]++;
    } else {
      counts[s[i]] = 1;
    }
  }

  let maxOdd;
  for (let key in counts) {
    if (counts[key] % 2 === 1) {
      counts[key]--;
      if (maxOdd == undefined) {
        maxOdd = key;
      }
    }
  }
  if (maxOdd != null) counts[maxOdd]++;

  return Object.values(counts).reduce((prev, curr) => prev + curr, 0);
};

console.log(longestPalindrome("abccccdd")); //7
console.log(longestPalindrome("a")); //1
console.log(longestPalindrome("bb")); //2
console.log(
  longestPalindrome(
    "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"
  )
);
//983
