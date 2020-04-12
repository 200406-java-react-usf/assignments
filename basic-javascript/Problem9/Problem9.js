/**
 * Write a function to find the longest string from a given array of strings 
 * and returns the string’s array index.
 * 
 */

const checkLongestString = function(arrayOfStrings) {
    if (!arrayOfStrings) {
        throw new Error("Please input a valid array of strings");
    }
    let longestString = "";
    let index = -1;
    for (let i = 0; i < arrayOfStrings.length; i++) {
        if (arrayOfStrings[i].length > longestString.length) {
            longestString = arrayOfStrings[i];
            index = i+1; //counting from 1 instead of 0
        }
    }
    return index;
}

module.exports = {
    checkLongestString
};

arrayOfStrings = ["this", "is", "a", "tester"];
console.log(checkLongestString(arrayOfStrings));