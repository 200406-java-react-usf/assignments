//collects the file
const sut = require("./solution-1");

//Setup to our testing
describe("leapYearCheck", () => {
  test("Should return true", () => {
    let date = new Date("April 12, 2016");
    expect(sut.leapYearCheck(date)).toBe(true);
  });

  test("Should return true", () => {
    let date = new Date("1/9/2000");
    expect(sut.leapYearCheck(date)).toBe(true);
  });

  test("Should return true", () => {
    let date = new Date("02/20/1980");
    expect(sut.leapYearCheck(date)).toBe(true);
  });

  test("Should return false", () => {
    let date = new Date("07/20/1997");
    expect(sut.leapYearCheck(date)).toBe(false);
  });
});
