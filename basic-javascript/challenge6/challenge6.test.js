const sut = require('./challenge6');

describe('challlenge_6', () => {
    test('should return number of bowels in the string', () => {
        expect(countVowels('ULTRAREVOLUTIONARIES')).toBe(10);  
     });
    test('Should throw error not a string if str is not a string', () => {
        expect(() => {
            countVowels(564);
        }).toThrow();
    });
})
