const ceaserShift = (phrase, shift) => {
    if (typeof phrase !== 'string') throw Error ('You did not give me a valid string');
    if (phrase === '') throw Error ('You did not send me any message...');
    if (typeof shift !== 'number' || shift <= 0) throw Error ('You did not give me a valid number');

    let text = 'abcdefghijklmnopqrstuvwxyz';
    let cryp = ''
    for (let i = 0; i<phrase.length; i++){
        let c = phrase[i];
        if (c.match(/[a-z]/i)){
            let code = phrase.charCodeAt(i);
            if ((code >= 65) && (code <= 90)){
                c = String.fromCharCode(((code - 65 + shift) % 26) + 65);
            }
            else if ((code >= 97) && (code <= 122)){
                c = String.fromCharCode(((code - 97 + shift) % 26) + 97);
            }
        }
        cryp += c;
    }
    return cryp;
}




module.exports = {
    ceaserShift
}