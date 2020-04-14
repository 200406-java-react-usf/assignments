const sut = require ('./Challenge_3');
describe('Remove a character', () => {
    test('Will remove Character', () => {
            expect(sut('test@test.com', 5)).toBeTruthy;
            expect(sut('test@test.com', 5)).toBe('test@est.com');
    });
});