const sut = require('./solution-2.js');

describe('email', () => {
    test('hao.tran@gmail.com', () => {
        expect(sut("hao.tran@gmail.com")).toBe(true);
 
    });
    test('hao.trangmail.com', () => {
        expect(sut("hao.trangmail.com")).toBe(false);
    });
    test('@gmail.com', () => {
        expect(sut("@gmail.com")).toBe(false);        
    });
    test('hao.tran@gmail', () => {
        expect(sut("hao.tran@gmail")).toBe(false);      
    });
});
