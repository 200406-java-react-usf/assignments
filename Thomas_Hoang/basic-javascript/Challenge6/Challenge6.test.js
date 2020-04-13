const sut = require('./Challenge6.js');
const str = ('This is my test encryption')

describe('vowel Counter', () => {

    test('Should return 8', () => { 
        sut.vowelCounter(str).toBe(8);
})
});