const sut = require('./solution-4');
let str = 'tostinotestdeckers';
let str2 = 'no way this workstest';

describe ('testing removal of "test" in string',() => {

    test('returns string without any occurences of test', done => {
        expect(sut(str)).toBe('tostinodeckers');
        done();
    });

    test('returns string without any occurences of test', done => {
        expect(sut(str2)).toBe('no way this works');
        done();
    });
})
