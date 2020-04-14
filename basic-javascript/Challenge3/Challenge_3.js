//Write a function to remove a character at the specified position of a given string and return the new string.
let originalString = 'Karen@gmail.com'
function removeChar(input, charPosition)
{
//The substring() method extracts the characters from a string, between two specified indices, and returns the new sub string.
 a = input.substring(0, charPosition);
 b = input.substring(charPosition + 1, input.length);
 return (a + b);
}
console.log("Challenge 3: Remove character from string.")
console.log(removeChar(originalString, 5));

module.exports = removeChar