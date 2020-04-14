const sut = require("./solution-7");

describe("Determining fibonacci sequence for a certain number.", () => {
  test("To make sure that only a integer can be accepted", () => {
    let number = "Wrong Data";
    expect(() => {
      sut.fibonacci(number);
    }).toThrow("Not valid type");
  });

  test("-1 value of the fibonacci sequence, condition 1", () => {
    let number = -3;
    expect(sut.fibonacci(number)).toBe(-1);
  });

  test("0th value of the fibonacci sequence, condition 2", () => {
    let number = 0;
    expect(sut.fibonacci(number)).toBe(0);
  });

  test("The first value of the fibonacci sequence", () => {
    let number = 1;
    expect(sut.fibonacci(number)).toBe(1);
  });

  test("The 2th value of the fibonacci sequence", () => {
    let number = 2;
    expect(sut.fibonacci(number)).toBe(1);
  });

  test("The 8th value of the fibonacci sequence", () => {
    let number = 8;
    expect(sut.fibonacci(number)).toBe(21);
  });

  test("The 100th value of the fibonacci sequence", () => {
    let number = 100;
    expect(sut.fibonacci(number)).toBe(354224848179262000000);
  });
});
