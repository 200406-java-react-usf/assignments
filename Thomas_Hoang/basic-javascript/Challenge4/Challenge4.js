//Write a function to check if the string "test" is present in a given string. If present, 
//return the string without any occurrences of “test”, otherwise return the original one.

function removeTest(str, word) {
    //Splits the words by the spaces between the words
    const words = str.split(' ');
    if (!str.includes(word)) throw Error('That word is not found in the string')
    let newStr = ''

    for (position = 0; position < words.length; position++){
        if (words[position] !== word){
         
           newStr = newStr + words[position] + ' '
        }
    }
    return(newStr)
}
module.exports = removeTest;