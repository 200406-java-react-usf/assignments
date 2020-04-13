const sut = require('./Problem5'); //system under test = sut

describe('Problem5', () => {
    
    test('Takes a string and a number as parameters and implements a Caesar Shift encryption', done => {
        expect.assertions(10);
        //input strings
        let string1 = "abc";
        let string2 = "abc";
        let string3 = "xyz";
        let string4 = "xyz";
        let string5 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let string6 = "abc xyz";
        let string7 = "%$^#^";
        let string8 = "abcdefghijklmnopqrstuvwxyz."
        //expected output
        let estring1 = "xyz";
        let estring2 = "wxy";
        let estring3 = "uvw";
        let estring4 = "tuv";
        let estring5 = "XYZABCDEFGHIJKLMNOPQRSTUVW";
        let estring6 = "xyz uvw";
        let estring7 = "%$^#^";
        let estring8 = "xyzabcdefghijklmnopqrstuvw.";
        //shifts
        let shift1 = 3;
        let shift2 = 4;
        let shift3 = 3;
        let shift4 = 4;
        let shift5 = 3;
        let shift6 = 3;
        let shift7 = 3;
        let shift8 = 3;
        //input/shits with various combinations of bad input
        let wrongType1 = 123;
        let correctType1 = 3;
        let correctType2 = "good string";
        let wrongType2 = "I am also a string for some reason";
        expect(sut.ceasarShift(string1, shift1)).toBe(estring1);
        expect(sut.ceasarShift(string2, shift2)).toBe(estring2);
        expect(sut.ceasarShift(string3, shift3)).toBe(estring3);
        expect(sut.ceasarShift(string4, shift4)).toBe(estring4);
        expect(sut.ceasarShift(string5, shift5)).toBe(estring5);
        expect(sut.ceasarShift(string6, shift6)).toBe(estring6);
        expect(sut.ceasarShift(string7, shift7)).toBe(estring7);
        expect(sut.ceasarShift(string8, shift8)).toBe(estring8);
        expect((wrongType1, correctType1) => {
            sut.ceasarShift(wrongType1, correctType1);
        }).toThrow();
        expect((correctType2, wrongType2) => {
            sut.ceasarShift(correctType2, wrongType2);
        }).toThrow();
        done();
    });

});