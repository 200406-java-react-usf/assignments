
function test(test){
    if (!test.includes('test')){
        let testTest = test + " test"
        return testTest
    }
    else{ return test}
    
}



console.log(test('exam'))