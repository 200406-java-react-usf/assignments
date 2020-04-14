const sut = require('./solution-10');
let str = '!fuego!';
let str2 = 'mjzkv';
let str3 = 'cqsvq';
let str4 = 'ppufo';
let str5 = 'lhkdn';
let str6 = 'vcyvf';

describe ('testing string criteria',() => {

    test('returns letter if it follows said criteria', done => {
        expect(sut(str)).toBe('E');
        done();
    });

    test('returns string with one character removed from 4th slot', done => {
        expect(sut(str2)).toBe('C');
        done();
    });

    test('returns string with one character removed from 4th slot', done => {
        expect(sut(str3)).toBe('B');
        done();
    });

    test('returns string with one character removed from 4th slot', done => {
        expect(sut(str4)).toBe('D');
        done();
    });

    test('returns string with one character removed from 4th slot', done => {
        expect(sut(str5)).toBe('C');
        done();
    });

    test('returns string with one character removed from 4th slot', done => {
        expect(sut(str6)).toBe('D');
        done();
    });
})