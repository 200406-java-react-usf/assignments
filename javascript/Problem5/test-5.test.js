const sut = require('./solution-5');
let str = 'ABCDEFGHIJK';

describe ('testing ceaserslide',() => {

    test('returns shifted string', done => {
        expect(sut(str, 10)).toBe('KLMNOPQRSTU');
        done();
    });
})