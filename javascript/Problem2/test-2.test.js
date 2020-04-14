const sut = require('./solution-2');
let addr = 'lol@lolol.com';
let addr2 = 'lololol.com';

describe ('testing email validity',() => {

    test('return true', done => {
        
        expect(sut(addr)).toBe(true);
        done();
    });

    test('should return false', done => {
        expect(sut(addr2)).toBe(false);
        done();
    });
})



/*
console.log(EmailFormat('mohamed@mohameda.com'));
console.log(EmailFormat('lmao'));
console.log(EmailFormat('mohamed@mohameda@mohameda.com'));
console.log(EmailFormat(''));
*/