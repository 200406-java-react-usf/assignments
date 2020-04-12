const sortByLetter = (phrase) => {

    if(typeof phrase !== 'string') throw Error ('You did not send me a string');
    if(phrase === '') throw Error ('You did not send me any message!');

    let setA = 'aeiou';
    let setB = 'bcdfg';
    let setC = 'hjklm';
    let setD = 'npqrstvxyz';

    let key = phrase[0];

    if(setA.indexOf(key) !== -1) return 'A';
    if(setB.indexOf(key) !== -1) return 'B';
    if(setC.indexOf(key) !== -1) return 'C';
    if(setD.indexOf(key) !== -1) return 'D';
    return 'E';

};

module.exports = {
    sortByLetter
}