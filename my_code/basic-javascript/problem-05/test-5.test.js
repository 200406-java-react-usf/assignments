const sut = require('./solution-5');

describe('implements a Caesar Shift encryption', ()=>{
   
    test('should ouput UFTUJOH', done =>{

        expect(sut('testing',1)).toBe('UFTUJOH');
        done();
    });

    test('should ouput PTWJD', done =>{

        expect(sut('korey',5)).toBe('PTWJD');
        done();
    });
});

