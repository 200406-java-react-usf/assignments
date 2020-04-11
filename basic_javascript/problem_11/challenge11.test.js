const sut = require('./challenge11');

let arr1 = [4, 2, 8, 4, 7];
let arr2 = [7, 4, 4, 2, 8];
let arr3 = ["sona", "diana", "ahri", "ezreal", "miss fortune", "evelynn", "akali"];
let arr4 = ["diana", "diana", "ezreal", "miss fortune", "ahri", "evelynn", "sona"];
let arr5 = [1, 1, 2, 2, 7, 7, 7, 9, 6]
let arr6 = [6, 1, 9, 1, 2, 7, 7, 2, 7]

testing = [arr1, arr2, arr3, arr4, arr5, arr6];

test("this should print out a true statement", () => {
    expect(sut.compareArray(arr1, arr2)).toBe(true);
})

test("this should print out a true statement", () => {
    expect(sut.compareArray(arr5, arr6)).toBe(true);
})

test("this should print out false statement", () => {
    expect(sut.compareArray(arr4, arr6)).toBe(false);
})

test("this should print out issue statement", () => {
    expect(sut.compareArray(arr4)).toBe("Please input an array")
})

test("this should print out issue statement", () => {
    expect(sut.compareArray()).toBe("Please input an array")
})