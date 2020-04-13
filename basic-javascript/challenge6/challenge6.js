//Write a function to count the number of vowels in a given string.


countVowels = (str) => {
    let count = 0;
    const vowels =  `aeiouAEIOU`;

    if(typeof str != 'string') throw('Not a string');
    
    for (i=0; i<str.length; i++) {
        if(vowels.indexOf(str.charAt(i)) >= 0)
         count++;        
    }
    //console.log(count);
    return count;
}
module.exports = {
    countVowels
}
//CountVowels(`How many vowels do you see`);