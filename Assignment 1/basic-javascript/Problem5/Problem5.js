/**
 * Write a function that takes in a string and a number as parameters
 * and implements a Caesar Shift encryption.
 */

const ceasarShift = function(myString, shift) {
    if (!(typeof myString === "string") || !(typeof shift === "number")) {
        throw new TypeError();
    }
    let array = [];
    for (let i = 0; i < myString.length; i++) {
        let asciiVal = myString[i].charCodeAt(0);
        if (asciiVal == 32) {
            array.push(" ");
            continue;
        }
        let offset = 0;
        if (asciiVal <= 122 && asciiVal >= 97) { //checking for lower case
            offset = 97;
        } else if (asciiVal >= 65 && asciiVal <= 90) { //checking for upper case
            offset = 65
        }
        asciiVal -= offset;
        if (offset != 0) { //don't shift if its not a character
            asciiVal = asciiVal - shift;
        }
        if (asciiVal < 0) {
            asciiVal += 26;
        }
        array.push(String.fromCharCode(asciiVal+offset));
    }
    return array.join("");
}

module.exports = {
    ceasarShift
};