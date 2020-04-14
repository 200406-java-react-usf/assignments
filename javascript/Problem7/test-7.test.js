const sut = require('./solution-7');

describe ('testing fibonacci',() => {

    test('returns fibonacci solution', done => {
        expect(sut(3)).toBe(2);
        done();
    });

    test('returns fibonacci solution', done => {
        expect(sut(8)).toBe(21);
        done();
    });
})