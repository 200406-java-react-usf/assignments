const sut = require('./Problem5'); //system under test = sut

describe('Problem5', () => {
    
    test('Takes a string and a number as parameters and implements a Caesar Shift encryption', done => {
        expect.assertions(6);
        let string1 = "abc";
        let string2 = "abc";
        let string3 = "xyz";
        let string4 = "xyz";
        let string5 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let string6 = "abc xyz";
        let estring1 = "xyz";
        let estring2 = "wxy";
        let estring3 = "uvw";
        let estring4 = "tuv";
        let estring5 = "xyzabcdefghijklmnopqrstuvw";
        let estring6 = "xyz uvw";
        let shift1 = 3;
        let shift2 = 4;
        let shift3 = 3;
        let shift4 = 4;
        let shift5 = 3;
        let shift6 = 3;
        expect(sut.ceasarShift(string1, shift1)).toBe(estring1);
        expect(sut.ceasarShift(string2, shift2)).toBe(estring2);
        expect(sut.ceasarShift(string3, shift3)).toBe(estring3);
        expect(sut.ceasarShift(string4, shift4)).toBe(estring4);
        expect(sut.ceasarShift(string5, shift5)).toBe(estring5);
        expect(sut.ceasarShift(string6, shift6)).toBe(estring6);
        done();
    });

});