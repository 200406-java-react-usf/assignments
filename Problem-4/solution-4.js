//Write a function to check if the string "test" is present in a given string. If present, return the string without any occurrences of “test”, otherwise return the original one.

//if the string has test it will return the string without test otherwise return the original string

function replaceWrdTst(str){
    
    var regex = /test /gi;
    var newstr = str.replace(regex, "");
    regex = / test/gi;
    newstr = newstr.replace(regex, "");
    regex = /test/gi;
    newstr = newstr.replace(regex, "");
    return newstr;

}
console.log("to replace an occurance of test in a string (I love to test a test and make breakfast) is "+ replaceWrdTst("I love to test a test and make breakfast"));

module.exports = {replaceWrdTst}