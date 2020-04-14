const sut = require("./solution-5");

describe("shifting a string by a certain number", () => {
  test("Return the ABCs starting at C", () => {
    let string = "abcdefghijklmnopqrstuvwxyz";
    let index = 2;
    expect(sut.caesarShiftEncryption(string, index)).toBe(
      "cdefghijklmnopqrstuvwxyzab"
    );
  });

  test("Shift the phase by 5", () => {
    let string = "I love coding";
    let index = 5;
    expect(sut.caesarShiftEncryption(string, index)).toBe("N%qtaj%htinsl");
  });

  test("To make sure that only a string can be accepted by the string", () => {
    let string = 12345;
    let index = 12;
    expect(() => {
      sut.caesarShiftEncryption(string, index);
    }).toThrow("Not valid type");
  });

  test("To make sure that only a number can be accepted by the index", () => {
    let string = "12345";
    let index = "Wrong Data";
    expect(() => {
      sut.caesarShiftEncryption(string, index);
    }).toThrow("Not valid type");
  });

  test("To make sure that both a string and a number can only be accepted", () => {
    let string = 12345;
    let index = "Wrong Data";
    expect(() => {
      sut.caesarShiftEncryption(string, index);
    }).toThrow("Not valid type");
  });
});
