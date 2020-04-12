function removeTest(str, onComplete, onError) {
    if (typeof str == "string") {
        let rep = /test/gi;

        let newstr = str.replace(rep, '');
        onComplete(newstr);
    }
     onError('Input not a string');
}

removeTest('this test rocks!', str => console.log(str), ()=>{});

removeTest('this rocks!', str => console.log(str), ()=>{});
removeTest('this test rocks!', () => {}, err=> console.log(err));