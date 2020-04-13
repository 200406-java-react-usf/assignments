const sut = require('./solution-1');
var leapYear = userInput.getFullYear();

describe('date', () => {
    test ('should return boolean when getFullYear is called', done => {

        sut.getFullYear (date => {
            expect(date).toBeTruthy();
            done();
        });
    });
});