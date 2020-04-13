//Write a function to remove a character at the specified position of a given string and return the new string.

function removeCharacter(word, positionRemoved){
    const chars = word.split('');
    if (positionRemoved > (chars.length - 1)) throw Error('There\'s not that many letters in that word.')

    //Loops through the array of letters combining the letters and skipping the one at the position
    let newWord = ''

    for (position = 0; position < chars.length; position++){
        if (position !== positionRemoved){
            newWord = newWord + chars[position]
        }
    }
    return(newWord)

}

module.exports = removeCharacter;