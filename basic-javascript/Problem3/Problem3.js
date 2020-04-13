/**
 * Write a function to remove a character at the specified position 
 * of a given string and return the new string. 
 */

const removeCharAt = function (myString, index) {
        if (!(typeof myString === "string")) {
                throw new TypeError();
        }
        return (myString.substring(0,index-1) + 
                myString.substring(index,myString.length));
 }

console.log(removeCharAt('potato', 3));

module.exports = {
        removeCharAt
};