/**
 * Write a function that takes in a string and a number as parameters
 * and implements a Caesar Shift encryption.
 */

//This will only use lower case strings
const ceasarShift = function(myString, shift) {
    myString = myString.toLowerCase();
    var array = [];
    for (let i = 0; i < myString.length; i++) {
        var asciiVal = myString[i].charCodeAt(0);
        if (asciiVal == 32) {
            array.push(" ");
            continue;
        }
        asciiVal -= 97;
        asciiVal = asciiVal - shift;
        if (asciiVal < 0) {
            asciiVal += 26;
        }
        array.push(String.fromCharCode(asciiVal+97));
    }
    return array.join("");
}

module.exports = {
    ceasarShift
};