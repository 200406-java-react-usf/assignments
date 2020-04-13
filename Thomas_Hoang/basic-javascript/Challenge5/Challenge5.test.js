const sut = require('./Challenge5.js');
const str = ('This is my test encryption')
describe('Caesar Shift Test', () => {
    test('Should return same string', done => { 
        expect( () => {sut(str,0)}).toBe("This is my test encryption");
        done();
})
    test('Should return encrypted string', done => { 
        expect( () => {
            sut(str,2)
        }).toBe('Vjkubkubn0bvguvbgqet0rvkpq');
        done();
})
});