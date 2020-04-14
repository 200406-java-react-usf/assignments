const sut = require("./solution-6");

describe("Counting all the vowels in a string", () => {
  test("To make sure that only a string can be accepted", () => {
    let string = 12345;
    expect(() => {
      sut.countVowels(string);
    }).toThrow("Not valid type");
  });

  test("Return the value 2", () => {
    let string = "Hello";
    expect(sut.countVowels(string)).toBe("There are 2 vowels.");
  });

  test("Return the value 8", () => {
    let string = "Hello World, my name is Abraham";
    expect(sut.countVowels(string)).toBe("There are 8 vowels.");
  });

  test("Return the value 7", () => {
    let string = "Mitosis is in the cell";
    expect(sut.countVowels(string)).toBe("There are 7 vowels.");
  });
});
