const sut = require('./Challenge9.js');

describe('Longest String Test', () => {

    test('Should find that index 3 is longest', done => { 
       expect(sut(["This is the first", "This is the second", "This is the third", "This is the fourth and the longest"])).toBe("The longest string in the array is index: 3");
       done();
})
//     test('Should sum of 2 arrays and swap the arrays as intended', done => { 
//         expect(sut([1, 2, 3],[0 , 1, 2, 3, 4, 5])).toStrictEqual([ 1, 3, 5, 3, 4, 5 ]);
//         done();
// })
    test('Throws intended error', done => { 
        expect(() => {
            sut('test')
            }).toThrow('This is not an array');
        done();
})
});

