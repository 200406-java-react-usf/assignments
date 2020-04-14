const sut = require ('./Challenge_5');
describe('Ceasar Shift', () => {
    test('Caesar Shift Encryption will be valid', () => {
            expect(sut('ONCEAGAIN', 12)).toBeTruthy;
    });
    test('Caesar Shift Encryption will be invalid', () => {
        expect(sut('ONCEAGAIN', 0)).toBeFalsey;
});
});