//Write a function to count the number of vowels in a given string.

function vowelCounter(str){
    const vowels = ('AEIOUY')
    const upperStr = str.toUpperCase()
    console.log(upperStr.length)

    var vowelCount = 0
    //Loops through each character in the string and checks if it is a vowel and then counts it
    for (i = 0; i < upperStr.length; i++){
        //Uppercase
        for (q = 0; q < vowels.length; q++){
            if (vowels.charAt(q) == upperStr.charAt(i)){
                vowelCount = vowelCount + 1
                console.log(vowelCount)
            }
    }
}
}
vowelCounter("This is my test string")