/*
    Basic JavaScript Assignment
    Problem #05

    Korey Keipe

    5.) Write a function that takes in a string and a number as parameters and implements a Caesar Shift encryption.
*/

const alpha = ('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
const alphaA = alpha.split("");
let alphaShift = ('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
let newAlpha = alphaShift.split("");

function caesarShift(input,shift){

    for (x = 1; x < shift; x++){
        shifted = newAlpha.shift();
        newAlpha.push(shifted)
    }

    inputArray = input.toUpperCase().split('');

    let output = [];

    for (y = 0; y < inputArray.length; y++){
        for (z = 0; z < alphaA.length; z++){    
            if (alphaA[z]==inputArray[y]){
                output.push(newAlpha[z]);
            }
        }        
    }

    outputString = output.toString()
    console.log(outputString.replace(/,/g,""));
            
}
caesarShift('testing testing',2);

module.exports = caesarShift;
// TESTING shoulld equal --> UFTUJOH

