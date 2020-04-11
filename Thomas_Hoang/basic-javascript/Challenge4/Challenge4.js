//Write a function to check if the string "test" is present in a given string. If present, 
//return the string without any occurrences of “test”, otherwise return the original one.

function removeTest(str, word) {
    //Splits the words by the spaces between the words
    const words = str.split(' ');

    let newStr = ''

    for (position = 0; position < words.length; position++){
        if (words[position] !== word){
            newStr = newStr + ' ' + words[position]
        }
    }
    console.log(newStr)
}
removeTest('This test is a test','test')