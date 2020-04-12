const ceaserShift = (phrase, shift) => {
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