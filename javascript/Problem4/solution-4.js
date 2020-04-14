/**
 * JavaScript Assignment #4
 * By: Mohamed Aboulela
 * Purpose: Write a function to check if the string "test" is present in a given string. 
 * If present, return the string without any occurrences of “test”, otherwise return the original one.
 */

function RemoveTest(str1) {
    str1 = str1.replace("test", "");
    return str1;
}

console.log(RemoveTest("tostinotestdeckers"));
console.log(RemoveTest("no way this workstest"));

module.exports = 
    RemoveTest;