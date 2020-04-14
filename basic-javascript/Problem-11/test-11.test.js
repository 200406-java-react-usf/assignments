const sut = require("./solution-11");

describe("Compares two different arrays and checks if they are equal", () => {
  test("First example", () => {
    let arr1 = [4, 2, 8, 4, 7];
    let arr2 = [7, 4, 4, 2, 8];
    expect(sut.compareTwoArrays(arr1, arr2)).toBe(true);
  });

  test("Second example", () => {
    let arr1 = [4, 2, 8, 4, 7];
    let arr2 = [7, 5, 4, 2, 8];
    expect(sut.compareTwoArrays(arr1, arr2)).toBe(false);
  });

  test("Third example", () => {
    let arr1 = [4, 2, 8, 4];
    let arr2 = [7, 5, 4, 2, 8];
    expect(sut.compareTwoArrays(arr1, arr2)).toBe(false);
  });

  test("Reverse 0f third example", () => {
    let arr1 = [4, 2, 8, 4, 8];
    let arr2 = [7, 5, 4, 2];
    expect(sut.compareTwoArrays(arr1, arr2)).toBe(false);
  });
});
