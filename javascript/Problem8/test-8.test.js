const sut = require('./solution-8');
var array1 = [1,2,3];
var array2 = [3,2,1];
var array3 = [1,2,3,4,5];
var array4 = [1,2,3];

describe ('testing array sum',() => {

    test('returns array sum', done => {
        expect(sut(array1, array2)).toStrictEqual([ 4, 4, 4 ]);
        done();
    });

    test('returns array sum of unequal length', done => {
        expect(sut(array3, array4)).toStrictEqual([ 2, 4, 6, 4, 5 ]);
        done();
    });
})