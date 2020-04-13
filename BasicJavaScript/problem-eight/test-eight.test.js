const sut = require('./solution-eight');


describe('testing arrays of multiple lengths and trying to add them together', () =>{

    test('arrays of the same length', () =>{

        //need to use toequal, it checks the element in each array
        expect(sut.addArrays([1,2,3],[3,2,1])).toEqual([4,4,4]);

    });

    test('first input has a larger array', () =>{

        expect(sut.addArrays([1,2,3,4,5],[1,2,3])).toEqual([2,4,6,4,5]);

    });

    test('first input has a larger array', () =>{

        expect(sut.addArrays([1,2,3],[1,2,3,4,5])).toEqual([2,4,6,4,5]);

    });

    test('testing the thrown error', () =>{

        expect(() => {sut.addArrays(5,[1,2,3,4,5])}).toThrow();

    });

});