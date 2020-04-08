function removeChar(input, position) {
    if ((typeof input !== 'string') || ((typeof position !== 'number') || (position <= 0) || (position > input.length + 1))) {
        return "Parameters are incorrect";
    }
    word = input.split("");
    word.splice(position - 1, 1);
    return word.join("");
}


// start the position count from 1(user friendly)
console.log(removeChar("jeremy is very cool", 19));