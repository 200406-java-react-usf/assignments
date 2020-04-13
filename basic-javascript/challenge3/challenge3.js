// Write a function to remove a character at the 
// specified position of a given string and return the new string.

let removeChar = (str, index) => {
    //str should be a string
    if(typeof str != 'string') throw(`${str} is not a string`)
    //making sure the index is a valid number
    if (typeof index != 'number')
        throw(`${index} is not a number`);
    if(index > str.length || index < 0)
    throw(`index out of range Error`)
    //str should not be an empty string
    if (str.length <= 0) throw(`An empty string was provide`);
    // remove a character and return string
    str = str.substring(0, index) + str.substring(index+1);
    //console.log(str);
    return str;
}
module.exports = {
    removeChar
}
//console.log(removeChar("An  extra space was removed", 'l'))