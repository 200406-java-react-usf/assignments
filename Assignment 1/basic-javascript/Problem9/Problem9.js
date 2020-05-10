/**
 * Write a function to find the longest string from a given array of strings 
 * and returns the string’s array index.
 * 
 */

const checkLongestString = function(arrayOfStrings) {
    if (!(Array.isArray(arrayOfStrings))) {
        throw new TypeError();
    }
    let longestString = "";
    let index = 0;
    for (let i = 0; i < arrayOfStrings.length; i++) {
        if (!(typeof arrayOfStrings[i] === "string")) {
            throw new TypeError();
        }
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
