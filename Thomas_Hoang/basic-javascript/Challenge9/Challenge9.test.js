const sut = require('./Challenge9.js');

describe('Longest String Test', () => {

    test('Should find that index 3 is longest', done => { 
       expect(sut(["This is the first", "This is the second", "This is the third", "This is the fourth and the longest"])).toBe("The longest string in the array is index: 3");
       done();
})
    test('Throws intended error', done => { 
        sut('test', err => {
            expect(err).ToBeTruthy()
            expect(err).toEqual('This is not an array');
            done();
        })
        done();
})
});

