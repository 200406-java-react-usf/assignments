function getVowels(str) {
    if (typeof str !== 'string')
        return ("Please give me a string value");

    var m = str.match(/[aeiou]/gi);
    return m === null ? 0 : m.length;
}

module.exports = {
    getVowels
}