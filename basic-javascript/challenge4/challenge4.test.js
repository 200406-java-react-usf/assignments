const sut = require('./challenge4');

describe('challenge_4', () => {
    test ('should return a string without the specified word in it', () => {
       expect( sut.removeWord('a testfest is a fest', 'test')).toBe('a fest is a fest');        
    });
    test ('Should return an error if str is not a string', () => {
       expect(() => {
           removeWord(555, 'test');
       }).toThrow();  
    });
    test ('Should return an error if word is not a string', () => {
        expect(() => {
            removeWord('just testing', 480);
        }).toThrow();  
     });    
});
