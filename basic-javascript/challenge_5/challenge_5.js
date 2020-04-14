/**Basic JavaScript Challenge 5
* 
* by Kennedy Wandelt
* 
* Contains a function which accepts a string parameter and encrypts it via Caesar Shift
**/

function caesarShift(userString) {

    if(typeof(userString) !== "string") throw new Error("Input was not a string");

    //output string
    var newString = "";

    //iterates through the string and converts only letter characters
    for (i = 0; i < userString.length; i++) {
        char = userString.charCodeAt(i);
        //lower case range
        if (char > 96 && char < 122) {
            char++;
            newString = newString + String.fromCharCode(char);
        }
        else if (char > 64 && char < 90) {
            char++;
            newString = newString + String.fromCharCode(char);
        }
        //convert z to a and Z to A
        else if (char == 122) {
            char = 97;
            newString = newString + String.fromCharCode(char);
        }
        else if (char == 90) {
            char = 65;
            newString = newString + String.fromCharCode(char);
        }
        //maintains punctuation and spacing characters
        else {
            newString = newString + String.fromCharCode(char);
        }
    }
    return newString;
}

module.exports = {
    caesarShift
}
