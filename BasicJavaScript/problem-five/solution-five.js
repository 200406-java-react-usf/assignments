/*
    Ceasar Shift:
        -in short, takes a letter, and replaces it by another letter 3 places down the alphabet
            -a shifts to d, l shifts to o

    Idea for funtion:
        -declare a string of the alphabet
        -take an input string
        -loop thru alphabet string, find the character that matches
        -then using .replace method, replace the char in the input string with the char in the 
         alphabet string + 3

        *** might need double loop, one to run thru each char in input string, and test it against each 
            alphabet char
*/

let alphaString = 'abcdefghijklmnopqrstuvwxyz';

let inputString = 'ab';

let ceasarString;

for (var i = 0; i < inputString.length; i++){

    for (var j = 0; j < alphaString.length; j++){

        if (inputString[i] === alphaString[j]){
            ceasarString = inputString.replace(inputString[i],alphaString[j+3]);
        }

    }

}

console.log(ceasarString);


/*
    Currently works with one letter strings
*/