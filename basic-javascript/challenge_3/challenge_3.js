/**Basic JavaScript Challenge 3
 * 
 * by Kennedy Wandelt
 * 
 * Contains a function which removes the character at a specified index of a string and returns it
**/

function deleteChar(string, index){
    str1 = string.slice(0, index)
    str2 = string.slice((index + 1), (string.length - 1))

    return str1 + str2
}

//console.log(deleteChar("delete a the 'a'.", 7))