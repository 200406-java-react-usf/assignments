/*
    Basic JavaScript Assignment
    Problem #04

    Korey Keipe

    4.) Write a function to check if the string "test" is present in a given string. If present, return the string without any occurrences of “test”, otherwise return the original one.
*/


function stringTest(input,keyword){

    const newString = input.replace(keyword,"");

    return newString;

}

console.log(stringTest('this is a test string','test'));


