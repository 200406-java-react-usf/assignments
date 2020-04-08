/**
 * Write a function to remove a character at the specified position 
 * of a given string and return the new string. 
 * Disclaimer: 
 */

 function removeCharAt(myString, index) {
    return (myString.substring(0,index-1) + 
            myString.substring(index,myString.length));
 }

 console.log(removeCharAt('potato', 3));