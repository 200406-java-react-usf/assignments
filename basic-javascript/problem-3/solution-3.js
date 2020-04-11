

const removeChar = (phrase, position) => {
    if (typeof phrase !== 'string' || phrase === '') throw Error ('Not a valid string');
    if (position > phrase.length ) throw Error ('That position is longer than your phrase!');
    
    phrase = phrase.replace(phrase.charAt(position),"");
    return phrase;
}


module.exports = {
    removeChar
}