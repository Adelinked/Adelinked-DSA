function permAlone(str) {
  //split the string into an array of letters
  return permNoRepeat(str.split("")) /*.length*/;
}

function permNoRepeat(chars) {
  //if 's' contains a single letter, return it
  if (chars.length === 1) {
    return chars;
  }
  //here we will store all the permutations
  var p = [];

  //for every letter in the array
  for (var i = 0; i < chars.length; i++) {
    //create a copy of the array
    var temp = chars.slice();
    //remove current letter from it
    temp.splice(i, 1);

    //compute all the permutations of the remaining letters
    var perms = permNoRepeat(temp);

    //for each permutation, append the current letter and save it
    for (var j = 0; j < perms.length; j++) {
      //only keep it if the permutation does not start with the current letter
      //to get rid of duplicated consecutive letters
      //so we append 'a' with 'ba' but not with 'ab'
      if (!perms[j].startsWith(chars[i])) {
        p.push(chars[i] + perms[j]);
      }
    }
  }

  return p;
}
// Test here.
console.log(permAlone("abbbb"));
