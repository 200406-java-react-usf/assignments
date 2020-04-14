const sut = require('./solution-9');
var rando = ["siutll", "vukm", "qhrmhuu", "mhuubs", "jbwkzt", "wahzc", "zpowjbwkztn", "fjvuknuk", "aycfzs"];
var cars = ["Volvo", "BMW", "Ford", "Mazda"];

describe ('testing longest string length',() => {

    test('returns array index of longest string', done => {
        expect(sut(rando)).toBe(11);
        done();
    });

    test('returns array index of longest string', done => {
        expect(sut(cars)).toBe(5);
        done();
    });
})