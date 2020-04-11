const sut = require('./solution-2.js');

describe('email', () => {
    test('hao.tran@gmail.com', done => {
        expect(sut("hao.tran@gmail.com")).toBe(true);
        done();
    });
    test('hao.trangmail.com', done => {
        expect(sut("hao.trangmail.com")).toBe(false);
        done();
    });
    test('@gmail.com', done => {
        expect(sut("@gmail.com")).toBe(false);
        done();
    });
    test('hao.tran@gmail', done => {
        expect(sut("hao.tran@gmail")).toBe(false);
        done();
    });
});
