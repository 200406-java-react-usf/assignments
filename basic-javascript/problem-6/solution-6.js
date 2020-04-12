const checkVowels = (phrase) => {
    if (typeof phrase !== 'string') throw Error ('You did not give me a correct phrase!');
    if (phrase === '') throw Error ('You didn\'t type anything!');


    let vowels = 'aeiouAEIOU';
    let counter = 0;
    for(let i=0; i<phrase.length; i++){

        if (vowels.indexOf(phrase[i]) !== -1) counter++;

    }
    return counter;
}


module.exports = {
    checkVowels
}