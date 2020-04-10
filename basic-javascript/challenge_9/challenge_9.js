/**Basic JavaScript Challenge 9
* 
* by Kennedy Wandelt
* 
* a function to find the longest string from a given array of strings and returns the string’s array index.
**/

longestString = (userArray) => {
    let largestStr = '';
    largeIndx = null;
    for (i = 0; i < userArray.length; i++) {
        x = userArray[i];
        if (x.length > largestStr.length) {
            largestStr = x;
            largeIndx = i;
        }
    }
    return largeIndx;
}

console.log(longestString(['here', 'is', 'the', 'array']))