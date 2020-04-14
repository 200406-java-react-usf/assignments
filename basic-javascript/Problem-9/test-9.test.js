const sut = require("./solution-9");

describe("Looking for longest string in the array", () => {
  test("Having the longest string at index 0", () => {
    let string = ("Wonderful", "amazing", "good", "great", "happy");

    expect(sut.longestString(string));
  });

  test("Having the longest string at index 5", () => {
    let string = ("super", "amazing", "good", "great", "happy", "wonderful");

    expect(sut.longestString(string));
  });

  test("Having the longest string at index 2", () => {
    let string = ("a", "amazing", "wonderful", "good", "great", "happy");

    expect(sut.longestString(string));
  });
});
