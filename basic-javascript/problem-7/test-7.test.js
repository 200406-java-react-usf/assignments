const sut = require('./solution-7');

describe('solution-7', () => {

    test('should return the correct value from the fibonacci sequence', () => {

        expect(sut.fibonacci(5)).toBe(5);
    });

    test('should throw error if a number is not passed in', () => {
        expect( () => {
            sut.fibonacci('a');
        }).toThrow('You did not send me a valid number');
    });

    test('should return -1 if a negative number is passed in', () => {

        expect(sut.fibonacci(-3)).toBe(-1);

    });

    test('testing how long it is for a large number to be inputed', () => {
        expect(sut.fibonacci(99)).toBe(218922995834555200000);
    });

})