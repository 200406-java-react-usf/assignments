//Write a function to check if the string "test" is present in a given string. If present, 
//return the string without any occurrences of “test”, otherwise return the original one.

function removeTest(str, word) {
    const length = word.length
    let index = str.indexOf(word)

    while(index >= 1) {
        index = str.indexOf(word)
        str = str.substring(0, index)
    }

    console.log(str)
    return str
}
removeTest('A test is a test', 'test')