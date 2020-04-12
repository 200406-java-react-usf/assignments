/*
    Basic JavaScript Assignment
    Problem #06

    Korey Keipe

    6.) Write a function to count the number of vowels in a given string.
*/
function countVauls(input){

    let stringCap = input.toUpperCase();
    let stringArray = stringCap.split('');
    let count = 0;

    for (x = 0; x<stringArray.length; x++){

        if(stringArray[x] == "A" ||stringArray[x] == "E" || stringArray[x] == "I" || stringArray[x] == "O" || stringArray[x] == "U"){
            count = count + 1;            
        }        
    }
    console.log(count);
}
countVauls('Korey Keipe');

module.exports = countVauls;