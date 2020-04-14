function caesarShift(word, end) {
    if ((typeof word != 'string') || typeof end != 'number') throw new Error('Parameters are incorrect');


    word = word.toLowerCase()
    word = word.split("");

    const a2 = "abcdefghijklmnopqrstuvwxyz";
    let encrypt = '';

    for (number of word) {
        alphabetIndex = a2.indexOf(number);
        counter = alphabetIndex;
        for (let j = 0; j < end; j++) {
            counter++;
            if (counter >= a2.length) {
                counter = 0;
            }
        }
        encrypt += a2[counter];
    }
    return encrypt;
}

module.exports = {
    caesarShift
}