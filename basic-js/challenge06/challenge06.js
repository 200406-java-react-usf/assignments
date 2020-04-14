function vowelCount(aString){
    let i = 0 

    if (/a|e|i|o|u|y/i ){
        i++;
        return(`This String has ${i} vowels`);

    } else return("No vowels here")
}

//vowelCount("Testerino")

module.exports = vowelCount