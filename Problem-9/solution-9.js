//Write a function to find the longest string from a given array of strings and returns the string’s array index.
//['abc','cdesf','abcdef'] = 6

function indexOfLargestStr(arryOfStrs){
    let largestStrIndex = arryOfStrs[0].length;

    for(var i = 1; i<arryOfStrs.length; i++){
        if(largestStrIndex<arryOfStrs[i].length)
            largestStrIndex = arryOfStrs[i].length;
    }
    return largestStrIndex;

}

module.exports = {
    indexOfLargestStr
}