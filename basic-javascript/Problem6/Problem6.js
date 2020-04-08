/**
 * Write a function to count the number of vowels in a given string.
 */

function countVowels(myString) {
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

console.log(countVowels("This is a vowel test"));