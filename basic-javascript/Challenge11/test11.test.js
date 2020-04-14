
const sut = require ('./Challenge_11');
describe('Adds the values of arrays, even if the arrays are different sizes.', () => {
    test('Validates that length is not the same', () => {
        expect(sut([4,2,8,4],[7,5,4,2,8])).toBe(false);
    });
    test('Validate that length is the same but values are different', () => {
        expect(sut([4,2,8,4,7],[7,5,4,2,8])).toBe(false);
    });
    test('Validates that content, values and order is the same', () => {
         expect(sut([4,2,8,4,7],[4,2,8,4,7])).toBe(true);
    });
    test('Validates that content and values are same but value order different', () => {
        expect(sut([4,2,8,4,7],[4,8,2,4,7])).toBe(false);
});
});