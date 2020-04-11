const sut = require('./solution-1');

describe('Solution 1', () => {

    /**
     * Test will check for all types of inputs to solution
     * 1 and return if the input is invalid or it the input is 
     * valid whether or not the year is a leap year.
     */

     test('should return the given year is a leapyear', done => {
         //expect.assertions(2);
        
         sut.LeapYear('October 1, 2020', year => {
             expect(year).toBeTruthy();
             expect(year).toEqual('Is a leap year.');
             done();
         }, ()=>{});
        });





 test('should return the given year is not a leapyear', done => {
    //expect.assertions(2);
   
    sut.LeapYear('October 1, 2021', year => {
        expect(year).toBeTruthy();
        expect(year).toEqual('Is not a leap year.');
        done();
    }, ()=>{});
});

test('should return the input was invalid when given a value not a date', done => {
        //expect.assertions(2);
       
        sut.LeapYear('Octuober', () => {}, err=>{
            expect(err).toBeTruthy();
            expect(err).toEqual('Bad request. Input provided is not valid');
            done()
        });
    });



});



