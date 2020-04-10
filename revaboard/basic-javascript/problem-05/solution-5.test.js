const sum = require('./solution-5.js');

test('shift by 1', () => {
    expect(sum("Xyz", 1)).toBe("Yza");
  });