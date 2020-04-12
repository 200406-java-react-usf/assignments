const sut = require('./solution-2')

describe('Solution 2 Test', () => {

    /**
     * Test will verify that the input provided is a valid email.
     * If the input is not valid it will provide an error message.
     */

     test('Email provided should be valid', done => {

        sut.validateEmail('kane@gmail.com', email =>{
            expect(email).toBeTruthy();
            expect(email).toEqual(true);
            done;
        }, () => {} );

     });

     test('Email is missing characters befor the @ symbol. Should not be valid', done => {
        sut.validateEmail('@gmail.com', () =>{} ,err =>{
            expect(err).toBeTruthy();
            expect(err).toEqual('This is not a valid email.');
            done;
        });   
     });

     test('Email is missing  the @ symbol. Should not be valid', done => {
        sut.validateEmail('kanegmail.com', () =>{}, err => {
            expect(email).toBeTruthy();
            expect(email).toEqual('This is not a valid email.');
            done;
        });   
     });
     
     test('Email is missing characters after the @ symbol. Should not be valid', done => {
        sut.validateEmail('kane@.com', email =>{
            expect(email).toBeTruthy();
            expect(email).toEqual('This is not a valid email.');
            done;
        });   
     });

     test('Email is missing \'.\' after the @ symbol. Should not be valid', done => {
        sut.validateEmail('kane@gmailcom', () =>{} ,err =>{
            expect(err).toBeTruthy();
            expect(err).toEqual('This is not a valid email.');
            done;
        });   
     });

     test('Email is missing characters after the\'.\' the @ symbol. Should not be valid', done => {
        sut.validateEmail('kane@gmail.', () =>{} ,err =>{
            expect(err).toBeTruthy();
            expect(err).toEqual('This is not a valid email.');
            done;
        });   
     });
});