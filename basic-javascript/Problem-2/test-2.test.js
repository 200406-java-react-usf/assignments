//Collect the file information
const sut = require("./solution-2");

describe("Testing to see if the email provided is valid.", () => {
  test("Pass a valid email", () => {
    let email = "yourname@email.com";
    expect(sut.validEmailCheck(email)).toBe(
      "The email provided has been accepted."
    );
  });

  test("Pass an email with no @ symbol", () => {
    let email = "yournameemail.com";
    expect(sut.validEmailCheck(email)).toBe("The email provided is incorrect.");
  });

  test("Pass an email starting with a period", () => {
    let email = ".yourname@email.com";
    expect(sut.validEmailCheck(email)).toBe("The email provided is incorrect.");
  });

  test("Pass an email with a .a at the end", () => {
    let email = "yourname@email.com.a";
    expect(sut.validEmailCheck(email)).toBe("The email provided is incorrect.");
  });

  test("Pass an email with multiple of special characters", () => {
    let email = "yourname&(*@email.com.a";
    expect(sut.validEmailCheck(email)).toBe("The email provided is incorrect.");
  });

  test("Trying a non-string type", () => {
    let email = 123412342;
    expect(() => {
      sut.validEmailCheck(email);
    }).toThrow("Not valid type");
  });
});
