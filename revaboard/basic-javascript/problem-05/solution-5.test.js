const sut = require('./solution-5.js');

test('shift by 1', () => {
    expect(sut("Xyz", 1)).toBe("Yza");
  });