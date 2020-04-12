// Write a function to check if the string "test" is present in a 
// given string. If present, return the string without any occurrences of 
// “test”, otherwise return the original one.
const stringData = require('./solution4DB');

const getAllStrings = (cb) => {
    setTimeout(() => cb(stringData), 250);
};

const testString = (string, cb) => {
    setTimeout(() => {
        if (!string.search('test')) throw string;
        if (string.search('test')) throw string.replace('test', ' ');
        cb(string);
    }, 250);
}

module.exports = {
    testString,
    getAllStrings
}
