const sut = require('./solution-11');
let array1 = [4,2,8,4,7];
let array2 = [7,4,4,2,8];
let array3 = [4,2,8,4];
let array4 = [7,5,4,2,8];

describe ('testing array size and contents if they are equal',() => {

    test('returns true', done => {
        expect(sut(array1, array2)).toBe(true);
        done();
    });

    test('returns false', done => {
        expect(sut(array1, array4)).toBe(false);
        done();
    });
    
    test('returns false', done => {
        expect(sut(array3, array4)).toBe(false);
        done();
    });
})