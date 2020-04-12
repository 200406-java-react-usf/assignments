const sut = require('./solution-5');

describe('solution-5', () => {

    test('should return a string after encryption', () => {

        expect(sut.ceaserShift('this is a test',5)).toBeTruthy();

    });

});