const sut = require('./index');

describe('charRemoval', () => {
    test('should remove the first \'e\' of the word Asleep', () => {
        expect(sut('Asleep', 3)).toBe('Aslep');
    });
    test('should expect an invalid index to be out of range', () => {
        expect(sut('Asleep', 40)).toBe('Number out of range');
    });
})
