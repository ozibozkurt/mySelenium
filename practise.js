
function areAnagrams(word1, word2) {
  // Convert both words to lowercase and remove spaces

  const str1 = word1.toLowerCase().replace(/\s/g, "");
  const str2 = word2.toLowerCase().replace(/\s/g, "");

  // Check if both strings have the same length
  if (str1.length !== str2.length) {
    return false;
  }

  // Sort the letters in each string and compare them
  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");
  return sortedStr1 === sortedStr2;
}

console.log(areAnagrams('pakize', 'oguzhan')); // false
console.log(areAnagrams("the eyes", "they see")); // true
console.log(areAnagrams('silent', 'listen')); // true
console.log(areAnagrams('hello', 'world')); // false

