function longestString(input) {
    if (typeof(input) != 'object')
        return ("Given Parameter incorrect please give me an array");

    for (i = 0; i < input.length; i++) {
        if (typeof(input[i]) != 'string')
            return ("Your array contains elements that is not a string. Please fix");
    }

    wordArray = input;
    let long1 = '';
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i].length > long1.length)
            long1 = wordArray[i];
    }
    index = wordArray.indexOf(long1)
    return index;
}

module.exports = {
    longestString
}