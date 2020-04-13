//Write a function to count the number of vowels in a given string.

function vowelCounter(str){
    const vowels = ('AEIOUY')
    if (str == '') throw Error('There is no characters')
    const upperStr = str.toUpperCase()

    let vowelCount = 0
    //Loops through each character in the string and checks if it is a vowel and then counts it
    for (i = 0; i < upperStr.length; i++){
        if (vowels.indexOf(upperStr[i]) !== -1){
            vowelCount = vowelCount + 1
        }   
    }   
    return(vowelCount)
}

//vowelCounter('This is my test')
module.exports = vowelCounter;