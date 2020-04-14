/**
 * JavaScript Assignment #6
 * By: Mohamed Aboulela
 * Purpose: Write a function to count the number of vowels in a given string.
 */

function getVowels(str) {
    var m = str.match(/[aeiou]/gi);
    return m === null ? 0 : m.length;
  }


  console.log(getVowels('abcdefghijklmnopqrstuvwxyz')); // 5
console.log(getVowels('test')); // 1
console.log(getVowels('ddd')); // 0

module.exports =
  getVowels;