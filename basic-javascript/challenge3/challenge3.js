// Write a function to remove a character at the 
// specified position of a given string and return the new string.

let removeChar = (str, index) => {
    //making sure the index is a valid number
    if (isNaN(index) || str.length < index || index < 0)
        return 'Invalid index please try againg';
    //String should not be empty
    if (str.length <= 0) return 'please provide a non-empty string';
    // remove a character and return string
    str = str.substring(0, index) + str.substring(index+1);
    //console.log(str);
    return 'a character was removed form the string: \n' + str;
}
module.exports = {
    removeChar
}
console.log(removeChar("An  extra space was removed", 'l'));