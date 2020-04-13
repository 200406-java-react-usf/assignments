/**Basic JavaScript Challenge 3
 * 
 * by Kennedy Wandelt
 * 
 * Contains a function which removes the character at a specified index of a string and returns it
**/

function deleteChar(string, index){

    if(typeof(string) !== "string" || typeof(index) !== "number") throw new Error("Invalid inputs");

    str1 = string.slice(0, index);
    str2 = string.slice((index + 1), (string.length));

    return str1 + str2;
}

module.exports = {
    deleteChar
}
