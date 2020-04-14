//Collecting the file information
const sut = require("./solution-3");

describe("Removing a character from a string at a selected index", () => {
  test("Remove the third index", () => {
    //Creating the variables that will be used
    let string = "Hello World";
    let index = 3;
    //Writing the part that we expect to happen
    expect(sut.removeCharacter(string, index)).toBe("Helo World");
  });

  test("Removing the space", () => {
    let string = "Hello World";
    let index = 5;
    expect(sut.removeCharacter(string, index)).toBe("HelloWorld");
  });

  test("To make sure that only a string can be accepted", () => {
    let string = 12345;
    let index = 5;
    expect(() => {
      sut.removeCharacter(string, index);
    }).toThrow("Not valid type");
  });

  test("Removing the first index", () => {
    let string = "Hello World";
    let index = 0;
    expect(sut.removeCharacter(string, index)).toBe("ello World");
  });
});
