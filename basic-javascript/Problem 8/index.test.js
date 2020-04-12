const pop = require('./index');
let testArray = [1, 2, 3, 4, 5];
let result = pop.popElements(testArray, 3);
let array1 = [1,2,3]
let array2 = [1,2,3,4]
let answer = [2,4,6,4]
let arrays = pop.addArr(array1,array2);

describe('popElement', () => {
    test('would expect result to be truthy', () => {
        expect(result).toBeTruthy();
        expect(result).toBeTruthy();
        expect(result.arr).toBeTruthy();
        expect(result.popArr).toBeTruthy();
       
    })
    test('would expect result to have a length of 2 and 3 respectively', () => {
         expect(result.arr.length).toBe(2);
        expect(result.popArr.length).toBe(3);
    })
})

describe('addArr', () => {
    test('would the array sum to strictly be equal to [2,4,6,4]', () => {
        expect(arrays).toStrictEqual(answer);
        expect(arrays).toEqual(expect.arrayContaining(answer));
    })
})