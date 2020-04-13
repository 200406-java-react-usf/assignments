//Write a function to check if the string 
//"test" is present in a given string. If present, 
//return the string without any occurrences of “test”, 
//otherwise return the original one.


removeWord = (str, word) =>  {
    if(typeof(str) != 'string') {
        throw(`${str} is not a String`);
    }
    if(typeof(word) != 'string') {
        throw(`${word} is not a String`);
    }
    if(str.length < word.length) return str;
    const length = word.length;
    let index = str.toLowerCase().indexOf(word);

    while(index >= 0) {
        str = str.substring(0, index) + str.substring(index + length);        
        index = str.indexOf(word);
    } 
    
    //console.log(str);
    return str;   
}

module.exports = {
    removeWord
}

//console.log(removeWord(555, 'test'));