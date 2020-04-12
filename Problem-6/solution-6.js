//Write a function to count the number of vowels in a given string.

function countVowel(str){
    var count = 0;
    var regex = /a|e|i|o|u/i;
    for(var i = 0; i<str.length; i++){
        if(regex.test(str[i]))
            count++;
    }

    return count;
}

//happai = 3 vowels
console.log(countVowel("happai"));

module.exports = {
    countVowel
}