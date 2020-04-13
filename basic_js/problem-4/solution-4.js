function removeTest(str, onComplete, onError) {
    if (typeof str == "string") {
        let rep = /test/gi;

        let newstr = str.replace(rep, '');
        onComplete(newstr);
    }
    else {
        onError('Input not a string');
    }
}

module.exports = {
removeTest
}
// removeTest('this test rocks!', str => console.log(str), ()=>{});
// removeTest('this rocks!', str => console.log(str), ()=>{});
// removeTest(2222, () => {}, err=> console.log(err));