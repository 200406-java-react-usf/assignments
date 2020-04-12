/** 
 * Problem 3: Write a function to remove a character at the specified position of a given string and 
 * return the new string.
 */

const removeCharAt = function (myString, index) {
    return (myString.substring(0,index-1) + 
            myString.substring(index,myString.length));
 }

console.log(removeCharAt('This is a string.', 9));

module.exports = {
        removeCharAt
};