const sut = require("./solution-8");

describe("Adding two array together.", () => {
  test("Adding equal size arrays", () => {
    let arry1 = [1, 2, 3];
    let arry2 = [3, 2, 1];

    expect(sut.addArry(arry1, arry2));
  });

  test("Adding unequal size arrays part 1", () => {
    let arry1 = [1, 2, 3, 4, 5];
    let arry2 = [1, 2, 3];

    expect(sut.addArry(arry1, arry2));
  });

  test("Adding unequal size arrays part 2", () => {
    let arry1 = [1, 2, 3];
    let arry2 = [1, 2, 3, 4, 5];

    expect(sut.addArry(arry1, arry2));
  });
});
