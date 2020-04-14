const sut = require("./solution-10");

describe("Based off first character, assigns to a group", () => {
  test("Assigning to group A", () => {
    let string = "A beautiful day to save lives";
    expect(sut.lookingAtFirstChara(string)).toBe("A");
  });

  test("Assigning to group B", () => {
    let string = "cookies are my favorite";
    expect(sut.lookingAtFirstChara(string)).toBe("B");
  });

  test("Assigning to group C", () => {
    let string = "How are you today";
    expect(sut.lookingAtFirstChara(string)).toBe("C");
  });
  test("Assigning to group D", () => {
    let string = "Never say never";
    expect(sut.lookingAtFirstChara(string)).toBe("D");
  });

  test("Assigning to group E", () => {
    let string = "What are you doing today?";
    expect(sut.lookingAtFirstChara(string)).toBe("E");
  });

  test("To make sure that only a string can be accepted", () => {
    let string = 12345;
    expect(() => {
      sut.lookingAtFirstChara(string);
    }).toThrow("Not valid type");
  });
});
