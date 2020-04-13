/**
 * Write a function to count the number of vowels in a given string.
 */

const countVowels = function(myString) {
    if (!(typeof myString === "string")) {
        throw new TypeError();
    }
    vowelCount = 0;
    for (let i = 0; i < myString.length; i++) {
        if (isaVowel(myString[i])) {
            vowelCount += 1;
        }
    }
    return vowelCount;
}

function isaVowel(myChar) {
    boolVowel = false;
    vowels = ['a','e','i','o','u'];
    if (vowels.includes(myChar.toLowerCase())){
        boolVowel = true;
    }
    return boolVowel;
}

module.exports = {
    countVowels
};

