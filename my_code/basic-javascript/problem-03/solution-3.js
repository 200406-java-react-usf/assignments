/*
    Korey Keipe
    Problem #3

    3.) Write a function to remove a character at the specified position of a given string and return the new string.
*/

function characterSwap(input,position){

    let stringArray = input.split('');
        stringArray[position] = '';
    let newString = stringArray.toString();
        newString = newString.replace(/,/g,"");
  
    return newString;
}
console.log(characterSwap('Testing',3));

module.exports = characterSwap;