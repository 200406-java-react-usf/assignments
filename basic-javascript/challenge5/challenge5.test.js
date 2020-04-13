const sut = require('./challenge5');

describe('challenge_5', () => {
    test('Should return a shifted string', () => {
        expect(sut.ceasarShift('Beware the ides of March', 7)).toBe('ILHYL OL PKLZ VM THYJO');
    });
    test('Should return an error if str is not a string', () => {
        expect(() => {
            ceasarShift(555, 7);
        }).toThrow();  
     });
     test('Should throw an error when the key value is not a number', () => {
         expect(() => {
             ceasarShift('Beware the Ides of March', '');
         });
     });
});
