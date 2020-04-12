const equivArrays = require('./index');

describe('equivArrays', () => {
    test('should expect [7,4,3,1,2] and [1,2,3,4,7] to be true', () => {
        expect(equivArrays([7,4,3,1,2],[1,2,3,4,7])).toBe(true);
    });
    test('should expect [7,4,3,1,2] and [1,2,3,4,7,5] to be false', () => {
        expect(equivArrays([7,4,3,1,2],[1,2,3,4,7,5])).toBe(false);
    });
    test('should expect any parameter that is not an array to be invalid', () => {
        expect(equivArrays(2,3)).toBe('Need a valid array parameters');
    });
})