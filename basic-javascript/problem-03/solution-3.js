/*
    Korey Keipe
    Problem #3

    3.) Write a function to remove a character at the specified position of a given string and return the new string.
*/

var inputString = new String('testing');
var index = 0;


function characterSwap(input,postion){

    var newString = input.replace(input.charAt(postion),"");

    return newString;

}

console.log(characterSwap(inputString,index));