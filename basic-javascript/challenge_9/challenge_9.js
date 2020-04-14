/**Basic JavaScript Challenge 9
* 
* by Kennedy Wandelt
* 
* a function to find the longest string from a given array of strings and returns the string’s array index.
**/

const longestString = (userArray) => {

    if(!Array.isArray(userArray)) throw new Error("The parameter was not an array");
    
    let largestStr ='';
    let largeIndx;

    for (i = 0; i < userArray.length; i++) {
        if(typeof(userArray[i]) !== "string") throw new Error("At least one variable in this array is not a string");

        var x = userArray[i];

        //updates the longest variable if the current string is longer
        if (x.length > largestStr.length) {
            largestStr = x;
            largeIndx = i;
        }
    }
    return(largeIndx);
}

module.exports = {
    longestString
}
