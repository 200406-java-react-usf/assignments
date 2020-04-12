//Write a function that takes in a string and a number as parameters and implements a Caesar Shift encryption.

function caesarShift(str, key){
    //Creates the inital alphabet and then converts them into a encrypted form based on the given key
    const alphabet = " ABCDEFGHIJKLMONPQRSTUVWXYZ0123456789"
    const alphabet2 = alphabet.toLowerCase()
    const encryptedAlphabet = alphabet.substring(key) + alphabet.substring(0,key)
    const encryptedAlphabet2 = encryptedAlphabet.toLowerCase()

    //Initializes variables
    const newStr = str
    const newChar = ''
    const currChar = ''
    let index = 1
    //Loop to go through the alphabet and set the new character to the encrypted equivalent
    for (i = 0; i < str.length; i++){
        currChar = newStr.charAt(i)
        //Uppercase
        index = alphabet.indexOf(currChar)
        if (index !== -1) {
            newChar = encryptedAlphabet.charAt(index);
            newStr.setCharAt(i, newChar)
        }
        //Lowercase
        index = alphabet2.indexOf(currChar)
        if (index != -1) {                
            encryptedAlphabet2 = encryptedAlphabet2.toLowerCase();                
            newChar = encryptedAlphabet2.charAt(index);                
            newStr.setCharAt(i, newChar);
        }
    }
        return newStr.toString()
}

caesarShift("This is my test encryption", 6)