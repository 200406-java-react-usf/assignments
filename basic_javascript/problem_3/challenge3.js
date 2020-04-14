function removeChar(input, position) {
    if (typeof(input) != "string") {
        throw Error("First parameter needs to be a string")
    }
    if (typeof(position) != 'number') {
        throw Error("Second parameter needs to be a number or number is not in range of string");
    }
    word = input.replace(input[position], '');
    return word
}

module.exports = {
    removeChar
}