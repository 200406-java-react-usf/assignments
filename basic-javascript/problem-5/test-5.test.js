const sut = require('./solution-5');

describe('solution-5', () => {

    test('should return a string after encryption', () => {

        expect(sut.ceaserShift('this is a test',5)).toBeTruthy();

    });

    test('should throw error if empty string is given', () => {

        expect ( () => {
            sut.ceaserShift('');
        }).toThrow('You did not send me any message');
    });


    test('should throw error when shift is not a valid number', () => {

        expect ( () => {
            sut.ceaserShift('message',-3);
        }).toThrow('You did not give me a valid number');
    });
});

