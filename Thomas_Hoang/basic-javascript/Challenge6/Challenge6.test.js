const sut = require('./Challenge6.js');
const str = ('This is my test encryption')

describe('vowel Counter', () => {

    test('Should return 8', done => { 
       expect(sut('This is my test encryption')).toBe(8);
       done();
})
    test('Should return error', done => { 
        expect( () =>{
            sut('')
        }).toThrow('There is no characters');   
        done();
})
});

