const removeTest = (phrase) => {
    if(typeof phrase !== 'string') throw Error ('You did not sent me a string!');

    if (phrase.includes('test')){
        phrase = phrase.replace(/test /gi,'');
    }
    return phrase;
}


module.exports = {
    removeTest
}