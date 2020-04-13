//Write a function that takes in a string and a number as parameters and implements a Caesar Shift encryption.

function caesarShift(str, key){
    //Creates the inital alphabet and then converts them into a encrypted form based on the given key
    const alphabet = " ABCDEFGHIJKLMONPQRSTUVWXYZ0123456789"
    const alphabet2 = alphabet.toLowerCase()
    const encryptedAlphabet = alphabet.substring(key) + alphabet.substring(0,key)
    const encryptedAlphabet2 = encryptedAlphabet.toLowerCase()

    //Initializes variables
    const newStr = str.split('')
    let newChar = ''
    let currChar = ''
    let index = 1
    //Loop to go through the alphabet and set the new character to the encrypted equivalent
    for (i = 0; i < str.length; i++){
        currChar = newStr[i]
        //Uppercase
        index = alphabet.indexOf(currChar)
        if (index !== -1) {
            newChar = encryptedAlphabet.charAt(index);
            newStr[i] = newChar;
        }
        //Lowercase
        index = alphabet2.indexOf(currChar)
        if (index != -1) {                                
            newChar = encryptedAlphabet2.charAt(index);                
            newStr[i] = newChar;
        }
    }
    return(newStr.join(''))
}
caesarShift('This is my test encryption', 2)
module.exports = caesarShift;