/*
    Ceasar Shift:
        -in short, takes a letter, and replaces it by another letter x places down the alphabet

    Idea for funtion:
        -use .charcodeat, add three to that value
            -charcodes for alphabet = 97 - 122
            - need to check for values that go passed 122, and then loop back to 97
*/



// let inputString = 'zoom';
// let caesarKey = 5;

function ceasarEncrypt(input,key){

    if (typeof input !== 'string' || typeof key !== 'number') throw Error('Please enter correct values');

    let outputString = [];

    for (var i = 0; i < input.length; i++){

        if (input.charCodeAt(i)+key > 122) {

            outputString.push(String.fromCharCode(96 + ((input.charCodeAt(i)+key)-122)));

        } else {

            outputString.push(String.fromCharCode(input.charCodeAt(i)+key));

        }

    } 

    return outputString.join('');

}

module.exports = {

    ceasarEncrypt

}


   // console.log(ceasarEncrypt(inputString,caesarKey));

