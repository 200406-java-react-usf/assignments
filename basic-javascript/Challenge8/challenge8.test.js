const sut = require('./challenge8');

// addArr([1,2,3], [3,2,1]) = [4,4,4]
// addArr([1,2,3,4,5], [1,2,3]) = [2,4,6,4,5]
describe ('challenge8', () => 
{
    test('addition between [1,2,3] and [3,2,1] should be [4,4,4]', () =>
    {
        expect(sut.addArr([1,2,3], [3,2,1])).toEqual([4,4,4]);
    });

    test('addition between [1,2,3,4,5] and [1,2,3] should be [2,4,6,4,5]', () =>
    {
        expect(sut.addArr([1,2,3,4,5], [1,2,3])).toEqual([2,4,6,4,5]);
    });

    test('addition between [2,2,2] and [1,2,3,4,5] should be [3,4,5,4,5]', () =>
    {
        expect(sut.addArr([2,2,2], [1,2,3,4,5])).toEqual([3,4,5,4,5]);
    });

});
