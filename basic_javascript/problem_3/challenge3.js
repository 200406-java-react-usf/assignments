function removeChar(input, position) {
    if (typeof(input) != "string") {
        return ("First parameter needs to be a string")
    }
    if (input[position] == undefined) {
        return ("Second parameter needs to be a number or number is not in range of string");
    }
    word = input.replace(input[position], '');
    return word
}

console.log(removeChar("jeremy is very cool", 18));

module.exports = {
    removeChar
}