const sut = require('./solution-6');
let str = 'abcdefghijklmnopqrstuvwxyz';
let str2 = 'test';

describe ('testing number of vowels in string',() => {

    test('returns number of vowels', done => {
        expect(sut(str)).toBe(5);
        done();
    });

    test('returns string with one character removed from 4th slot', done => {
        expect(sut(str2)).toBe(1);
        done();
    });
})