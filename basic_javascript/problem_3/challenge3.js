function removeChar(input, position) {
    if (input[position] == undefined) {
        throw ("Gave me wrong inputs try again");
    }
    word = input.replace(input[position], '');
    return word
}
console.log(removeChar("jeremy is very cool", 18));