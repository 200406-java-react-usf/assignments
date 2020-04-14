const sut = require ('./Challenge_4');
describe('getString', () => {
    test('Check for specified string - test', () => {
            expect(sut('What can I do without a test')).toBeTruthy;
    });
    test('Check for specified string test', () => {
        expect(sut('What can I do without')).toBeFalsey;
});
});