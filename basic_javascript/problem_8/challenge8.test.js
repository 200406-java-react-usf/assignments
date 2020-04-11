const sut = require('./challenge8');
let arr1 = [1, 2, 3, 6, 9, 9, 9];
let arr2 = [4, 5, 6, 3, 5, 5, 6, 7465, 4, 55, 56, 33, 2, 4];
let arr3 = [1, 2, 3, 6, 9, 9, { value: 3 }, 9, 20];
let arr4 = [1, 2, 3, 6, 9, 9, "{ value: 3 }", 9, 20];
let arr5 = [1, 2, 3, 6, 9, 9, 4];
let arr6 = [];

test("Will out put a new array containing the sum of two arrays", () => {
    expect(sut.addingArrays(arr1, arr2))
})
test("Will out put error message because one of the elements isn't a 'number'", () => {
    expect(sut.addingArrays(arr3, arr2))
})
test("Will out put error message because one of the elements isn't a 'number'", () => {
    expect(sut.addingArrays(arr1, arr4))
})
test("Will out put a new array containing the sum of two arrays", () => {
    expect(sut.addingArrays(arr1, arr5))
})
test("Will out put a new array containing the sum of two arrays", () => {
    expect(sut.addingArrays(arr1, arr6))
})
test("Will out put a new array containing the sum of two arrays", () => {
    expect(sut.addingArrays(arr2, arr1))
})