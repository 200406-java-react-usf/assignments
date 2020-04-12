const sut = require('./solution-4');

describe('solution-4', () => {
    test('Should replace the test in the text: I love test test cats test and dog', done =>{
        expect.assertions(1);
        const tst = sut.replaceWrdTst("I love test test cats test and dogs.")
        expect(tst).toEqual('I love cats and dogs.');
        done();

    })
    test('Should replace the test in the text: test Worst test test enemies test.', done =>{
        expect.assertions(1);
        const tst = sut.replaceWrdTst("test Worst test test enemies test.")
        expect(tst).toEqual('Worst enemies.');
        done();

    })

})