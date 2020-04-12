const sut = require('./solution-3');


describe ('remove a charachter at a specified index and return new string without that character',() => {


    test('should return a string \'Tesing', done =>{
        let string = 'Testing';
        expect(sut(string,3)).toBe('Tesing');
        done();
    })

    test('should return a string \'raecar', done =>{
        let string = 'racecar';
        expect(sut(string,2)).toBe('raecar');
        done();
    })
})