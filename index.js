function isPalindrome(word) {
  // interate from the beginning to the middle
  // racecar 7 / 2 == 3.5
  // bbbbbb 6 /3 == 3
  for (let i = 0; i <word.length / 2; i++) {
// for loop above will let me check to middle of the word, which works.
   // check each letter to the corresponding letter from the end
   const j = word.length -1 - i
   // if any letters don't match, return false
   if (word[i] !== word[j]) return false
  }
  // return true
  return true;
}

/* 
  Add your pseudocode here
  THAT MEANS if the 
  first letter is the same as the last letter, and the second letter is the same 
  as the second to last letter, etc. until we reach the middle, return true.

  iterate from beginning to the middle
      check each letter to the corresponding letter from the end
         if any letters don't match, return false

  return true
/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
