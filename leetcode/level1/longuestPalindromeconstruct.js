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
  console.log(sLength, counts)

  const removeEvenLetters = () => {
    let maxEven, position;
    let evens = [];
    Object.values(counts).forEach((i, index) => {
      if (i % 2 == 1) {
        evens.push(Object.keys(counts)[index]);
        if (maxEven == undefined) {
          maxEven = i;
          position = index;
        }
        if (maxEven < i) {
          maxEven = i;
          position = index;
        }
      }
    });
    const maxEvenKey = Object.keys(counts)[position];
    console.log("even len=", evens.length);
    evens.forEach((i) => {
      delete counts[i];
    });
    return [maxEvenKey, maxEven];
  };
  const maxEvenLetter = removeEvenLetters();
  let palindrome = maxEvenLetter[0]?.repeat(maxEvenLetter[1]) ?? "";
  console.log(counts, maxEvenLetter)
  for (letter in counts) {
    palindrome =
      letter.repeat(counts[letter] / 2) +
      palindrome +
      letter.repeat(counts[letter] / 2);
  }
  return palindrome.length;
};

/*console.log(longestPalindrome("abccccdd"));//7
console.log(longestPalindrome("a"));//7*/
//console.log(longestPalindrome("bb"));//2
console.log(longestPalindrome("civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"));
//983