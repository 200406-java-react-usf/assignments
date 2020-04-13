/**
 * Problem 9: Write a function to find the longest string from a given array of strings and returns the string’s array index.
 */

function indexOfLargestStr(arrayOfStrs){
    let largestStrIndex = arrayOfStrs[0].length;

    for(var i = 1; i<arrayOfStrs.length; i++){
        if(largestStrIndex<arrayOfStrs[i].length)
            largestStrIndex = arrayOfStrs[i].length;
    }
    return largestStrIndex;
}

module.exports = {
    indexOfLargestStr
}