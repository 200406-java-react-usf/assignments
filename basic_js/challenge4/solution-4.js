/** 
 * Problem 4: Write a function to check if the string "test" is present in a given string.
 * If present, return the string without any occurrences of “test”, otherwise return the original one.
*/

function testSearch(input) {
    if (typeof(input) != 'string')
        return "Not a string!"

    input = input.toLowerCase();
    return input.replace(/\b(test)\b/gi, '')
}
module.exports = {
    testSearch
}