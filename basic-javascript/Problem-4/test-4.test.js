const sut = require("./solution-4");

describe("Removing all test words found in a string", () => {
  test("Testing with no test in the string", () => {
    let string = "Hello World";
    expect(sut.checkForTest(string)).toBe("hello world");
  });

  test("Testing with one test in the string", () => {
    let string = "Hello test World";
    expect(sut.checkForTest(string)).toBe("hello  world");
  });

  test("Testing with two test next to each other in the string", () => {
    let string = "Hello testtest World";
    expect(sut.checkForTest(string)).toBe("hello  world");
  });

  test("Testing with four test, one in the beginning and one in the end", () => {
    let string = "testHello testtest Worldtest";
    expect(sut.checkForTest(string)).toBe("hello  world");
  });

  test("Testing with a upper case Test in two locations", () => {
    let string = "TestHello Testtest Worldtest";
    expect(sut.checkForTest(string)).toBe("hello  world");
  });

  test("To make sure that only a string can be accepted", () => {
    let string = 12345;
    expect(() => {
      sut.checkForTest(string);
    }).toThrow("Not valid type");
  });
});
