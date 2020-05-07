/*
    Basic JavaScript Assignment
    Problem #09

    Korey Keipe

    9.) Write a function to find the longest string from a given array of strings and returns the string’s array index.
*/

function findStringIndex(stringArray){   
    
    let word = '';
    for (let x=0; x<stringArray.length ;x++){
        if(stringArray[x].length > word.length){
            word=stringArray[x];
        }      
    }
    index = stringArray.indexOf(word)
    return index;
}
findStringIndex(['this','is','a','test','array','of','strings']);
console.log(findStringIndex(['this','is','a','test','array','of','strings']));


module.exports = findStringIndex;