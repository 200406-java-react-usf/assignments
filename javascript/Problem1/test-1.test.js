const sut = require('./solution-1');


describe('testing leap year', () => {

    test('return true', done => {
        let year = 2020;
        expect(sut(year)).toBe(true);
        done();
        
    });

    test('return false', done => {
        let year = 1962;
        expect(sut(year)).toBe(false);
        done();
    });    
});




/*
console.log(leapyear(2020));
console.log(leapyear(2016));
console.log(leapyear(2012));
console.log(leapyear(2100));
console.log(leapyear(2200));
console.log(leapyear(2300));
*/