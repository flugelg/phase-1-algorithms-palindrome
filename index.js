function isPalindrome(word) {

  let reversed = word.split("").reverse().join("")

  return reversed === word
}

/* 
  Convert word to array
  reverse each letter of the word
  compare reversed word to original
*/

/*
  Used .split to make split each letter into an array element.
  .reverse to reverse the array
  .join to join each element of the reversed array to create an string again
  compare the reversed string to the original
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
