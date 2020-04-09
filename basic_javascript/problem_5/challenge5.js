function resetLoop(word, end) {
    if ((typeof word !== 'string') || typeof end !== 'number')
        return "Parameters are incorrect";

    word = word.toLowerCase()
    word = word.split("");

    const a2 = "abcdefghijklmnopqrstuvwxyz";
    let encrypt = '';

    for (i of word) {
        alphabetIndex = a2.indexOf(i);
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


test_String = "Zeremy";
testing = resetLoop(test_String, 1);
console.log(testing);