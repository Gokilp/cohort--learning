/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

// lower case 
// String to Array 

function isAnagram(str1, str2) {
  // Check if the lengths of the strings are equal
  if (str1.length !== str2.length) {
    return false;
  }

  // Convert strings to lowercase, split into characters, sort, and join back to a string
  const sortedStr1 = str1.toLowerCase().split('').sort().join('');
  const sortedStr2 = str2.toLowerCase().split('').sort().join('');

  // Return whether the sorted strings are equal
  return sortedStr1 === sortedStr2;
}

// Example usage
console.log(isAnagram("aabbacc", "aaabbacc")); // false

// Export the function
module.exports = isAnagram;