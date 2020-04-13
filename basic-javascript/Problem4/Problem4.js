/**
 * Write a function to check if the string "test" is present in a given 
 * string. If present, return the string without any occurrences of 
 * “test”, otherwise return the original one.
 */

const deleteOccurencesofTest = function(myString) {
    if (!(typeof myString === "string")) {
        throw new TypeError();
    }
     while(myString.includes("test")) {
         var testIndex = myString.indexOf("test");
         if (myString.charAt(testIndex-1) === " ") {
            myString = myString.substring(0,testIndex-1) +
            myString.substring(testIndex+4, myString.length);
         } else {
            myString = myString.substring(0,testIndex) +
            myString.substring(testIndex+4, myString.length);
         }
     }
     return myString;
}


module.exports = {
    deleteOccurencesofTest
};
 