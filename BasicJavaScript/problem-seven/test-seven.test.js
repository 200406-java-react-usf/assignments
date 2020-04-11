const sut = require('./solution-seven');

describe('testing numbers to print out the matching', () => {

    test('testing a given example and seeing if it matches the given result', () =>{

        expect(sut.fibSequence(8)).toBe(21);

    });

    test('testing a larger value', () =>{

        expect(sut.fibSequence(12)).toBe(144);

    });

    test('testing zero', () =>{

        expect(sut.fibSequence(0)).toBe(0);

    });

    test('testing one', () =>{

        expect(sut.fibSequence(1)).toBe(1);

    });

    test('testing two', () =>{

        expect(sut.fibSequence(2)).toBe(1);

    });

});