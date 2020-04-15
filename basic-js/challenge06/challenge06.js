function vowelCount(aString){
    let x = aString.match(/a|e|i|o|u|y/i )
    return x.length
   
}

// for(i=0;i<aString.length;i++){
//     if ({

//     } else return("No vowels here")
// }

// return(`This String has ${x} vowels`)}

// //vowelCount("Testerino")

module.exports = vowelCount