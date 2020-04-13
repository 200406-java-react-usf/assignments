/** 
 * Problem 6: Write a function to count the number of vowels in a given string.
*/

const countVowels = string => Array.from(string)
  .filter(letter => 'aeiou'.includes(letter)).length;

console.log(countVowels('abcdefghijklmnopqrstuvwxyz'))
console.log(countVowels('test'))
console.log(countVowels('does this work?'))

module.exports = {
    countVowels
};