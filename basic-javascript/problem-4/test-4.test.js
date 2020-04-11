const sut = require('./solution-4');

describe ('solution-4', () => {
   
    test('should remove all of the instances of the word "test"', () => {

        expect(sut.removeTest('test this test that')).toEqual('this that');

    });

    test('should give an error when a non-string value is passed', () => {
        expect ( () => {
            sut.removeTest(4);
        }).toThrow();
    });

});