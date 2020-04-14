const sut = require ('./Challenge_2');
describe('validEmail', () => {
    test('Expect valid email', () => {
            expect(sut('test@test.com')).toBe(true);
    });

    test('Expect invalid email', () => {
            expect(sut('tests1')).toBe(false);
    });
});