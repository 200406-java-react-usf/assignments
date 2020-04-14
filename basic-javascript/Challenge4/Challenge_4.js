/*
Write a function to check if the string "test" is present in a given string. If present, 
return the string without any occurrences of “test”, otherwise return the original one.
*/

function getWord()
{
//The includes() method determines whether a string contains the characters of a specified string. 
let originalString = "What can I do without a test";
const word = "test";
if (originalString.includes(word))
    return 'Match found. Print String: ' + originalString;
    else
    return 'No Matches. Print String: ' + originalString;
}
console.log("Challenge 4: Check for specified string.")
console.log(getWord());
module.exports = getWord;