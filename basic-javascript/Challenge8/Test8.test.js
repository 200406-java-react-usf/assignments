const sut = require ('./Challenge_8');
describe('Adds the values of arrays, even if the arrays are different sizes.', () => {
    test('Test should return addition', () => {
            expect(sut([1,2,3], [3,2,1])).toStrictEqual([4,4,4]);
    });
    test('Test should return addition', () => {
        expect(sut([1,2,3,4,5], [1,2,3])).toStrictEqual([2,4,6,4,5]);
});
});

