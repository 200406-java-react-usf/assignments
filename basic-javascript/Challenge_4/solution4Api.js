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
