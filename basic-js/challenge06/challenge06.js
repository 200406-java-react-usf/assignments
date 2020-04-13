function vowelCount(aString){
    let i = 0 

    if (/a|e|i|o|u|y/i ){
        i++;
        console.log(`This String has ${i} vowels`);

    } else console.log("No vowels here")
}

vowelCount("Testerino")